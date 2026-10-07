export interface PeriodicSkill {
  number: number;
  symbol: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'erp' | 'devops';
  weight: string;
  description: string;
  iconName: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  metrics: string[];
  github?: string;
  demo?: string;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export interface Achievement {
  title: string;
  detail: string;
  date: string;
  badge?: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  options?: string[];
}

export const resumeData = {
  name: "Yashveer Singh Chundawat",
  title: "Full-Stack Developer (MERN) | React.js | Node.js | TypeScript",
  studentId: "YSC-2026-CSE",
  institution: "Govt. Engineering College, Ajmer",
  email: "chundawatyashveer@gmail.com",
  phone: "+91-7976438858",
  github: "https://github.com/chundawatyashveer",
  linkedin: "https://linkedin.com/in/chundawatyashveer",
  location: "Ajmer, Rajasthan, India",
  summary: "Full-Stack Developer with hands-on experience building production enterprise web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript. Skilled in designing RESTful APIs, JWT authentication, role-based access control (RBAC), and Oracle/Infor ERP integration. Experienced in Next.js, Tailwind CSS, MySQL, and Git-based workflows, with a focus on secure, reliable, and maintainable software.",
  
  periodicSkills: [
    {
      number: 1,
      symbol: "Js",
      name: "JavaScript (ES6+)",
      category: "frontend",
      weight: "98.02",
      description: "Core language for modern interactive web applications and asynchronous workflows.",
      iconName: "FileJson"
    },
    {
      number: 2,
      symbol: "Ts",
      name: "TypeScript",
      category: "frontend",
      weight: "94.10",
      description: "Strictly typed JavaScript enhancing code reliability and maintainability.",
      iconName: "Code2"
    },
    {
      number: 3,
      symbol: "Re",
      name: "React.js",
      category: "frontend",
      weight: "96.40",
      description: "Component-driven frontend architecture with state management and hook ecosystems.",
      iconName: "Atom"
    },
    {
      number: 4,
      symbol: "Nx",
      name: "Next.js",
      category: "frontend",
      weight: "90.15",
      description: "Server-side rendering, SSR/SSG routes, and full-stack React framework features.",
      iconName: "Layers"
    },
    {
      number: 5,
      symbol: "Tw",
      name: "Tailwind CSS",
      category: "frontend",
      weight: "95.50",
      description: "Utility-first CSS framework for rapid, highly customized responsive UI development.",
      iconName: "Palette"
    },
    {
      number: 6,
      symbol: "Nd",
      name: "Node.js",
      category: "backend",
      weight: "93.80",
      description: "High-throughput asynchronous JavaScript runtime environment for backend APIs.",
      iconName: "Terminal"
    },
    {
      number: 7,
      symbol: "Ex",
      name: "Express.js",
      category: "backend",
      weight: "92.30",
      description: "Minimalist web backend framework for RESTful routing and middleware handling.",
      iconName: "Server"
    },
    {
      number: 8,
      symbol: "Api",
      name: "RESTful APIs",
      category: "backend",
      weight: "97.00",
      description: "API architecture with standardized endpoints, payload validation, and HTTP status handling.",
      iconName: "Webhook"
    },
    {
      number: 9,
      symbol: "Jwt",
      name: "JWT & RBAC",
      category: "backend",
      weight: "91.20",
      description: "Secure JSON Web Token authentication with granular role-based access control.",
      iconName: "ShieldCheck"
    },
    {
      number: 10,
      symbol: "Mo",
      name: "MongoDB",
      category: "database",
      weight: "92.00",
      description: "NoSQL document database for flexible schema design and indexing.",
      iconName: "DatabaseZap"
    },
    {
      number: 11,
      symbol: "My",
      name: "MySQL",
      category: "database",
      weight: "88.50",
      description: "Relational database management system for structured relational queries.",
      iconName: "Database"
    },
    {
      number: 12,
      symbol: "Sq",
      name: "SQL & C++",
      category: "backend",
      weight: "89.00",
      description: "Data structure algorithms, complex queries, and high-performance computation.",
      iconName: "Cpu"
    },
    {
      number: 13,
      symbol: "Or",
      name: "Oracle ERP",
      category: "erp",
      weight: "86.00",
      description: "Enterprise system data synchronization and automated workflow integration.",
      iconName: "Boxes"
    },
    {
      number: 14,
      symbol: "Inf",
      name: "Infor ERP",
      category: "erp",
      weight: "85.00",
      description: "Enterprise resource planning integration for multi-tier industrial client platforms.",
      iconName: "Workflow"
    },
    {
      number: 15,
      symbol: "Ai",
      name: "OpenAI API",
      category: "erp",
      weight: "90.00",
      description: "Integrating intelligent LLM capabilities into full-stack web applications.",
      iconName: "Sparkles"
    },
    {
      number: 16,
      symbol: "N8",
      name: "n8n & OCR",
      category: "erp",
      weight: "87.50",
      description: "Automated workflow pipelines and document text extraction technology.",
      iconName: "ScanLine"
    },
    {
      number: 17,
      symbol: "Gt",
      name: "Git & GitHub",
      category: "devops",
      weight: "96.00",
      description: "Version control, feature branching, code reviews, and release deployment.",
      iconName: "GitBranch"
    },
    {
      number: 18,
      symbol: "Pm",
      name: "PM2 & Cloud",
      category: "devops",
      weight: "88.00",
      description: "Production process management, Cloudflare security, and uptime maintenance.",
      iconName: "Activity"
    },
    {
      number: 19,
      symbol: "Fb",
      name: "Firebase",
      category: "devops",
      weight: "87.00",
      description: "Real-time backend services, cloud functions, and authentication.",
      iconName: "Flame"
    },
    {
      number: 20,
      symbol: "St",
      name: "Stripe & APIs",
      category: "devops",
      weight: "89.00",
      description: "Payment gateway integration and third-party webhook event processing.",
      iconName: "CreditCard"
    }
  ] as PeriodicSkill[],

  projects: [
    {
      title: "API Uptime Monitoring Alert SaaS",
      category: "SaaS Platform",
      description: "Built a SaaS platform to track API uptime, latency, and failures using scheduled background jobs and automated alerting.",
      stack: ["Node.js", "React.js", "MongoDB", "Cron Jobs", "Nodemailer"],
      metrics: [
        "10,000+ checks/day across 100+ endpoints",
        "Sub-minute outage detection capability",
        "Real-time failure dashboards & automated email alerts",
        "Reduced Mean Time To Detection (MTTD) significantly"
      ],
      github: "https://github.com/chundawatyashveer",
      demo: "#"
    },
    {
      title: "RCM Portal (Reliability-Centered Maintenance)",
      category: "Enterprise System",
      description: "Built a full-stack enterprise portal to manage Reliability-Centered Maintenance (RCM), maintenance workflows, and asset data.",
      stack: ["Next.js", "Node.js", "MongoDB", "JWT Auth", "RBAC"],
      metrics: [
        "Domain-specific modules for maintenance data management",
        "Multi-step REST API workflows with high security",
        "JWT authentication & role-based access control (RBAC)"
      ],
      github: "https://github.com/chundawatyashveer",
      demo: "#"
    },
    {
      title: "Digital Twin – 3D Facility Visualization",
      category: "Interactive 3D Web",
      description: "Developed a workflow that converts facility blueprints and images into an interactive 3D digital representation of physical spaces.",
      stack: ["React.js", "Three.js", "WebGL", "Node.js", "CMMS Data API"],
      metrics: [
        "Blueprint-to-3D interactive spatial conversion",
        "Connected digital asset models with operational CMMS data",
        "High-performance 3D rendering in modern web browsers"
      ],
      github: "https://github.com/chundawatyashveer",
      demo: "#"
    }
  ] as Project[],

  experience: [
    {
      company: "JRS Innovation Pvt. Ltd.",
      role: "MERN Stack Developer Intern",
      period: "Feb 2025 – Present",
      location: "India",
      bullets: [
        "Developed full-stack features for production enterprise web applications using React.js, Node.js, Express.js, and MongoDB.",
        "Designed and integrated RESTful APIs for secure communication between frontend and backend systems.",
        "Integrated Oracle ERP and Infor ERP systems to enable secure data synchronization and workflow automation for enterprise clients.",
        "Implemented JWT-based authentication, authorization, and role-based access control (RBAC) for multi-user enterprise applications.",
        "Debugged and optimized application performance, improving reliability across deployments; contributed to bug fixes, code reviews, and release activities."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Oracle ERP", "Infor ERP", "JWT", "RBAC"]
    },
    {
      company: "MediaCity",
      role: "Front-End Developer",
      period: "Jun 2025 – Jul 2025",
      location: "India",
      bullets: [
        "Designed and developed a responsive restaurant website with dynamic, categorized menu pages featuring pricing and imagery.",
        "Ensured cross-device UI consistency and performance across mobile, tablet, and desktop using HTML5, CSS3, and JavaScript."
      ],
      skills: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    }
  ] as Experience[],

  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      school: "Govt. Engineering College, Ajmer",
      period: "2022 – Expected 2026",
      location: "Ajmer, Rajasthan, India"
    }
  ] as Education[],

  achievements: [
    {
      title: "TCS CodeVita Season 12",
      badge: "Rank 428",
      detail: "Shortlisted candidate with Global Rank 428 out of 100,000+ candidates globally in TCS CodeVita Season 12.",
      date: "Dec 2024"
    },
    {
      title: "Oracle & Infor ERP Integration",
      badge: "Enterprise",
      detail: "Engineered automated data sync workflows between enterprise ERP systems and modern MERN applications at JRS Innovation.",
      date: "2025"
    },
    {
      title: "API Uptime Monitor SaaS",
      badge: "10k+ Checks/Day",
      detail: "Developed high-availability automated cron monitoring system detecting sub-minute outage alerts.",
      date: "2025"
    }
  ] as Achievement[],

  chatbotQA: {
    initialMessage: "Hi! I'm Yashveer's AI Portfolio Assistant. Ask me anything about his skills, TCS CodeVita rank, projects, or experience!",
    questions: [
      {
        question: "What is Yashveer's TCS CodeVita rank?",
        answer: "Yashveer achieved an impressive Global Rank 428 in TCS CodeVita Season 12 (Dec 2024), placing him among top competitive coders globally!"
      },
      {
        question: "What are his key technical skills?",
        answer: "Yashveer specializes in Full-Stack MERN development (MongoDB, Express.js, React.js, Node.js), TypeScript, Next.js, RESTful APIs, JWT/RBAC, Oracle/Infor ERP integrations, C++, and MySQL."
      },
      {
        question: "Tell me about his internship experience.",
        answer: "As a MERN Stack Developer Intern at JRS Innovation Pvt. Ltd. (Feb 2025 – Present), he develops enterprise web features, integrates Oracle & Infor ERP systems, builds secure REST APIs with JWT & RBAC, and optimizes production performance."
      },
      {
        question: "What projects has he built?",
        answer: "Key projects include: 1) API Uptime Monitoring Alert SaaS (10,000+ checks/day), 2) RCM Portal (Enterprise Reliability-Centered Maintenance), and 3) Digital Twin (3D Facility Visualization converting blueprints to WebGL models)."
      }
    ]
  }
};
