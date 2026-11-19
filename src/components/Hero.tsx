import React from 'react';
import { ExternalLink, Github, Mail, GraduationCap, Calendar, Award } from 'lucide-react';
import BinaryPortrait from './BinaryPortrait';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow Label */}
          <div className="mb-6">
            <span className="section-eyebrow">
              ENGINEERING &bull; ARTIFICIAL INTELLIGENCE &bull; QUANTUM COMPUTING
            </span>
          </div>

          {/* Main Hero Header: Wider Binary Portrait on Left, Name & Bio on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
            {/* Left Column: High-Resolution Wider Binary Portrait */}
            <div className="lg:col-span-7 xl:col-span-6 w-full">
              <BinaryPortrait src="/assets/portrait.png" />
            </div>

            {/* Right Column: Name, Tagline, Bio, Quick Actions */}
            <div className="lg:col-span-5 xl:col-span-6 text-left flex flex-col justify-between">
              <div>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.05em] leading-[0.95] text-[#040101] dark:text-white mb-6">
                  Sarthak Choudhari
                </h1>

                <p className="text-base sm:text-lg text-[#040101]/80 dark:text-neutral-400 font-normal leading-relaxed mb-6">
                  Full-Stack Developer, AI &amp; Machine Learning Enthusiast, and Computer Science Engineering Student.
                </p>

                <div className="border-t border-b border-[#BA2F2F]/30 dark:border-neutral-800 py-6 mb-8">
                  <p className="text-sm sm:text-base text-[#040101]/85 dark:text-neutral-300 leading-relaxed">
                    I am currently in my third year pursuing a B.Tech in Computer Science and Engineering (Core CS + AI Engineering), alongside a minor in Quantum Computing at MIT Art, Design and Technology University, Pune. I specialize in building AI-driven solutions and full-stack web applications. As a highly active hackathon competitor, I focus on solving real-world problems through robust, production-grade technology.
                  </p>
                </div>
              </div>

              {/* Action CTAs & Social Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#projects" className="btn-primary">
                    Explore Projects
                  </a>
                  <a href="#contact" className="btn-outline">
                    Contact Me
                  </a>
                </div>

                {/* Quick Socials */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/sarthak-choudhari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#BA2F2F] dark:border-neutral-700 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#040101] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink size={13} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/SarthC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#BA2F2F] dark:border-neutral-700 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#040101] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:sarthakc8493@gmail.com"
                    className="flex items-center gap-2 border border-[#BA2F2F] dark:border-neutral-700 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#040101] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
                    aria-label="Email"
                  >
                    <Mail size={13} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Timeline Cards in Crisp Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* B.Tech */}
            <div className="border border-[#BA2F2F] dark:border-neutral-800 p-6 bg-[#FEFDFD] dark:bg-black">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#BA2F2F] dark:text-neutral-400">
                  UNDERGRADUATE EDUCATION
                </span>
                <span className="inline-flex items-center gap-1 border border-[#BA2F2F] dark:border-neutral-700 px-2.5 py-0.5 text-xs font-mono font-semibold text-[#BA2F2F] dark:text-white">
                  <Award size={12} className="mr-0.5" /> CGPA 8.52
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold tracking-tight text-[#040101] dark:text-white mb-1">
                B.Tech in Computer Science &amp; Engineering
              </h3>
              <p className="text-xs uppercase tracking-[0.14em] text-[#040101]/70 dark:text-neutral-400 mb-3 font-semibold">
                Core CS + AI Engineering &bull; Minor in Quantum Computing
              </p>
              <p className="text-sm text-[#040101]/80 dark:text-neutral-400 mb-4">
                MIT Art, Design and Technology University, Pune
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#040101]/60 dark:text-neutral-500 border-t border-[#BA2F2F]/20 dark:border-neutral-900 pt-3">
                <Calendar size={13} />
                <span>Aug 2024 – May 2028</span>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="border border-[#BA2F2F] dark:border-neutral-800 p-6 bg-[#FEFDFD] dark:bg-black">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#BA2F2F] dark:text-neutral-400">
                  HIGHER SECONDARY
                </span>
                <span className="inline-flex items-center gap-1 border border-[#BA2F2F] dark:border-neutral-700 px-2.5 py-0.5 text-xs font-mono text-[#BA2F2F] dark:text-white font-semibold">
                  <GraduationCap size={12} className="mr-0.5" /> High School
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold tracking-tight text-[#040101] dark:text-white mb-1">
                Higher Secondary Education (Class XI &amp; XII)
              </h3>
              <p className="text-xs uppercase tracking-[0.14em] text-[#040101]/70 dark:text-neutral-400 mb-3 font-semibold">
                Science &amp; Mathematics Stream
              </p>
              <p className="text-sm text-[#040101]/80 dark:text-neutral-400 mb-4">
                Sir Parashurambhau College, Pune
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#040101]/60 dark:text-neutral-500 border-t border-[#BA2F2F]/20 dark:border-neutral-900 pt-3">
                <Calendar size={13} />
                <span>Aug 2022 – May 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
