import React from 'react';
import {
  Trophy,
  Medal,
  Dumbbell,
  Target,
  Telescope,
  Music,
  Globe,
  Footprints,
} from 'lucide-react';

const medals = [
  { year: '2024-25', place: 'Gold Medalist', rank: '1ST PLACE' },
  { year: '2025-26', place: 'Gold Medalist', rank: '1ST PLACE' },
  { year: '2026-27', place: 'Silver Medalist', rank: '2ND PLACE' },
];

const trainingSports = [
  { name: 'Long-distance Running & Endurance', icon: Footprints },
  { name: 'Football (Tactical & Competitive)', icon: Target },
  { name: 'Boxing & Conditioning', icon: Dumbbell },
];

const clubs = [
  {
    name: 'GeeksforGeeks MIT ADT Chapter',
    year: '2025',
    role: 'Technical Team Member',
    highlights: [
      'Engineered and launched the official student portal serving 500+ active users',
      'Orchestrated large-scale AI Agent Workshop and competitive DSA Bootcamp',
    ],
  },
  {
    name: 'QQuest Technical Club',
    year: '2025 – Present',
    role: 'Active Technical Member',
    highlights: [
      'Contributing to quantum computing algorithms, Qiskit circuits, and technical seminars',
    ],
  },
  {
    name: 'Astech Science Club',
    year: '2024 – 2025',
    role: 'Technical Member & Builder',
    highlights: [
      'Designed and built interactive laser sound wave visualization system',
      'Collaborated on scale prototype of the Large Hadron Collider',
    ],
  },
];

const hobbies = [
  {
    name: 'Observational Astronomy',
    icon: Telescope,
    description: 'Deep-sky telescope observation, lunar terrain exploration, and planetary tracking.',
  },
  {
    name: 'Guitar Performance',
    icon: Music,
    description: 'Acoustic and fingerstyle guitar arrangements, music theory, and composition.',
  },
  {
    name: 'Linguistics & German',
    icon: Globe,
    description: 'Conversational German language practice, grammar, and international exchange.',
  },
];

const Extracurriculars: React.FC = () => {
  return (
    <section id="extracurriculars" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-eyebrow">INDEX 06 / LEADERSHIP &amp; PURSUITS</span>
          <h2 className="section-title mb-4">Beyond Code</h2>
          <p className="section-subtitle">
            Inter-collegiate endurance athletics, club engineering leadership, and observational science.
          </p>
        </div>

        {/* Two-column layout: Athletics & Club Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Athletics & Sports */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
              <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#040101] dark:text-white flex items-center gap-2">
                <Trophy size={14} className="text-[#BA2F2F]" />
                Athletics &amp; Sports
              </h3>
              <span className="text-[10px] font-mono text-[#BA2F2F] dark:text-neutral-600 uppercase font-bold">
                3x Medalist
              </span>
            </div>

            {/* Cross Country Medalist Card */}
            <div className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6">
              <h4 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#040101] dark:text-white mb-2">
                Inter-Collegiate Cross Country Medalist
              </h4>
              <p className="text-xs uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-400 mb-6 font-semibold">
                Annual University Cross-Country Championships
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {medals.map((m) => (
                  <div
                    key={m.year}
                    className="border border-[#BA2F2F] dark:border-neutral-700 p-3 bg-[#BA2F2F]/5 dark:bg-neutral-950 text-center"
                  >
                    <Medal size={16} className="mx-auto mb-1 text-[#BA2F2F] dark:text-white" />
                    <span className="block text-[11px] font-mono font-bold text-[#040101] dark:text-white">
                      {m.rank}
                    </span>
                    <span className="block text-[10px] font-mono text-[#BA2F2F] dark:text-neutral-400 font-semibold">
                      {m.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Training */}
            <div className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#040101] dark:text-white mb-4">
                Disciplines &amp; Daily Conditioning
              </h4>
              <div className="space-y-3">
                {trainingSports.map((sport) => (
                  <div
                    key={sport.name}
                    className="flex items-center gap-3 p-3 border border-[#BA2F2F]/20 dark:border-neutral-900 text-sm font-medium text-[#040101] dark:text-neutral-200"
                  >
                    <sport.icon size={16} className="text-[#BA2F2F] dark:text-white flex-shrink-0" />
                    <span>{sport.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Club Leadership */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
              <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#040101] dark:text-white flex items-center gap-2">
                Club Leadership &amp; Initiatives
              </h3>
              <span className="text-[10px] font-mono text-[#BA2F2F] dark:text-neutral-600 uppercase font-bold">
                3 Organizations
              </span>
            </div>

            <div className="space-y-4">
              {clubs.map((club) => (
                <div
                  key={club.name}
                  className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-heading text-base font-semibold tracking-[-0.02em] text-[#040101] dark:text-white">
                      {club.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#BA2F2F] dark:text-neutral-400 font-bold">
                      {club.year}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#BA2F2F] dark:text-neutral-400 mb-3">
                    {club.role}
                  </p>
                  <ul className="space-y-1.5 border-t border-[#BA2F2F]/20 dark:border-neutral-900 pt-3">
                    {club.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#040101]/80 dark:text-neutral-400 leading-relaxed">
                        <span className="inline-block w-1 h-1 rounded-full bg-[#BA2F2F] dark:bg-white mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Hobbies in 3-column Museum Layout */}
        <div>
          <div className="pb-3 border-b border-[#BA2F2F]/20 dark:border-neutral-800 mb-8">
            <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#040101] dark:text-white text-center">
              Personal Interests &amp; Explorations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6 text-center hover:border-[#BA2F2F] dark:hover:border-neutral-500 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-[#BA2F2F] dark:border-neutral-700 mb-4 text-[#BA2F2F] dark:text-white">
                  <hobby.icon size={20} />
                </div>
                <h4 className="font-heading text-base font-semibold tracking-tight text-[#040101] dark:text-white mb-2">
                  {hobby.name}
                </h4>
                <p className="text-xs text-[#040101]/75 dark:text-neutral-400 leading-relaxed font-mono">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
