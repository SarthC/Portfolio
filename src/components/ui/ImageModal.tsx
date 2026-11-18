import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FEFDFD] dark:bg-black border border-[#BA2F2F] dark:border-neutral-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title & Close button */}
        <div className="flex items-center justify-between p-6 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#BA2F2F] dark:text-neutral-500 block mb-1 font-semibold">
              DOCUMENT PREVIEW
            </span>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-[#040101] dark:text-white pr-4">
              {title || 'Media Viewer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#BA2F2F] dark:border-neutral-700 flex items-center justify-center text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X size={15} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default ImageModal;
