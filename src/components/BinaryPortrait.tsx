import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Upload, Eye, Zap } from 'lucide-react';

// ---------------------------------------------------------------------------
// High-Resolution Configuration (Wider footprint & high detail)
// ---------------------------------------------------------------------------
const GRID_COLS = 120;              // Wider character density across
const CHAR_W = 5.2;                 // Width per character cell in px
const CHAR_H = 7.5;                 // Height per character cell in px
const HOVER_RADIUS = 145;           // Enhanced glow radius for wider canvas

interface BinaryPortraitProps {
  src?: string;
  className?: string;
}

const BinaryPortrait: React.FC<BinaryPortraitProps> = ({
  src = '/assets/portrait.png',
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Core matrices
  const baseGridRef = useRef<number[][]>([]);
  const isSubjectRef = useRef<boolean[][]>([]);
  const displayGridRef = useRef<number[][]>([]);

  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  const [activeSrc, setActiveSrc] = useState<string>(src);
  const [invertSubject, setInvertSubject] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  // ── Process Image with Unsharp Masking + Floyd-Steinberg Dithering ──
  const processImage = useCallback(
    (img: HTMLImageElement) => {
      const cols = GRID_COLS;
      const imgAspect = img.width / img.height; // e.g. 664 / 563 = 1.18

      // Determine canvas physical pixel dimensions maintaining exact photo aspect ratio
      const canvasW = Math.round(cols * CHAR_W);
      const canvasH = Math.round(canvasW / imgAspect);
      const rows = Math.round(canvasH / CHAR_H);

      canvasSizeRef.current = { w: canvasW, h: canvasH };

      // Sample raw pixels from original image
      const sampleCanvas = document.createElement('canvas');
      sampleCanvas.width = cols;
      sampleCanvas.height = rows;
      const sCtx = sampleCanvas.getContext('2d', { willReadFrequently: true })!;
      sCtx.drawImage(img, 0, 0, cols, rows);

      const imageData = sCtx.getImageData(0, 0, cols, rows);

      // 1. Build initial luminance map & alpha mask
      const lumMap: Float32Array[] = [];
      const alphaMap: Uint8Array[] = [];

      for (let y = 0; y < rows; y++) {
        lumMap[y] = new Float32Array(cols);
        alphaMap[y] = new Uint8Array(cols);

        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const r = imageData.data[idx];
          const g = imageData.data[idx + 1];
          const b = imageData.data[idx + 2];
          const a = imageData.data[idx + 3];

          alphaMap[y][x] = a;

          if (a > 30) {
            // Perceived luminance formula (ITU-R BT.601)
            let lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            // Contrast expansion to pull out eyes, nostrils, smile, and teeth
            lum = (lum - 0.5) * 1.35 + 0.5;
            lumMap[y][x] = Math.max(0, Math.min(1, lum));
          } else {
            lumMap[y][x] = 0;
          }
        }
      }

      // 2. Apply 3x3 unsharp mask to crisp facial contours (eyes, nose, teeth, hair texture)
      const sharpMap: Float32Array[] = [];
      for (let y = 0; y < rows; y++) {
        sharpMap[y] = new Float32Array(cols);
        for (let x = 0; x < cols; x++) {
          if (alphaMap[y][x] <= 30) continue;

          let sum = 0;
          let count = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const ny = y + dy;
              const nx = x + dx;
              if (ny >= 0 && ny < rows && nx >= 0 && nx < cols && alphaMap[ny][nx] > 30) {
                sum += lumMap[ny][nx];
                count++;
              }
            }
          }
          const blur = sum / count;
          const highFreq = lumMap[y][x] - blur;
          sharpMap[y][x] = Math.max(0, Math.min(1, lumMap[y][x] + highFreq * 0.9));
        }
      }

      // 3. Floyd-Steinberg Error Diffusion Dithering for smooth, high-fidelity binary detail
      const ditherMap = sharpMap.map((row) => new Float32Array(row));
      const baseGrid: number[][] = [];
      const isSubject: boolean[][] = [];

      for (let y = 0; y < rows; y++) {
        const bRow: number[] = [];
        const sRow: boolean[] = [];

        for (let x = 0; x < cols; x++) {
          const isPerson = alphaMap[y][x] > 30;
          sRow.push(isPerson);

          if (!isPerson) {
            bRow.push(0);
            continue;
          }

          const oldVal = ditherMap[y][x];
          // Dithering threshold with invert toggle
          let newVal = oldVal > 0.46 ? 1 : 0;
          if (invertSubject) {
            newVal = newVal === 1 ? 0 : 1;
          }

          bRow.push(newVal);

          const err = oldVal - (invertSubject ? (newVal === 0 ? 1 : 0) : newVal);

          // Distribute quantization error to neighbouring cells
          if (x + 1 < cols && alphaMap[y][x + 1] > 30) {
            ditherMap[y][x + 1] += err * (7 / 16);
          }
          if (y + 1 < rows) {
            if (x - 1 >= 0 && alphaMap[y + 1][x - 1] > 30) {
              ditherMap[y + 1][x - 1] += err * (3 / 16);
            }
            if (alphaMap[y + 1] && alphaMap[y + 1][x] > 30) {
              ditherMap[y + 1][x] += err * (5 / 16);
            }
            if (x + 1 < cols && alphaMap[y + 1][x + 1] > 30) {
              ditherMap[y + 1][x + 1] += err * (1 / 16);
            }
          }
        }

        baseGrid.push(bRow);
        isSubject.push(sRow);
      }

      baseGridRef.current = baseGrid;
      isSubjectRef.current = isSubject;
      displayGridRef.current = baseGrid.map((row) => [...row]);

      // Set canvas size with device pixel ratio
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvasW * dpr;
        canvas.height = canvasH * dpr;
        canvas.style.width = `${canvasW}px`;
        canvas.style.height = `${canvasH}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
      }

      setLoaded(true);
    },
    [invertSubject]
  );

  // ── Load the active image ──
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      processImage(img);
    };

    img.onerror = () => {
      // Fallback: draw circular silhouette
      const cols = GRID_COLS;
      const rows = Math.round(cols * 0.85);
      const baseGrid: number[][] = [];
      const isSubject: boolean[][] = [];
      const cx = cols / 2;
      const cy = rows / 2;
      const maxR = cols * 0.38;

      for (let y = 0; y < rows; y++) {
        const bRow: number[] = [];
        const sRow: boolean[] = [];
        for (let x = 0; x < cols; x++) {
          const dist = Math.sqrt((x - cx) ** 2 + ((y - cy) * 1.2) ** 2);
          if (dist < maxR) {
            bRow.push(Math.random() > 0.4 ? 1 : 0);
            sRow.push(true);
          } else {
            bRow.push(0);
            sRow.push(false);
          }
        }
        baseGrid.push(bRow);
        isSubject.push(sRow);
      }

      baseGridRef.current = baseGrid;
      isSubjectRef.current = isSubject;
      displayGridRef.current = baseGrid.map((row) => [...row]);

      const canvasW = Math.round(cols * CHAR_W);
      const canvasH = Math.round(rows * CHAR_H);
      canvasSizeRef.current = { w: canvasW, h: canvasH };

      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvasW * dpr;
        canvas.height = canvasH * dpr;
        canvas.style.width = `${canvasW}px`;
        canvas.style.height = `${canvasH}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
      }
      setLoaded(true);
    };

    img.src = activeSrc;
  }, [activeSrc, processImage]);

  // ── Animation & Hover Draw Loop ──
  useEffect(() => {
    let frameCount = 0;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const baseGrid = baseGridRef.current;
      const isSub = isSubjectRef.current;
      const disp = displayGridRef.current;
      if (baseGrid.length === 0) return;

      const rows = baseGrid.length;
      const cols = baseGrid[0].length;
      const mouse = mouseRef.current;
      frameCount++;

      ctx.clearRect(0, 0, canvasSizeRef.current.w, canvasSizeRef.current.h);
      ctx.font = '7px "Geist Mono", monospace';
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isPerson = isSub[r][c];
          const cx = c * CHAR_W + CHAR_W / 2;
          const cy = r * CHAR_H + CHAR_H / 2;

          let cellVal = disp[r][c];

          // Dynamic hover interaction: numbers near cursor interactively glitch/flip
          if (mouse) {
            const dx = cx - mouse.x;
            const dy = cy - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < HOVER_RADIUS) {
              // Smooth dynamic matrix flutter near cursor
              if (frameCount % 3 === 0 && Math.random() < 0.2) {
                cellVal = Math.random() > 0.5 ? 1 : 0;
                disp[r][c] = cellVal;
              }

              const t = 1 - dist / HOVER_RADIUS;

              if (isDark) {
                // Dark mode: Radiant cyan-to-emerald glow
                const hue = (165 + t * 45) % 360;
                const lightness = 65 + t * 20;
                const alpha = isPerson ? 0.95 : 0.35 + t * 0.45;
                ctx.fillStyle = `hsla(${hue}, 95%, ${lightness}%, ${alpha})`;
              } else {
                // Light mode: Vibrant crimson red #BA2F2F glow with white highlight
                const alpha = isPerson ? 0.98 : 0.35 + t * 0.55;
                ctx.fillStyle = `rgba(186, 47, 47, ${alpha})`;
              }
            } else {
              // Return to base state
              disp[r][c] = baseGrid[r][c];
              if (isDark) {
                ctx.fillStyle = isPerson
                  ? cellVal === 1
                    ? 'rgba(255,255,255,0.95)'
                    : 'rgba(255,255,255,0.48)'
                  : 'rgba(255,255,255,0.09)';
              } else {
                // Light mode (Red #BA2F2F, White #FEFDFD, Black #040101)
                ctx.fillStyle = isPerson
                  ? cellVal === 1
                    ? 'rgba(186,47,47,0.96)'  // #BA2F2F Red
                    : 'rgba(4,1,1,0.82)'      // #040101 Black
                  : 'rgba(186,47,47,0.12)';   // Faint Red matrix background
              }
            }
          } else {
            // Idle state: restore base value smoothly
            if (disp[r][c] !== baseGrid[r][c] && frameCount % 6 === 0) {
              disp[r][c] = baseGrid[r][c];
            }
            if (isDark) {
              ctx.fillStyle = isPerson
                ? cellVal === 1
                  ? 'rgba(255,255,255,0.95)'
                  : 'rgba(255,255,255,0.45)'
                : 'rgba(255,255,255,0.08)';
            } else {
              // Light mode (Red #BA2F2F, White #FEFDFD, Black #040101)
              ctx.fillStyle = isPerson
                ? cellVal === 1
                  ? 'rgba(186,47,47,0.96)'  // #BA2F2F Red
                  : 'rgba(4,1,1,0.82)'      // #040101 Black
                : 'rgba(186,47,47,0.1)';    // Faint Red matrix background
            }
          }

          ctx.fillText(String(cellVal), c * CHAR_W, r * CHAR_H + 1);
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDark]);

  // ── Mouse Tracking Listeners ──
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvasSizeRef.current.w / rect.width;
    const scaleY = canvasSizeRef.current.h / rect.height;
    mouseRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = null;
  }, []);

  // ── Upload Custom Image ──
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setActiveSrc(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`relative group w-full ${className}`}>
      {/* High-Definition Museum Gallery Container with Red/Dark borders */}
      <div className="relative border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-2 sm:p-3 shadow-sm transition-colors">
        {/* High-Definition Canvas (wider, responsive) */}
        <div className="overflow-x-auto flex justify-center">
          <canvas
            ref={canvasRef}
            className="cursor-crosshair max-w-full h-auto block mx-auto transition-all"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Interactive Controls Bar */}
        <div className="mt-2.5 pt-2 border-t border-[#BA2F2F]/25 dark:border-neutral-900 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#040101]/70 dark:text-neutral-400">
          <span className="flex items-center gap-1.5 uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-emerald-400 font-semibold">
            <Zap size={11} className="text-[#BA2F2F] dark:text-amber-500" />
            HOVER TO ILLUMINATE
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setInvertSubject(!invertSubject)}
              className="inline-flex items-center gap-1 hover:text-[#BA2F2F] dark:hover:text-white uppercase tracking-[0.14em] transition-colors"
              title="Invert 1s and 0s"
            >
              <Eye size={11} />
              {invertSubject ? 'NORMAL' : 'INVERT'}
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1 hover:text-[#BA2F2F] dark:hover:text-white uppercase tracking-[0.14em] transition-colors"
              title="Upload new image"
            >
              <Upload size={11} />
              CHANGE PHOTO
            </button>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
};

export default BinaryPortrait;
