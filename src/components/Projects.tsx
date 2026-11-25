import React, { useState } from 'react';
import {
  TrendingUp,
  Github,
  ExternalLink,
  Edit3,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  MapPin,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Sparkles,
  ShieldCheck,
  Compass,
  Video,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProjectScreenshot {
  src: string;
  caption: string;
  tag: string;
}

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
  videoDemoUrl?: string;
  role?: string;
  timeline?: string;
  detailedOverview?: string;
  heroImage?: string;
  screenshots?: ProjectScreenshot[];
  keyFeatures?: { title: string; description: string }[];
  problemVsSolution?: { problem: string; solution: string };
  engineeringChallenges?: { title: string; description: string }[];
  techStackLayers?: { layer: string; technologies: string[] }[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const projects: ProjectItem[] = [
  {
    id: 'groundzero',
    title: 'GroundZero',
    tagline: 'AI-Powered Geospatial Water Contamination Intelligence & Upstream Point-Source Tracing',
    category: 'Geospatial AI',
    role: 'Full-Stack & Frontend ML Developer',
    timeline: 'Aug 2026 – Nov 2026',
    featured: true,
    heroImage: '/assets/projects/groundzero/river-pollution-tracer-map.png',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Leaflet',
      'Turf.js',
      'Overpass API',
      'Python',
      'FastAPI',
      'Shapely',
      'Pandas',
      'OCR / LLM Pipeline',
      'Supabase',
      'Vercel',
    ],
    impactMetrics: [
      'Upstream Point-Source Tracing: Slices river centerlines (A → C) with 500m–5km catchment buffers',
      'Automated Suspect Attribution: Real-time Overpass API queries isolating polluting industrial facilities',
      'Multi-Factor Risk Scoring: Proximity, effluent chemical category, and tributary drain intersections',
      'AI Lab Ingestion: Converts unstructured lab assays (pH, TDS, NO3, DO, heavy metals) to GIS map layers',
    ],
    description:
      'An AI-driven geospatial intelligence and decision-support dashboard that maps groundwater and river contamination, extracts water quality metrics from lab reports, and traces pollution spikes back to probable upstream industrial sources.',
    detailedOverview:
      'Water quality monitoring usually tells you that a river is polluted, but rarely tells you where the contamination entered. GroundZero bridges that gap by combining GIS spatial analysis with automated lab report parsing. By comparing clean upstream baselines (Location A) against polluted downstream readings (Location C), the platform isolates the affected river corridor and flags high-probability industrial sources (Location B) along the banks—turning raw environmental data into actionable enforcement intelligence.',
    problemVsSolution: {
      problem:
        'Environmental agencies and researchers rely on scattered PDF lab reports and static sampling points, making it slow and manual to pinpoint which industrial discharge caused a sudden spike in river toxicity.',
      solution:
        'GroundZero automates both data ingestion and spatial attribution—converting lab readings into live map layers and narrowing down suspect polluters to a targeted riverbank corridor in seconds.',
    },
    keyFeatures: [
      {
        title: 'Upstream Point-Source Tracing (A → C Corridor Analysis)',
        description:
          'Automatically slices the river centerline between a clean upstream point and a polluted downstream point, generating an adaptive spatial catchment buffer (500m–5km) to isolate suspect zones.',
      },
      {
        title: 'Automated Suspect Industry Identification',
        description:
          'Queries geospatial industrial data (OpenStreetMap / Overpass API & regional industrial datasets) to surface real facility names, sectors (chemical, textile, pharma, etc.), and exact distances from the riverbank.',
      },
      {
        title: 'Multi-Factor Risk Scoring',
        description:
          'Ranks flagged facilities based on riverbank proximity, industrial effluent category, and tributary/drain intersections so investigators see the highest-probability polluters first.',
      },
      {
        title: 'Interactive GIS Risk Dashboard',
        description:
          'Color-coded river polylines (Green = Safe Baseline, Red = Contamination Zone, Orange = Downstream Plume) with toggleable catchment overlays, pan-India groundwater wells, and a suspect inspection drawer.',
      },
      {
        title: 'AI Lab Report Extraction',
        description:
          'Parses unstructured water quality lab reports to automatically extract key parameters (DO, BOD, TDS, pH, NO3, F, Fe, heavy metals) and plot them directly onto the interactive map.',
      },
    ],
    engineeringChallenges: [
      {
        title: 'Eliminating Spatial Noise via Polygon Buffering',
        description:
          'Standard bounding-box API queries return factories kilometers away from the water; implemented polygon buffering and point-to-line distance calculations via Turf.js to isolate only facilities within the active river corridor.',
      },
      {
        title: 'Handling Incomplete Map Data with Hybrid Ingestion',
        description:
          'Combined live Overpass API queries with structured regional industrial datasets and geofenced fallback caches to ensure accurate facility naming and sector classification.',
      },
      {
        title: 'End-to-End Decision Support & Human-Readable WQI',
        description:
          'Designed a clean, high-contrast map UI that makes complex multi-parameter chemical exceedances immediately readable for field inspectors and non-technical stakeholders.',
      },
    ],
    techStackLayers: [
      {
        layer: 'Frontend & UI',
        technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
      },
      {
        layer: 'Geospatial & Mapping',
        technologies: ['Leaflet', 'OpenStreetMap', 'Turf.js', 'Overpass API', 'GeoJSON'],
      },
      {
        layer: 'Backend & APIs',
        technologies: ['Python', 'FastAPI', 'Flask', 'Shapely GIS', 'REST API'],
      },
      {
        layer: 'AI & Data Processing',
        technologies: ['Pandas', 'NumPy', 'OCR Pipeline', 'LLM Parameter Parser', 'WQI Calculator'],
      },
      {
        layer: 'Database & Deployment',
        technologies: ['MongoDB', 'Supabase PostGIS', 'Vercel', 'Render'],
      },
    ],
    screenshots: [
      {
        src: '/assets/projects/groundzero/river-pollution-tracer-map.png',
        caption: 'River Pollution Source Tracer Map — A → C corridor selection with dynamic 5km buffer',
        tag: 'GIS Routing',
      },
      {
        src: '/assets/projects/groundzero/corridor-comparison-sources.png',
        caption: 'Water Quality Corridor Comparison — Bhadalwadi (Clean) to Hivre (Polluted) with inferred dischargers',
        tag: 'Attribution Engine',
      },
      {
        src: '/assets/projects/groundzero/national-groundwater-map-wqi.png',
        caption: 'National Groundwater Map & WQI Gauge — 54,429+ test stations with instant usability gauge',
        tag: 'Pan-India GIS',
      },
      {
        src: '/assets/projects/groundzero/contamination-forecast-trend.png',
        caption: 'Contamination Trend & Forecast — Multi-year predictive curve with What-If rainfall scenario modeling',
        tag: 'Time-Series ML',
      },
      {
        src: '/assets/projects/groundzero/intelligence-alerts-dashboard.png',
        caption: 'Intelligence Dashboard — Automated priority test wells, land-use drift alerts, and statewide filters',
        tag: 'Risk Intelligence',
      },
      {
        src: '/assets/projects/groundzero/ask-water-quality-ai.png',
        caption: 'Conversational Water Quality AI — Natural language queries resolving station safety & usability',
        tag: 'Natural Language AI',
      },
      {
        src: '/assets/projects/groundzero/groundwater-risk-report.png',
        caption: 'District Groundwater Risk Executive Report — Automated field intervention PDF document generation',
        tag: 'Automated Reports',
      },
      {
        src: '/assets/projects/groundzero/water-usability-analysis.png',
        caption: 'Water Usability & Standard Breakdown — Parameter limits (pH, TDS, TH, NO3, Fe, Cl) and safety tiers',
        tag: 'Assay Breakdown',
      },
      {
        src: '/assets/projects/groundzero/parameter-breakdown-risk.png',
        caption: 'Why is it Risky? Bar Breakdown — Visualized percentage deviation exceeding permissible limits',
        tag: 'Risk Analytics',
      },
    ],
    githubUrl: 'https://github.com/SarthC/GroundZero',
  },
  {
    id: 'docusense',
    title: 'DocuSense AI Agent',
    tagline: 'Autonomous Corporate Research, Compliance & Multi-Registry Verification Agent',
    category: 'AI/ML',
    role: 'Autonomous AI Agent Engineer — CodeQuest 2026 (Round 2)',
    timeline: 'Mar 2026',
    featured: true,
    heroImage: '/assets/projects/docusense/docusense-audit-trail-split.jpg',
    videoDemoUrl: 'https://lnkd.in/p/gby7UJ7c',
    techStack: [
      'Supervity Auto',
      'LLMs',
      'NLP',
      'Prompt Engineering',
      'Indian GST Portal',
      'Zauba Corp / MCA',
      'Web Search APIs',
      'Dynamic PDF Gen',
      'Excel Automation',
      'Email Services',
    ],
    impactMetrics: [
      '95%+ data retrieval accuracy on legal filings and complex financial agreements',
      '70% reduction in manual document review, due diligence, and compliance processing time',
      'Parallel multi-source entity cross-verification against Indian GST Portal & Zauba Corp / MCA',
      'Built on Supervity Auto platform with governed step-level DAG execution and live audit trail',
    ],
    description:
      'An autonomous corporate research and compliance agent built on Supervity Auto for CodeQuest 2026 (Round 2). Automates document extraction, Indian registry cross-verification, adverse media intelligence, and zero-click compliance report dispatch for B2B due diligence.',
    detailedOverview:
      'DocuSense AI Agent is an autonomous corporate research and compliance agent built for CodeQuest 2026 (Round 2) on the Supervity Auto platform. It automates the extraction, cross-verification, and risk analysis of complex financial and legal documents—replacing hours of manual due diligence with a zero-click workflow designed for B2B sales teams and financial analysts. Ingesting raw financial or legal documents, the agent extracts corporate identifiers via LLM-driven NLP, cross-checks registry records across the Indian GST Portal and Zauba Corp / MCA, scans live web APIs for adverse news and positive highlights, synthesizes a unified risk score, and automatically updates Excel records while emailing a structured PDF brief to stakeholders.',
    problemVsSolution: {
      problem:
        'Corporate compliance officers and B2B sales teams spend hours manually combing through unstructured legal documents, navigating disjointed Indian government registries (GST, MCA), and searching web sources to verify company legitimacy and detect risk.',
      solution:
        'DocuSense delivers an autonomous, step-level governed agent workflow on Supervity Auto that extracts company parameters, cross-verifies official registries in parallel, scores risk, and dispatches audited PDF reports in minutes with zero manual intervention.',
    },
    keyFeatures: [
      {
        title: 'Financial & Legal Document Parsing (95%+ Accuracy)',
        description:
          'Uses LLM-driven NLP pipelines and structured prompt engineering to extract key fields from unstructured filings, financial statements, and contracts with over 95% data retrieval precision.',
      },
      {
        title: 'Multi-Source Corporate Verification (GST & Zauba Corp)',
        description:
          'Autonomously cross-checks extracted corporate entities against authoritative Indian registries: Indian GST Portal for taxpayer status and return filing history, and Zauba Corp / MCA for company status and director signatories.',
      },
      {
        title: 'Web Intelligence & Risk Profiling',
        description:
          'Executes parallel search API routines to conduct adverse media queries (fraud, litigation, penalties) and positive business highlights (major deals, contract wins, funding) to assemble a balanced, multi-dimensional risk profile.',
      },
      {
        title: 'Automated Multi-Channel Reporting & Sync (~70% Time Saved)',
        description:
          'Synthesizes a composite risk score, writes records to Microsoft Excel on OneDrive, compiles a ready-to-share PDF due diligence report, and dispatches the brief via email to compliance officers.',
      },
      {
        title: 'Governed Step-Level Workflow Execution',
        description:
          'Orchestrated on Supervity Auto with visual DAG monitoring, real-time node state progression, output schemas, and an audit trail ensuring reliable enterprise-grade execution.',
      },
    ],
    engineeringChallenges: [
      {
        title: 'Parallel Multi-Registry Ingestion & Anti-Scraping Resilience',
        description:
          'Engineered asynchronous scraping and lookup routines across government and commercial registries (GST Portal & Zauba Corp), ensuring robust error recovery and schema normalization for varied company structures.',
      },
      {
        title: 'High-Fidelity Information Extraction without Hallucination',
        description:
          'Designed constrained prompt templates and step-level output validation gates that force LLM nodes to cite verbatim document clauses, preventing hallucinations on legal entities and financial metrics.',
      },
      {
        title: 'Zero-Click End-to-End Orchestration & Multi-Channel Delivery',
        description:
          'Integrated disparate downstream systems—Excel cloud spreadsheets, headless PDF rendering engines, and SMTP email services—into a continuous DAG pipeline executed without manual human intervention.',
      },
    ],
    techStackLayers: [
      {
        layer: 'Agent Platform & Orchestration',
        technologies: ['Supervity Auto', 'Agentic Workgraphs', 'React Flow DAG Engine', 'Audit Trail Telemetry'],
      },
      {
        layer: 'AI & Intelligence',
        technologies: ['Large Language Models (LLMs)', 'NLP Extraction Pipelines', 'Structured Prompt Engineering', 'Risk Scoring Algorithm'],
      },
      {
        layer: 'Verification & Registry Sources',
        technologies: ['Indian GST Portal (Taxpayer & Filing Status)', 'Zauba Corp / MCA (Directors & Status)', 'Web Search APIs (Adverse Media & News)'],
      },
      {
        layer: 'Outputs & Automated Delivery',
        technologies: ['Dynamic PDF Generation', 'Microsoft Excel (OneDrive Database Sync)', 'Automated Email Dispatch Service'],
      },
    ],
    screenshots: [
      {
        src: '/assets/projects/docusense/docusense-audit-trail-split.jpg',
        caption: 'DocuSense Live Workgraph & Audit Trail — Step-level execution tracking GST scraping, Zauba Corp registry lookups, and adverse media queries on Supervity Auto',
        tag: 'Live Audit Trail',
      },
      {
        src: '/assets/projects/docusense/docusense-workgraph-dag.jpg',
        caption: 'Full React Flow Workgraph DAG — Parallel verification nodes, risk scoring engine, and multi-channel outputs (Excel, Email, PDF)',
        tag: 'Workgraph DAG',
      },
      {
        src: '/assets/projects/docusense/docusense-execution-completed.jpg',
        caption: 'Completed Compliance Pipeline — Real-time state transitions and structured output validation for corporate due diligence',
        tag: 'Compliance Engine',
      },
    ],
  },
  {
    id: 'neverout',
    title: 'NeverOut',
    tagline: 'AI-Powered Multi-Tenant Kirana Inventory with Automated WhatsApp Restocking & Seasonal ML Forecasting',
    category: 'Full-Stack',
    role: 'Full-Stack & ML Engineer',
    timeline: '2026',
    featured: true,
    heroImage: '/assets/projects/neverout/neverout-home-hero.png',
    techStack: [
      'React 19',
      'Python',
      'Flask',
      'MongoDB Atlas',
      'Scikit-Learn',
      'Twilio API',
      'Clerk Auth',
      'html5-qrcode',
      'WebGL (ogl)',
      'Pandas',
    ],
    impactMetrics: [
      'Zero-click WhatsApp restocking alerts dispatched via Twilio Messaging API on critical thresholds',
      '15% procurement budget optimization using Scikit-Learn seasonal regression & moving averages',
      'Hardware-free camera barcode scanner querying Open Food Facts REST API for instant product resolution',
      'Multi-tenant architecture with Clerk RSA JWT verification & isolated MongoDB Atlas stores',
    ],
    description:
      'An AI-powered, multi-tenant inventory management platform tailored for local Kirana (mom-and-pop) stores, featuring automated zero-click WhatsApp restocking alerts, camera barcode scanning with Open Food Facts integration, and seasonal ML demand forecasting.',
    detailedOverview:
      'In India and emerging markets, local Kirana shopkeepers frequently face revenue losses due to stockouts, manual ledger miscalculations, and unexpected seasonal demand spikes. NeverOut bridges modern cloud intelligence and grassroots retail: it continuously monitors inventory against dynamic safety thresholds, automatically triggers zero-friction WhatsApp alerts via Twilio directly to shopkeepers and suppliers, leverages Scikit-Learn to identify seasonal consumption trends (e.g., festival surges for sugar/oil, winter tea demand), and provides a hardware-free camera barcode scanner querying Open Food Facts for instant grocery entry.',
    problemVsSolution: {
      problem:
        'Local Kirana retail stores rely primarily on manual ledgers and memory to manage inventory, leading to frequent stockouts, lost sales during festival spikes, and tedious manual restocking routines.',
      solution:
        'A lightweight, mobile-first inventory assistant that integrates with tools shopkeepers already use daily (WhatsApp), automates intake with camera barcode scanning, and predicts restocking needs through seasonal machine learning algorithms.',
    },
    keyFeatures: [
      {
        title: 'Intelligent WhatsApp Restocking Alerts (Zero-Click)',
        description:
          'Continuously checks inventory levels against custom minimum-threshold safety margins. Instantly pushes formatted restocking warnings and emergency out-of-stock messages straight to the shopkeeper\'s or supplier\'s WhatsApp via the Twilio Messaging API.',
      },
      {
        title: 'Predictive Seasonal Demand Engine (ML & Analytics)',
        description:
          'Utilizes Scikit-Learn linear regression and time-series moving averages across 12-month sales histories. Dynamically classifies items into High / Normal / Low Demand tiers and highlights seasonal peaks and off-peak months to prevent under-ordering.',
      },
      {
        title: 'In-Browser Barcode & QR Scanner',
        description:
          'Real-time video stream scanning via html5-qrcode directly from mobile or desktop cameras. Automatically queries the Open Food Facts REST API to resolve product titles and metadata, enabling instant item registration without manual typing.',
      },
      {
        title: 'Multi-Tenant Security & Tenant Isolation',
        description:
          'Protected by Clerk authentication with RSA public-key JWT verification in Flask. Each merchant operates within an isolated MongoDB Atlas workspace, automatically seeded with demo catalog data and 12-month sales histories upon signup.',
      },
      {
        title: 'Glassmorphic Modern UI & WebGL Visuals',
        description:
          'High-performance dark-mode interface built with React 19, custom glassmorphism styling, WebGL ribbon shaders (ogl), interactive particle network backgrounds, and reactive dashboard inventory counters.',
      },
    ],
    engineeringChallenges: [
      {
        title: 'Zero-Click Notification Reliability & Rate Management',
        description:
          'Engineered an event-driven alert pipeline in Flask using Twilio to guarantee instant WhatsApp delivery on stock depletion while debouncing duplicate triggers during bulk transaction updates.',
      },
      {
        title: 'Hardware-Free Inventory Ingestion via Web APIs',
        description:
          'Overcame the need for expensive physical handheld barcode readers by implementing html5-qrcode video streams and resilient asynchronous fallbacks against the Open Food Facts API.',
      },
      {
        title: 'Multi-Tenant Cryptographic Auth & Auto-Seeding',
        description:
          'Configured PyJWT with Clerk public RSA keys to securely authorize cross-origin API requests, pairing user tenant IDs with segregated MongoDB collections and automatic first-run inventory generation.',
      },
    ],
    techStackLayers: [
      {
        layer: 'Frontend & UI',
        technologies: ['React 19', 'Vite', 'React Router', 'HTML5/CSS3', 'Glassmorphism Design System'],
      },
      {
        layer: 'Visuals & Scanning',
        technologies: ['ogl (WebGL Ribbon Shaders)', 'HTML5 Canvas Particles', 'html5-qrcode'],
      },
      {
        layer: 'Authentication & Security',
        technologies: ['Clerk Auth', 'JWT RSA Cryptography', 'PyJWT', 'CORS Middleware'],
      },
      {
        layer: 'Backend & APIs',
        technologies: ['Python', 'Flask', 'Flask-CORS', 'Gunicorn', 'RESTful API'],
      },
      {
        layer: 'Machine Learning & Data',
        technologies: ['Scikit-Learn', 'Pandas', 'NumPy', 'Time-Series Regression'],
      },
      {
        layer: 'Database & Storage',
        technologies: ['MongoDB Atlas', 'PyMongo', 'Isolated Tenant Collections'],
      },
      {
        layer: 'External Integrations',
        technologies: ['Twilio WhatsApp API', 'Open Food Facts REST API'],
      },
      {
        layer: 'Deployment & DevOps',
        technologies: ['Render (Split Architecture: Static UI + Python Web Service)'],
      },
    ],
    screenshots: [
      {
        src: '/assets/projects/neverout/neverout-demand-insights.png',
        caption: 'ML Demand Insights Dashboard — Scikit-Learn seasonal predictions, peak/off-peak classification (Toor Dal, Basmati Rice, Sugar), and trend analytics',
        tag: 'Demand ML',
      },
      {
        src: '/assets/projects/neverout/neverout-home-hero.png',
        caption: 'NeverOut Portal Hero — Smart inventory tracking for Kirana shopkeepers with WebGL particle network background',
        tag: 'Home Dashboard',
      },
      {
        src: '/assets/projects/neverout/neverout-inventory-management.png',
        caption: 'Live Inventory Table — Real-time stock levels, low-stock threshold monitoring, quick Sell actions, and Barcode scanner integration',
        tag: 'Inventory Hub',
      },
      {
        src: '/assets/projects/neverout/neverout-add-product-modal.png',
        caption: 'Fast SKU Intake Modal — Seamless product registration with custom low-stock thresholds, category mapping, and pricing',
        tag: 'Product Intake',
      },
      {
        src: '/assets/projects/neverout/neverout-low-stock-alerts.png',
        caption: 'Low Stock Alert Monitoring — Threshold tracking preventing stockouts with zero-friction alert system',
        tag: 'Alert System',
      },
      {
        src: '/assets/projects/neverout-banner.svg',
        caption: 'NeverOut System Architecture — Camera Barcode Scanner, Twilio WhatsApp Alert Pipeline & Scikit-Learn Demand Forecasting Engine',
        tag: 'Architecture',
      },
    ],
    githubUrl: 'https://github.com/SarthC/NeverOut',
    liveUrl: 'https://neverout-app.onrender.com/',
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
  'Geospatial AI',
  'AI/ML',
  'Full-Stack',
  'Computer Vision',
  'Voice AI',
  'Web Apps',
  'Hardware/IoT',
] as const;

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

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
            Autonomous AI agents, geospatial intelligence platforms, machine learning systems, and distributed software engineering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#BA2F2F]/20 dark:border-neutral-800 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-all ${activeFilter === tab
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
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenCaseStudy={() => setSelectedCaseStudy(project)}
              />
            )
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
};

