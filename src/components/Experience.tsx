import React from 'react';
import { Calendar, AlertCircle, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import type { ExperienceItem } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-eyebrow">INDEX 02 / ROLES</span>
          <h2 className="section-title mb-4">Professional Experience</h2>
          <p className="section-subtitle">
            Industry apprenticeships, software engineering internships, and systems development.
          </p>
        </div>

        {/* Experience List in Clean Gallery Grid */}
        <div className="space-y-8">
          {(experiences as ExperienceItem[]).map((exp, idx) => (
            <div
              key={exp.id}
              className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6 sm:p-8"
            >
              {/* Header row: Index, Role, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#BA2F2F]/20 dark:border-neutral-800 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[#BA2F2F] dark:text-neutral-600 font-bold">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                    {exp.badge && (
                      <span className="border border-[#BA2F2F] dark:border-neutral-700 text-[10px] uppercase tracking-[0.18em] px-2.5 py-0.5 text-[#BA2F2F] dark:text-neutral-300 font-semibold">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#040101] dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-400 mt-1">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#040101] dark:text-neutral-400 self-start md:self-auto border border-[#BA2F2F]/40 dark:border-neutral-800 px-3 py-1.5 font-semibold">
                  <Calendar size={13} className="text-[#BA2F2F] dark:text-neutral-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#BA2F2F] dark:text-neutral-500 mb-3 block">
                  KEY DELIVERABLES &amp; IMPACT
                </span>
                <ul className="space-y-2.5">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-[#040101]/85 dark:text-neutral-300 leading-relaxed">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BA2F2F] dark:bg-white mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Placeholder for Sarthak */}
              {exp.metricsPlaceholder && (
                <div className="placeholder-box mb-4">
                  <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-[0.18em] text-[#BA2F2F] dark:text-white mb-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{exp.metricsPlaceholder.label}</span>
                  </div>
                  <p className="text-xs text-[#040101]/80 dark:text-neutral-400">
                    {exp.metricsPlaceholder.description}
                  </p>
                </div>
              )}

              {/* Certificate Proof */}
              {exp.certificateProof && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border border-[#BA2F2F]/30 dark:border-neutral-800 bg-[#BA2F2F]/5 dark:bg-neutral-950">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-[#BA2F2F] dark:text-white flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#040101] dark:text-white">
                        {exp.certificateProof.title}
                      </p>
                      <p className="text-[11px] text-[#040101]/70 dark:text-neutral-400">
                        Official verification issued {exp.certificateProof.issueDate}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#certifications"
                    className="self-start sm:self-auto text-[11px] uppercase tracking-[0.16em] font-semibold text-[#BA2F2F] dark:text-white underline underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    View in Vault &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
