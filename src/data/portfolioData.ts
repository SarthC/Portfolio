// ─── Type Definitions ────────────────────────────────────────────

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  techStack: string[];
  impactMetrics: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  videoDemoUrl?: string;
  featured: boolean;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge?: string;
  deliverables: string[];
  metricsPlaceholder?: {
    label: string;
    description: string;
  };
  certificateProof?: {
    title: string;
    issueDate: string;
  };
}

export interface HackathonEvent {
  id: string;
  name: string;
  date: string;
  achievement: string;
  badgeColor: 'amber' | 'emerald' | 'indigo' | 'purple' | 'blue' | 'rose';
  location: string;
  description: string;
  projectShowcased?: string;
  teamName?: string;
  mediaSlots: {
    type: string;
    caption: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  skills: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

// ─── Personal Info ───────────────────────────────────────────────

export const personalInfo = {
  fullName: 'Sarthak Choudhari',
  tagline: 'Full-Stack Developer | AI & Machine Learning Enthusiast | Computer Science Engineering Student',
  statusPill: 'Actively Competing in Hackathons • Minor in Quantum Computing',
  bio: `I am currently in my third year pursuing a B.Tech in Computer Science and Engineering (Core CS + AI Engineering), alongside a minor in Quantum Computing at MIT Art, Design and Technology University, Pune. I specialize in building AI-driven solutions and full-stack web applications. I am a highly active hackathon participant with a strong focus on solving real-world problems through technology.`,
  email: 'sarthakc8493@gmail.com',
  linkedin: 'https://linkedin.com/in/sarthak-choudhari',
  github: 'https://github.com/SarthC',
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      specialization: 'Core CS + AI Engineering, Minor in Quantum Computing',
      institution: 'MIT Art, Design and Technology University, Pune',
      period: 'Aug 2024 – May 2028',
      cgpa: '8.52',
    },
    {
      degree: 'Higher Secondary Education',
      specialization: '',
      institution: 'Sir Parashurambhau College, Pune',
      period: 'Aug 2022 – May 2024',
      cgpa: '',
    },
  ],
};

// ─── Skills ──────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'code-2',
    skills: ['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL'],
  },
  {
    name: 'AI / ML & Data Science',
    icon: 'brain',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Genkit', 'Dialogflow', 'LLMs', 'NLP'],
  },
  {
    name: 'Full-Stack & Backend',
    icon: 'layers',
    skills: ['React', 'Node.js', 'Express', 'Flask', 'REST APIs', 'Tailwind CSS'],
  },
  {
    name: 'Databases & Cloud',
    icon: 'cloud',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Vercel', 'Render', 'AWS', 'Azure', 'GCP'],
  },
  {
    name: 'Tools & Platforms',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Supervity Platform', 'Clerk', 'Twilio', 'Cisco Packet Tracer'],
  },
];

// ─── Experience ──────────────────────────────────────────────────

export const experiences: ExperienceItem[] = [
  {
    id: 'cisco',
    role: 'Virtual Intern',
    organization: 'Cisco',
    period: 'Jun 2026 – Aug 2026',
    badge: 'Virtual Internship',
    deliverables: [
      'Engineered and deployed NetSage AI on Vercel.',
      'Designed an AI-assisted network troubleshooting tool specifically for Cisco Packet Tracer to streamline and automate network diagnostics.',
    ],
    metricsPlaceholder: {
      label: 'Efficiency Improvement',
      description: 'Placeholder: Input specific percentage increase in diagnostics efficiency/speed',
    },
  },
  {
    id: 'yuvaintern',
    role: 'Virtual Data Science with Python Apprentice',
    organization: 'YuvaIntern & NSDC',
    period: 'Completed Aug 2026',
    badge: 'Apprenticeship',
    deliverables: [
      'Successfully completed an intensive apprenticeship focused on practical data science applications using Python.',
      'Demonstrated consistent dedication and successfully executed data science workflows.',
    ],
    certificateProof: {
      title: 'Official Certificate of Experience',
      issueDate: 'August 03, 2026',
    },
  },
  {
    id: 'pegasystems',
    role: 'National Intern',
    organization: 'Pegasystems',
    period: 'Sept 2026',
    badge: 'National Internship',
    deliverables: [
      'Completed the rigorous 60-hour, 5-week Pega National Internship Program.',
      'Focused heavily on low-code workflow automation and enterprise software architecture.',
    ],
    metricsPlaceholder: {
      label: 'Workflow Automation',
      description: 'Placeholder: Input specific metrics on workflow automation improvements',
    },
  },
  {
    id: 'inamigos',
    role: 'Technical Intern',
    organization: 'Inamigos Foundation',
    period: 'May 2026 – Aug 2026',
    badge: 'Technical Internship',
    deliverables: [
      'Conducted rigorous QA testing to systematically identify and resolve critical UI/UX bugs.',
      'Built, customized, and deployed a new website architecture to strengthen the foundation\'s digital footprint and user accessibility.',
    ],
    metricsPlaceholder: {
      label: 'Bug Reduction / Traffic',
      description: 'Placeholder: Input specific numbers on bug reduction or website traffic increase',
    },
  },
];

