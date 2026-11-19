import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeTab);

  return (
    <section id="skills" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-eyebrow">INDEX 01 / ARSENAL</span>
          <h2 className="section-title mb-4">Technical Skills</h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and development tooling applied across machine learning workflows and production systems.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#BA2F2F]/20 dark:border-neutral-800 pb-6">
          {['All', ...skillCategories.map((c) => c.name)].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-[#BA2F2F] text-[#FEFDFD] dark:bg-white dark:text-black border border-[#BA2F2F] dark:border-white'
                  : 'bg-transparent text-[#040101]/80 dark:text-neutral-400 border border-[#BA2F2F]/35 dark:border-neutral-800 hover:border-[#BA2F2F] hover:text-[#BA2F2F] dark:hover:border-neutral-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="border border-[#BA2F2F] dark:border-neutral-800 p-6 bg-[#FEFDFD] dark:bg-black"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#BA2F2F]/20 dark:border-neutral-900">
                <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#040101] dark:text-white">
                  {category.name}
                </h3>
                <span className="text-[10px] text-[#BA2F2F] dark:text-neutral-600 font-bold">
                  {category.skills.length} TOOLS
                </span>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
