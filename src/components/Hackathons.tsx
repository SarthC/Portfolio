import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ImagePlus,
  Trophy,
} from 'lucide-react';
import { hackathons } from '../data/portfolioData';
import ImageModal from './ui/ImageModal';

const Hackathons: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<{
    hackathonName: string;
    caption: string;
  } | null>(null);

  return (
    <section id="hackathons" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-eyebrow">INDEX 04 / ARENA</span>
          <h2 className="section-title mb-4">Hackathons &amp; Events</h2>
          <p className="section-subtitle">
            National finalist appearances, track victories, startup weekends, and developer ecosystem summits.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hack, idx) => (
            <div
              key={hack.id}
              className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Index & Achievement Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#BA2F2F]/20 dark:border-neutral-900">
                  <span className="text-[10px] font-mono text-[#BA2F2F] dark:text-neutral-600 uppercase tracking-widest font-bold">
                    EVENT #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 border border-[#BA2F2F] dark:border-neutral-700 text-[10px] font-mono uppercase tracking-[0.14em] px-2.5 py-1 text-[#BA2F2F] dark:text-white font-semibold">
                    <Trophy size={11} className="mr-0.5 text-[#BA2F2F] dark:text-white" />
                    {hack.achievement}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#040101] dark:text-white mb-2">
                  {hack.name}
                </h3>

                {/* Date & Location metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.12em] text-[#040101]/70 dark:text-neutral-400 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#BA2F2F]" />
                    {hack.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#BA2F2F]" />
                    {hack.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#040101]/85 dark:text-neutral-400 leading-relaxed mb-4">
                  {hack.description}
                </p>

                {/* Team & Project Details */}
                {(hack.teamName || hack.projectShowcased) && (
                  <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.12em] py-3 border-t border-b border-[#BA2F2F]/20 dark:border-neutral-900 mb-6 text-[#040101] dark:text-neutral-300">
                    {hack.teamName && (
                      <div>
                        <span className="text-[#BA2F2F] dark:text-neutral-500 font-semibold">TEAM: </span>
                        <span className="font-bold">{hack.teamName}</span>
                      </div>
                    )}
                    {hack.projectShowcased && (
                      <div>
                        <span className="text-[#BA2F2F] dark:text-neutral-500 font-semibold">PROJECT: </span>
                        <span className="font-bold">{hack.projectShowcased}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Media Gallery / Photo Proof Slots */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#BA2F2F] dark:text-neutral-500 mb-3 block">
                  DOCUMENTATION &amp; PROOF GALLERY
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hack.mediaSlots.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      onClick={() =>
                        setSelectedSlot({
                          hackathonName: hack.name,
                          caption: slot.caption,
                        })
                      }
                      className="border border-dashed border-[#BA2F2F]/40 dark:border-neutral-700 p-3 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#BA2F2F] dark:hover:border-neutral-400 bg-[#BA2F2F]/5 dark:bg-neutral-950/50 transition-all min-h-[95px] group"
                    >
                      <ImagePlus size={18} className="text-[#BA2F2F] dark:text-zinc-400 group-hover:scale-110 transition-transform mb-1.5" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-[#040101]/80 dark:text-neutral-400 font-medium">
                        {slot.caption}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.14em] font-bold text-[#BA2F2F] dark:text-white mt-1 underline underline-offset-2">
                        Upload Proof
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Lightbox Modal */}
      <ImageModal
        isOpen={selectedSlot !== null}
        onClose={() => setSelectedSlot(null)}
        title={selectedSlot ? `${selectedSlot.hackathonName} — ${selectedSlot.caption}` : undefined}
      >
        {selectedSlot && (
          <div className="flex flex-col items-center justify-center py-10 gap-4">
            <ImagePlus className="w-12 h-12 text-[#BA2F2F] dark:text-neutral-600" />
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.16em] font-semibold text-[#040101] dark:text-white mb-1">
                Upload Verification Asset
              </p>
              <p className="text-xs text-[#040101]/70 dark:text-neutral-400 max-w-sm">
                Attach proof photo, stage snap, travel ticket, or certificate for <span className="font-semibold text-[#BA2F2F]">{selectedSlot.caption}</span>.
              </p>
            </div>
            <div className="border border-dashed border-[#BA2F2F]/60 dark:border-neutral-700 w-full max-w-md h-40 flex items-center justify-center bg-[#BA2F2F]/5 dark:bg-neutral-950 cursor-pointer hover:border-[#BA2F2F] dark:hover:border-neutral-400 transition-colors">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-zinc-500 font-semibold">
                Click to browse or drop file
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#040101]/60 dark:text-neutral-600">
              Files are saved to public/assets/events/
            </p>
          </div>
        )}
      </ImageModal>
    </section>
  );
};

export default Hackathons;