// ─── Projects ────────────────────────────────────────────────────

export const projects: ProjectItem[] = [
  {
    id: 'docusense',
    title: 'DocuSense AI Agent',
    tagline: 'Autonomous Corporate Research, Compliance & Multi-Registry Verification Agent',
    category: 'AI/ML',
    techStack: [
      'Supervity Auto',
      'LLMs',
      'NLP',
      'Prompt Engineering',
      'Indian GST Portal',
      'Zauba Corp / MCA',
      'Web Search APIs',
      'Excel Sync',
      'PDF Generation',
      'Email Services',
    ],
    impactMetrics: [
      '95%+ data retrieval accuracy on complex financial and legal filings',
      '70% reduction in manual due diligence and corporate review cycles',
      'Autonomous multi-registry verification via Indian GST Portal & Zauba Corp / MCA',
      'Built for CodeQuest 2026 (Round 2) on Supervity Auto platform',
    ],
    description:
      'An autonomous corporate research and compliance agent built on Supervity Auto for CodeQuest 2026 (Round 2). Automates document parsing, registry cross-verification (GST, Zauba Corp), adverse media intelligence, and zero-click compliance report dispatch for B2B due diligence.',
    featured: true,
    videoDemoUrl: 'https://lnkd.in/p/gby7UJ7c',
  },
  {
    id: 'neverout',
    title: 'NeverOut',
    tagline: 'AI-Powered Multi-Tenant Kirana Inventory with Automated WhatsApp Restocking & Seasonal ML Forecasting',
    category: 'Full-Stack',
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
      'Zero-click WhatsApp restocking alerts dispatched via Twilio Messaging API',
      '15% procurement budget optimization using Scikit-Learn seasonal regression',
      'Hardware-free camera barcode scanner querying Open Food Facts REST API',
      'Multi-tenant workspace isolation secured by Clerk RSA JWT & MongoDB Atlas',
    ],
    description:
      'An AI-powered, multi-tenant inventory management platform tailored for local Kirana (mom-and-pop) stores, featuring automated zero-click WhatsApp restocking alerts, camera barcode scanning with Open Food Facts integration, and seasonal ML demand forecasting.',
    featured: true,
    githubUrl: 'https://github.com/SarthC/NeverOut',
    liveUrl: 'https://neverout-app.onrender.com/',
  },
  {
    id: 'netsage',
    title: 'NetSage AI',
    tagline: 'AI-assisted network troubleshooting for Cisco Packet Tracer',
    category: 'AI/ML',
    techStack: ['AI Integration', 'Cisco Packet Tracer', 'Vercel'],
    impactMetrics: ['Deployed on Vercel', 'Cisco Internship Project'],
    description: 'Built a highly specialized AI-assisted troubleshooting interface for Cisco Packet Tracer environments. Designed to streamline and automate network diagnostics.',
    featured: true,
  },
  {
    id: 'pofix',
    title: 'POFIX',
    tagline: 'AI Pothole Reporting, Municipal Repair Prioritization & Real-Time Driver Navigation',
    category: 'Computer Vision',
    techStack: [
      'React 18',
      'Vite',
      'TensorFlow.js',
      'MobileNet',
      'Leaflet.js',
      'Leaflet.heat',
      'Firebase Realtime DB',
      'Firebase Auth',
      'Web Speech API',
      'Geolocation API',
      'ExifReader',
      'PWA',
    ],
    impactMetrics: [
      'In-browser edge AI verification with TensorFlow.js & MobileNet blocking non-road spam',
      'Hands-free "Drive Safe" real-time voice alerts via Web Speech API announcing hazards within 200m',
      'Municipal repair prioritization engine weighted by severity, frequency, road type & aging',
      'Automated EXIF GPS metadata extraction & temporal validation enforcing freshness within 48 hours',
    ],
    description:
      'An AI-powered civic-tech and smart navigation platform that automates pothole reporting, prioritizes municipal road repairs, and delivers real-time voice alerts to drivers using edge computer vision and geospatial heatmaps.',
    featured: true,
    githubUrl: 'https://github.com/SarthC/Pothole-Dealers',
    liveUrl: 'https://po-fix.vercel.app/',
  },
  {
    id: 'groundzero',
    title: 'GroundZero',
    tagline: 'AI-Powered Geospatial Water Contamination Intelligence & Upstream Point-Source Tracing',
    category: 'Geospatial AI',
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
      'MongoDB',
      'Supabase',
    ],
    impactMetrics: [
      'Upstream Point-Source Tracing ($A \\to C$ corridor spatial buffer analysis)',
      'Automated suspect industry identification via OpenStreetMap / Overpass API',
      'Multi-factor risk ranking (effluent category, proximity, tributary drains)',
      'AI lab report extraction converting PDF lab assays into live GIS map layers',
    ],
    description:
      'An AI-driven geospatial intelligence and decision-support dashboard that maps groundwater and river contamination, extracts water quality metrics from lab reports, and traces pollution spikes back to probable upstream industrial sources.',
    featured: true,
    isPlaceholder: false,
    githubUrl: 'https://github.com/SarthakChoudhari/GroundZero',
    liveUrl: 'https://groundzero-water.vercel.app',
  },
  {
    id: 'dukaanvoice',
    title: 'DukaanVoice',
    tagline: 'Voice-activated billing assistant',
    category: 'Voice AI',
    techStack: ['Web Speech API', 'React', 'Node.js'],
    impactMetrics: ['Winner — Open Source Track at HackStorm 2026'],
    description: 'Developed a functional voice-activated billing assistant. This project won the Open Source Track at HackStorm 2026.',
    featured: true,
  },
  {
    id: 'plant-ecommerce',
    title: 'Plant E-Commerce Platform',
    tagline: 'Fully responsive online retail platform for plants',
    category: 'Web Apps',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    impactMetrics: ['Fully responsive design', 'Product catalog & cart'],
    description: 'Developed a fully responsive online retail platform for plants utilizing HTML, CSS, JavaScript, and React.',
    featured: false,
  },
  {
    id: 'astech',
    title: 'Astech Science Prototypes',
    tagline: 'Interactive hardware models and physics demos',
    category: 'Hardware/IoT',
    techStack: ['Electronics', 'Laser Optics', 'Scale Modeling'],
    impactMetrics: ['Laser sound wave visualization', 'LHC scale model'],
    description: 'Engineered complex interactive hardware models, specifically a laser sound wave visualization system and a Large Hadron Collider scale model.',
    featured: false,
  },
];

