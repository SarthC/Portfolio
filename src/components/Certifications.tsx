import React, { useState, useMemo } from 'react';
import { Eye, FileText, Plus } from 'lucide-react';
import { certifications, type CertificateItem } from '../data/portfolioData';
import ImageModal from './ui/ImageModal';

const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Build filter tabs from data
  const filterTabs = useMemo(() => {
    const issuerMap = new Map<string, number>();
    certifications.forEach((cert) => {
      const key = cert.issuer.startsWith('IBM') ? 'IBM' : cert.issuer;
      issuerMap.set(key, (issuerMap.get(key) || 0) + 1);
    });

    const tabs: { label: string; count: number }[] = [
      { label: 'All', count: certifications.length },
    ];
    issuerMap.forEach((count, issuer) => {
      tabs.push({ label: issuer, count });
    });
    return tabs;
  }, []);

  const filteredCerts = useMemo(() => {
    if (activeFilter === 'All') return certifications;
    return certifications.filter((cert) => {
      const normalizedIssuer = cert.issuer.startsWith('IBM') ? 'IBM' : cert.issuer;
      return normalizedIssuer === activeFilter;
    });
  }, [activeFilter]);

  return (
    <section id="certifications" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-eyebrow">INDEX 05 / CREDENTIALS</span>
          <h2 className="section-title">Certifications Vault</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#BA2F2F]/20 dark:border-neutral-800 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveFilter(tab.label)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-all ${activeFilter === tab.label
                ? 'bg-[#BA2F2F] text-[#FEFDFD] dark:bg-white dark:text-black border border-[#BA2F2F] dark:border-white'
                : 'bg-transparent text-[#040101]/80 dark:text-neutral-400 border border-[#BA2F2F]/35 dark:border-neutral-800 hover:border-[#BA2F2F] hover:text-[#BA2F2F] dark:hover:border-neutral-400'
                }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert, idx) => (
            <div
              key={cert.id}
              className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6 flex flex-col justify-between hover:border-[#BA2F2F] dark:hover:border-neutral-500 transition-colors"
            >
              <div>
                {/* Header with index and issuer */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#BA2F2F]/20 dark:border-neutral-900">
                  <span className="text-[10px] text-[#BA2F2F] dark:text-neutral-600 uppercase tracking-widest font-bold">
                    CERT #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="border border-[#BA2F2F] dark:border-neutral-700 text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 text-[#BA2F2F] dark:text-neutral-300 font-semibold">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#040101] dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#BA2F2F] dark:text-neutral-400 mb-4">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#BA2F2F] dark:border-neutral-700 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <Eye size={13} />
                Preview Document
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Lightbox Modal */}
      <ImageModal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
      >
        {selectedCert && (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="w-14 h-14 border border-[#BA2F2F] dark:border-neutral-700 flex items-center justify-center text-[#BA2F2F] dark:text-white">
              <FileText className="w-7 h-7" />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-heading font-semibold tracking-tight text-[#040101] dark:text-white">
                {selectedCert.title}
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-[#BA2F2F] dark:text-neutral-400 mt-1 font-semibold">
                Issued by {selectedCert.issuer}
              </p>
            </div>
            <div className="border border-dashed border-[#BA2F2F]/50 dark:border-neutral-700 w-full max-w-md h-48 flex items-center justify-center bg-[#BA2F2F]/5 dark:bg-neutral-950">
              <span className="text-xs uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-zinc-500 font-semibold">
                Official PDF/Image Preview
              </span>
            </div>
            <p className="text-[11px] text-[#040101]/60 dark:text-neutral-600">
              Asset Path: public/assets/certificates/
            </p>
          </div>
        )}
      </ImageModal>
    </section>
  );
};

export default Certifications;
