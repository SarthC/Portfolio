import React, { useState } from 'react';
import {
  TrendingUp,
  Github,
  ExternalLink,
  Edit3,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  techStack: string[];
  impactMetrics: string[];
  description: string;
  featured: boolean;
  isPlaceholder?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const projects: ProjectItem[] = [
  {
    id: 'docusense',
    title: 'DocuSense AI Agent',
    tagline: 'Autonomous AI document extraction agent',
    category: 'AI/ML',
    techStack: ['Supervity Platform', 'LLMs', 'NLP', 'Prompt Engineering'],
    impactMetrics: [
      '95%+ data retrieval accuracy on legal and financial documents',
      '70% reduction in manual document review and processing time',
    ],
    description:
      'Engineered an autonomous AI agent for deep extraction and structuring of financial agreements and legal clauses.',
    featured: true,
  },
  {
    id: 'neverout',
    title: 'Never Out',
    tagline: 'Multi-tenant SaaS inventory platform for Kirana shops',
    category: 'Full-Stack',
    techStack: ['React', 'Flask', 'MongoDB', 'Scikit-Learn', 'Twilio', 'Clerk'],
    impactMetrics: [
      '15% procurement budget optimization via Scikit-Learn demand forecasting',
      'Automated WhatsApp restocking alerts dispatched through Twilio API',
      'Custom JWT middleware securing multi-tenant backend with Clerk auth',
    ],
    description:
      'Developed a full-stack multi-tenant SaaS inventory platform tailored for local retail grocery shops with automated alerts.',
    featured: true,
  },
  {
    id: 'netsage',
    title: 'NetSage AI',
    tagline: 'AI-assisted network troubleshooting for Cisco environments',
    category: 'AI/ML',
    techStack: ['AI Integration', 'Cisco Packet Tracer', 'Vercel'],
    impactMetrics: [
      'Deployed on Vercel with high-availability serverless routines',
      'Streamlined network topology diagnostic cycle times',
    ],
    description:
      'Designed and engineered this AI-assisted network troubleshooting tool specifically for Cisco Packet Tracer to automate diagnostic flows.',
    featured: true,
  },
  {
    id: 'pofix',
    title: 'Pofix',
    tagline: 'Crowdsourced road-safety app with real-time hazard verification',
    category: 'Computer Vision',
    techStack: [
      'MobileNet V2',
      'Firebase',
      'OpenStreetMap API',
      'React',
      'Node.js',
      'SendGrid',
      'EmailJS',
    ],
    impactMetrics: [
      'MobileNet V2 computer vision model for road defect classification',
      'Real-time driver alerts mapped via OpenStreetMap API',
      'Automated municipal hazard notifications via SendGrid & EmailJS',
    ],
    description:
      'Built a crowdsourced road-safety system with real-time driver warnings and automated municipal dispatch for detected potholes.',
    featured: true,
  },
  {
    id: 'groundzero',
    title: 'GroundZero',
    tagline: 'Architecture and benchmarks slot',
    category: 'Engineering',
    techStack: ['System Architecture', 'To Be Configured'],
    impactMetrics: ['Architecture metrics and GitHub links to be provided by Sarthak'],
    description: 'Reserved dedicated slot for the GroundZero initiative.',
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 'dukaanvoice',
    title: 'DukaanVoice',
    tagline: 'Voice-activated multilingual billing assistant',
    category: 'Voice AI',
    techStack: ['Web Speech API', 'React', 'Node.js', 'Speech Recognition'],
    impactMetrics: [
      'Winner of Open Source Track at HackStorm 2026',
      'Hands-free voice recognition for high-frequency retail transactions',
    ],
    description:
      'Developed a voice-activated billing assistant for vernacular merchants, winning the Open Source Track at HackStorm 2026 with Team Two Variables.',
    featured: true,
  },
  {
    id: 'plant-ecommerce',
    title: 'Plant E-Commerce Platform',
    tagline: 'Responsive botanical retail platform',
    category: 'Web Apps',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    impactMetrics: [
      'Fully responsive UI/UX architecture optimized across mobile and desktop',
      'Dynamic catalog browsing, cart operations, and checkout workflows',
    ],
    description:
      'Developed a modern, responsive online retail store dedicated to plants and botanical goods.',
    featured: false,
  },
  {
    id: 'astech',
    title: 'Astech Science Prototypes',
    tagline: 'Interactive physics and accelerator engineering models',
    category: 'Hardware/IoT',
    techStack: ['Electronics', 'Laser Optics', 'Scale Modeling', 'Instrumentation'],
    impactMetrics: [
      'Laser sound wave visualization apparatus demonstrating acoustic wave patterns',
      'Large Hadron Collider (LHC) physical scale simulation model',
    ],
    description:
      'Engineered interactive scientific hardware prototypes at Astech Science Club demonstrating complex physical phenomena.',
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Filter tabs
// ---------------------------------------------------------------------------

const filterTabs = [
  'All',
  'AI/ML',
  'Full-Stack',
  'Computer Vision',
  'Voice AI',
  'Web Apps',
  'Hardware/IoT',
  'Engineering',
] as const;

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14">
          <span className="section-eyebrow">INDEX 03 / WORKS</span>
          <h2 className="section-title mb-4">Key Projects &amp; Impact</h2>
          <p className="section-subtitle">
            Autonomous AI agents, machine learning platforms, computer vision applications, and distributed software systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#BA2F2F]/20 dark:border-neutral-800 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-all ${
                activeFilter === tab
                  ? 'bg-[#BA2F2F] text-[#FEFDFD] dark:bg-white dark:text-black border border-[#BA2F2F] dark:border-white'
                  : 'bg-transparent text-[#040101]/80 dark:text-neutral-400 border border-[#BA2F2F]/35 dark:border-neutral-800 hover:border-[#BA2F2F] hover:text-[#BA2F2F] dark:hover:border-neutral-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) =>
            project.isPlaceholder ? (
              <PlaceholderCard key={project.id} project={project} index={idx} />
            ) : (
              <ProjectCard key={project.id} project={project} index={idx} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// Project Card (Museum / Gallery Aesthetic with Red Accents)
// ---------------------------------------------------------------------------

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  return (
    <div className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-6 flex flex-col justify-between hover:border-[#BA2F2F] dark:hover:border-neutral-500 transition-colors">
      <div>
        {/* Top bar: Index and Category */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#BA2F2F]/20 dark:border-neutral-900">
          <span className="text-[10px] font-mono text-[#BA2F2F] dark:text-neutral-600 uppercase tracking-widest font-bold">
            PROJECT #{String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-2">
            <span className="border border-[#BA2F2F] dark:border-neutral-700 text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-0.5 text-[#BA2F2F] dark:text-neutral-300 font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="bg-[#BA2F2F] text-[#FEFDFD] dark:bg-white dark:text-black text-[9px] font-mono uppercase tracking-[0.16em] px-2 py-0.5 font-bold">
                FEATURED
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#040101] dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-400 mb-4 font-semibold">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-[#040101]/85 dark:text-neutral-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Impact Metrics */}
        {project.impactMetrics.length > 0 && (
          <div className="mb-6 border-t border-b border-[#BA2F2F]/20 dark:border-neutral-900 py-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#BA2F2F] dark:text-neutral-500 block">
              MEASURED IMPACT
            </span>
            {project.impactMetrics.map((metric, mIdx) => (
              <div key={mIdx} className="flex items-start gap-2 text-xs font-medium text-[#040101] dark:text-neutral-200">
                <TrendingUp size={13} className="mt-0.5 flex-shrink-0 text-[#BA2F2F] dark:text-white" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-4 border-t border-[#BA2F2F]/20 dark:border-neutral-900">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[#BA2F2F] dark:border-neutral-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#040101] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <Github size={12} />
            GitHub
          </a>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[#BA2F2F] dark:border-neutral-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#040101] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        ) : null}

        {!project.githubUrl && !project.liveUrl && (
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#040101]/60 dark:text-neutral-600">
            Internal / Repository Pending
          </span>
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Placeholder Card (GroundZero)
// ---------------------------------------------------------------------------

const PlaceholderCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  return (
    <div className="border border-dashed border-[#BA2F2F]/60 dark:border-neutral-700 bg-[#BA2F2F]/5 dark:bg-neutral-950/50 p-6 flex flex-col justify-between">
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
          <span className="text-[10px] font-mono text-[#BA2F2F] dark:text-neutral-600 uppercase tracking-widest font-bold">
            PROJECT #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="border border-dashed border-[#BA2F2F] dark:border-neutral-700 text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-0.5 text-[#BA2F2F] dark:text-neutral-400 font-semibold">
            DRAFT / EDITABLE
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Edit3 className="w-4 h-4 text-[#BA2F2F]" />
          <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#040101] dark:text-white">
            {project.title}
          </h3>
        </div>

        <p className="text-xs uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-400 mb-4 font-semibold">
          Dedicated Space for GroundZero Specifications
        </p>

        <div className="border border-dashed border-[#BA2F2F]/30 dark:border-neutral-800 p-4 bg-[#FEFDFD] dark:bg-black mb-4">
          <p className="text-xs font-mono text-[#040101]/75 dark:text-neutral-400 leading-relaxed">
            [Sarthak: Paste the exact architecture details, tech stack breakdown, benchmarks, and production GitHub repository links for GroundZero here.]
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#BA2F2F]/20 dark:border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-600 font-semibold">
          Awaiting input &bull; Ready for deployment
        </span>
      </div>
    </div>
  );
};

export default Projects;