// ─── Hackathons & Events ─────────────────────────────────────────

export const hackathons: HackathonEvent[] = [
  {
    id: 'hackstorm-2026',
    name: 'HackStorm 2026',
    date: 'Oct 2026',
    achievement: 'Winner — Open Source Track',
    badgeColor: 'amber',
    location: 'On-site',
    description: 'Led Team Two Variables to build DukaanVoice and win the Open Source Track.',
    projectShowcased: 'DukaanVoice',
    teamName: 'Team Two Variables',
    mediaSlots: [
      { type: 'team', caption: 'Team with award trophy' },
      { type: 'stage', caption: 'Presentation stage photos' },
      { type: 'certificate', caption: 'Winning certificate' },
    ],
  },
  {
    id: 'flipkart-grid',
    name: 'Flipkart GRiD 8.0',
    date: 'July 2026',
    achievement: 'Solo Semi-Finalist',
    badgeColor: 'purple',
    location: 'Online',
    description: 'Advanced as a Solo Semi-Finalist in one of India\'s premier engineering competitions.',
    mediaSlots: [
      { type: 'certificate', caption: 'Semi-finalist dashboard screenshot' },
      { type: 'certificate', caption: 'Qualification certificate' },
    ],
  },
  {
    id: 'codequest-2026',
    name: 'CodeQuest 2026',
    date: 'April 2026',
    achievement: 'National Level Finalist (Top of 2,500+)',
    badgeColor: 'emerald',
    location: 'Hyderabad',
    description: 'National Level Finalist out of 2,500+ participants. Traveled to Hyderabad for the finals.',
    mediaSlots: [
      { type: 'venue', caption: 'Hyderabad event venue photos' },
      { type: 'stage', caption: 'Hackathon floor shots' },
      { type: 'travel', caption: 'Travel and event photos' },
    ],
  },
  {
    id: 'sih-2025',
    name: 'Smart India Hackathon 2025',
    date: '2025',
    achievement: 'Top 200 Teams — MIT ADT University',
    badgeColor: 'indigo',
    location: 'MIT ADT University, Pune',
    description: 'Led Team Farmio to secure a spot in the Top 200 teams at MIT ADT University.',
    teamName: 'Team Farmio',
    mediaSlots: [
      { type: 'team', caption: 'Team ideation photos' },
      { type: 'stage', caption: 'Campus round presentation' },
    ],
  },
  {
    id: 'aiboomi-2026',
    name: 'AIBoomi Startup Weekend Hackathon',
    date: 'Jan 2026',
    achievement: 'Rapid Prototype Finalist',
    badgeColor: 'rose',
    location: 'Pune',
    description: 'Engineered the initial prototype of Pofix during an intensive 54-hour sprint.',
    projectShowcased: 'Pofix',
    mediaSlots: [
      { type: 'stage', caption: 'Pitch deck presentation' },
      { type: 'team', caption: 'Working prototype demo' },
    ],
  },
  {
    id: 'aws-builders-2026',
    name: 'AWS Future Builders Connect',
    date: 'Sept 2026',
    achievement: 'Attended Official Pune Summit',
    badgeColor: 'blue',
    location: 'Pune',
    description: 'Attended the official AWS Future Builders Connect event in Pune.',
    mediaSlots: [
      { type: 'venue', caption: 'AWS Cloud experiential venue' },
      { type: 'stage', caption: 'Keynote stage' },
    ],
  },
  {
    id: 'gdg-pune-2026',
    name: 'GDG Pune Build with AI Workshop',
    date: 'Sept 2026',
    achievement: 'Code for Communities Participant',
    badgeColor: 'blue',
    location: 'Coditas Office, Pune',
    description: 'Participated in the Code for Communities workshop at the Coditas office.',
    mediaSlots: [
      { type: 'venue', caption: 'Workshop coding session' },
      { type: 'team', caption: 'Coditas office snapshots' },
    ],
  },
];