// ---------------------------------------------------------------------------
// Project Card (Museum / Gallery Aesthetic with Red Accents)
// ---------------------------------------------------------------------------

const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  onOpenCaseStudy: () => void;
}> = ({ project, index, onOpenCaseStudy }) => {
  const hasExtendedCaseStudy = Boolean(project.screenshots?.length || project.detailedOverview);

  return (
    <div className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black flex flex-col justify-between hover:border-[#BA2F2F] dark:hover:border-neutral-500 transition-all duration-300 group">
      <div>
        {/* Optional Hero Visual Header for projects with screenshots */}
        {project.heroImage && (
          <div
            onClick={onOpenCaseStudy}
            className="relative w-full h-48 bg-neutral-100 dark:bg-neutral-900 border-b border-[#BA2F2F]/30 dark:border-neutral-800 overflow-hidden cursor-pointer"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <div className="flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#BA2F2F] text-white border border-white/20">
                  <Eye className="w-3 h-3" />
                  {project.screenshots?.length} Visuals &amp; Deep Dive
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/80 font-mono">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Top bar: Index and Category */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#BA2F2F]/20 dark:border-neutral-900">
            <span className="text-[10px] text-[#BA2F2F] dark:text-neutral-600 uppercase tracking-widest font-bold">
              PROJECT #{String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <span className="border border-[#BA2F2F] dark:border-neutral-700 text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 text-[#BA2F2F] dark:text-neutral-300 font-semibold">
                {project.category}
              </span>
              {project.featured && (
                <span className="bg-[#BA2F2F] text-[#FEFDFD] dark:bg-white dark:text-black text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 font-bold">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#040101] dark:text-white mb-1 group-hover:text-[#BA2F2F] dark:group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-400 mb-4 font-semibold line-clamp-2">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-xs text-[#040101]/75 dark:text-neutral-400 mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Impact Metrics */}
          <div className="mb-5 space-y-2 border-l-2 border-[#BA2F2F] pl-3 py-1 bg-[#BA2F2F]/5 dark:bg-neutral-900/40">
            {project.impactMetrics.slice(0, 3).map((metric, i) => (
              <div key={i} className="flex items-start gap-2">
                <TrendingUp size={12} className="text-[#BA2F2F] mt-0.5 flex-shrink-0" />
                <span className="text-[11px] text-[#040101]/85 dark:text-neutral-300 font-medium leading-tight line-clamp-2">
                  {metric}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.slice(0, 6).map((tech) => (
              <span key={tech} className="skill-pill">
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="skill-pill opacity-70">
                +{project.techStack.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0">
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#BA2F2F]/20 dark:border-neutral-900">
          {hasExtendedCaseStudy && (
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center gap-1.5 bg-[#BA2F2F] text-white border border-[#BA2F2F] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <Sparkles size={12} />
              Case Study &amp; Visuals
            </button>
          )}

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

          {project.videoDemoUrl ? (
            <a
              href={project.videoDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#BA2F2F] dark:border-neutral-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#040101] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <Video size={12} />
              Video Demo
            </a>
          ) : null}

          {!project.githubUrl && !project.liveUrl && !project.videoDemoUrl && !hasExtendedCaseStudy && (
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#040101]/60 dark:text-neutral-600">
              Internal / Repository Pending
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Interactive Case Study Modal
// ---------------------------------------------------------------------------

const CaseStudyModal: React.FC<{
  project: ProjectItem;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const screenshots = project.screenshots || [];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#FEFDFD] dark:bg-[#070707] border-2 border-[#BA2F2F] text-[#040101] dark:text-white shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 bg-[#FEFDFD] dark:bg-[#070707] border-b-2 border-[#BA2F2F]/30 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#BA2F2F] text-white">
              CASE STUDY
            </span>
            <span className="text-xs uppercase tracking-widest font-mono text-[#BA2F2F] dark:text-neutral-400">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border border-[#BA2F2F] text-[#BA2F2F] hover:bg-[#BA2F2F] hover:text-white dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black transition-colors"
            aria-label="Close Case Study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          {/* Hero Title & Metadata */}
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#040101] dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#BA2F2F] dark:text-red-400 uppercase tracking-wider mb-4">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#040101]/80 dark:text-neutral-400 pb-6 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
              {project.role && (
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#BA2F2F]">ROLE:</span>
                  <span>{project.role}</span>
                </div>
              )}
              {project.timeline && (
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#BA2F2F]">TIMELINE:</span>
                  <span>{project.timeline}</span>
                </div>
              )}
              <div className="flex items-center gap-2 ml-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-[#BA2F2F] dark:border-neutral-700 px-3 py-1 font-semibold uppercase tracking-wider hover:bg-[#BA2F2F] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                  >
                    <Github size={12} />
                    Repo
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#BA2F2F] text-white px-3 py-1 font-semibold uppercase tracking-wider hover:bg-black transition-all"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                )}
                {project.videoDemoUrl && (
                  <a
                    href={project.videoDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#BA2F2F] text-white px-3 py-1 font-semibold uppercase tracking-wider hover:bg-black transition-all"
                  >
                    <Video size={12} />
                    Video Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Screenshot Showcase */}
          {screenshots.length > 0 && (
            <div className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#BA2F2F]/5 dark:bg-neutral-950 p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#BA2F2F]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#040101] dark:text-white">
                    Application Visuals &amp; Dashboard Views ({activeSlide + 1}/{screenshots.length})
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 border border-[#BA2F2F] text-[#BA2F2F] uppercase">
                  {screenshots[activeSlide].tag}
                </span>
              </div>

              {/* Main Viewport */}
              <div className="relative aspect-video w-full bg-black border border-[#BA2F2F]/40 dark:border-neutral-800 overflow-hidden group">
                <img
                  src={screenshots[activeSlide].src}
                  alt={screenshots[activeSlide].caption}
                  className="w-full h-full object-contain"
                />

                {/* Left/Right Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/80 hover:bg-[#BA2F2F] text-white border border-white/20 transition-all opacity-85 group-hover:opacity-100"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/80 hover:bg-[#BA2F2F] text-white border border-white/20 transition-all opacity-85 group-hover:opacity-100"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Caption */}
              <div className="bg-[#FEFDFD] dark:bg-neutral-900 border-l-4 border-[#BA2F2F] p-3">
                <p className="text-xs sm:text-sm font-medium text-[#040101] dark:text-neutral-200">
                  {screenshots[activeSlide].caption}
                </p>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative flex-shrink-0 w-20 sm:w-24 aspect-video border transition-all overflow-hidden ${activeSlide === idx
                      ? 'border-2 border-[#BA2F2F] ring-1 ring-[#BA2F2F]'
                      : 'border-neutral-300 dark:border-neutral-800 opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img src={s.src} alt={s.tag} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Overview */}
          {project.detailedOverview && (
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[#BA2F2F] dark:text-red-400 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Executive Summary &amp; Corridor Attribution
              </h3>
              <p className="text-sm leading-relaxed text-[#040101]/85 dark:text-neutral-300 bg-[#BA2F2F]/5 dark:bg-neutral-900/40 p-5 border-l-4 border-[#BA2F2F]">
                {project.detailedOverview}
              </p>
            </div>
          )}

          {/* Problem vs. Solution */}
          {project.problemVsSolution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-red-500/40 bg-red-500/5 dark:bg-red-950/20 p-5">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold uppercase tracking-wider text-xs mb-3">
                  <AlertTriangle size={16} />
                  The Problem
                </div>
                <p className="text-xs sm:text-sm text-[#040101]/85 dark:text-neutral-300 leading-relaxed">
                  {project.problemVsSolution.problem}
                </p>
              </div>

              <div className="border border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/20 p-5">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
                  <CheckCircle2 size={16} />
                  The GroundZero Solution
                </div>
                <p className="text-xs sm:text-sm text-[#040101]/85 dark:text-neutral-300 leading-relaxed">
                  {project.problemVsSolution.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[#040101] dark:text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#BA2F2F]" />
                Key Technical Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="border border-[#BA2F2F]/30 dark:border-neutral-800 p-4 bg-[#FEFDFD] dark:bg-black/60 hover:border-[#BA2F2F] transition-colors"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-[#BA2F2F] text-white">
                        0{idx + 1}
                      </span>
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-[#040101] dark:text-white">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#040101]/75 dark:text-neutral-400 leading-relaxed pl-6">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges Solved */}
          {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[#040101] dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#BA2F2F]" />
                Engineering Challenges Solved (Recruiter-Ready Takeaways)
              </h3>
              <div className="space-y-3">
                {project.engineeringChallenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-l-2 border-[#BA2F2F] bg-[#BA2F2F]/5 dark:bg-neutral-900/30"
                  >
                    <h4 className="font-bold text-xs sm:text-sm text-[#BA2F2F] dark:text-red-400 mb-1">
                      {ch.title}
                    </h4>
                    <p className="text-xs text-[#040101]/80 dark:text-neutral-300 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Architectural Tech Stack */}
          {project.techStackLayers && project.techStackLayers.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[#040101] dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#BA2F2F]" />
                System Architecture &amp; Technology Stack
              </h3>
              <div className="border border-[#BA2F2F]/30 dark:border-neutral-800 divide-y divide-[#BA2F2F]/20 dark:divide-neutral-800">
                {project.techStackLayers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FEFDFD] dark:bg-black/40"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#BA2F2F] dark:text-red-400 w-48 flex-shrink-0">
                      {layer.layer}
                    </span>
                    <div className="flex flex-wrap gap-1.5 flex-grow">
                      {layer.technologies.map((tech) => (
                        <span key={tech} className="skill-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Close Button */}
          <div className="pt-6 border-t border-[#BA2F2F]/20 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-mono text-[#040101]/60 dark:text-neutral-500">
              GroundZero &bull; Environmental Intelligence Dashboard
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#BA2F2F] text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
            >
              Close Deep Dive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Placeholder Card (fallback if ever needed)
// ---------------------------------------------------------------------------

const PlaceholderCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  return (
    <div className="border border-dashed border-[#BA2F2F]/60 dark:border-neutral-700 bg-[#BA2F2F]/5 dark:bg-neutral-950/50 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#BA2F2F]/20 dark:border-neutral-800">
          <span className="text-[10px] text-[#BA2F2F] dark:text-neutral-600 uppercase tracking-widest font-bold">
            PROJECT #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="border border-dashed border-[#BA2F2F] dark:border-neutral-700 text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 text-[#BA2F2F] dark:text-neutral-400 font-semibold">
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
          {project.tagline}
        </p>

        <div className="border border-dashed border-[#BA2F2F]/30 dark:border-neutral-800 p-4 bg-[#FEFDFD] dark:bg-black mb-4">
          <p className="text-xs text-[#040101]/75 dark:text-neutral-400 leading-relaxed">
            {project.description || 'Details coming soon.'}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#BA2F2F]/20 dark:border-neutral-800">
        <span className="text-[11px] uppercase tracking-[0.14em] text-[#BA2F2F] dark:text-neutral-600 font-semibold">
          Awaiting input &bull; Ready for deployment
        </span>
      </div>
    </div>
  );
};

export default Projects;