// ─── Certifications ──────────────────────────────────────────────

export const certifications: CertificateItem[] = [
  {
    id: 'ibm-ml-python',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    category: 'Machine Learning',
    skills: ['Python', 'Scikit-Learn', 'ML Algorithms'],
  },
  {
    id: 'ibm-react',
    title: 'Front-End Development using React',
    issuer: 'IBM',
    category: 'Software Engineering',
    skills: ['React', 'JavaScript', 'UI/UX'],
  },
  {
    id: 'google-networking',
    title: 'Computer Networking',
    issuer: 'Google',
    category: 'Networking',
    skills: ['TCP/IP', 'DNS', 'Network Security'],
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco',
    category: 'Networking',
    skills: ['Network Fundamentals', 'Routing', 'Switching'],
  },
  {
    id: 'cisco-ai-analytics',
    title: 'Modern AI & Data Analytics Essentials',
    issuer: 'Cisco',
    category: 'Machine Learning',
    skills: ['AI Fundamentals', 'Data Analytics', 'ML Concepts'],
  },
  {
    id: 'ibm-rag',
    title: 'Introduction to Retrieval Augmented Generation (RAG)',
    issuer: 'IBM SkillsBuild',
    category: 'Machine Learning',
    skills: ['RAG', 'LLMs', 'Vector Databases'],
  },
  {
    id: 'jhu-webdev',
    title: 'HTML, CSS, and Javascript for Web Developers',
    issuer: 'Johns Hopkins University',
    category: 'Software Engineering',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'linguaskill-b2',
    title: 'Linguaskill General English Proficiency Certificate (B2 CEFR)',
    issuer: 'Cambridge / Linguaskill',
    category: 'Language & Soft Skills',
    skills: ['English Proficiency', 'B2 CEFR'],
  },
];

// ─── Extracurriculars ────────────────────────────────────────────

export const athletics = [
  {
    title: 'Inter-Collegiate Cross Country Medalist',
    medals: [
      { year: '2024-25', type: 'Gold' as const },
      { year: '2025-26', type: 'Gold' as const },
      { year: '2026-27', type: 'Silver' as const },
    ],
  },
  {
    title: 'Active Training',
    activities: ['Long-distance running', 'Football', 'Boxing'],
  },
];

export const clubs = [
  {
    name: 'GeeksforGeeks MIT ADT Chapter',
    year: '2025 – 2026',
    role: 'Technical Team Member',
    highlights: [
      'Launched the official portal for 500+ students',
      'Organized AI Agent Workshop and DSA Bootcamp',
    ],
  },
  {
    name: 'QQuest Technical Club',
    year: '2026 – Present',
    role: 'Active Technical Member',
    highlights: ['Algorithmic problem-solving and coding contests'],
  },
  {
    name: 'Astech Science Club',
    year: '2024 – 2025',
    role: 'Engineering Lead',
    highlights: ['Engineered interactive physics prototypes', 'Led multidisciplinary demonstrations'],
  },
];

export const hobbies = [
  { name: 'Observational Astronomy', description: 'Deep-sky telescope observation and planetary tracking' },
  { name: 'Guitar', description: 'Acoustic guitar and music composition' },
  { name: 'Languages', description: 'Conversational German language practice' },
];

// ─── Nav Links ───────────────────────────────────────────────────

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Beyond Code', href: '#extracurriculars' },
  { label: 'Contact', href: '#contact' },
];
