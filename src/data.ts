export interface Skill {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  metrics: string[];
  github?: string;
  demo?: string;
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
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  options?: string[];
}

export const resumeData = {
  name: "Yashveer Singh Chundawat",
  title: "Front-End Developer | MERN Stack Developer",
  email: "chundawatyashveer@gmail.com",
  phone: "+91-7976438858",
  github: "https://github.com/chundawatyashveer", // Default guess based on name
  linkedin: "https://linkedin.com/in/chundawatyashveer", // Default guess based on name
  location: "Rajasthan, India",
  summary: "Passionate MERN Stack and Front-End Developer with experience in building scalable web applications, enterprise ERP integrations (Oracle, Infor), and robust SaaS platforms. Expert in building modern user-friendly interfaces, designing secured RESTful APIs, and implementing background automation workflows.",
  
  skillCategories: [
    {
      title: "Languages",
      skills: [
        { name: "TypeScript", iconName: "Code2" },
        { name: "JavaScript", iconName: "FileJson" },
        { name: "C++", iconName: "Cpu" },
        { name: "SQL", iconName: "Database" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", iconName: "Atom" },
        { name: "Next.js", iconName: "Layers" },
        { name: "Tailwind CSS", iconName: "Palette" },
        { name: "HTML5 & CSS3", iconName: "Globe" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", iconName: "Terminal" },
        { name: "Express.js", iconName: "Server" },
        { name: "MongoDB", iconName: "DatabaseZap" },
        { name: "MySQL", iconName: "Database" },
        { name: "REST APIs", iconName: "Webhook" }
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "OpenAI API", iconName: "Sparkles" },
        { name: "N8N Workflow", iconName: "Workflow" },
        { name: "OCR Technology", iconName: "ScanLine" }
      ]
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "Git & GitHub", iconName: "GitBranch" },
        { name: "Postman", iconName: "Send" },
        { name: "Firebase", iconName: "Flame" },
        { name: "Stripe", iconName: "CreditCard" },
        { name: "Cloudflare", iconName: "CloudLightning" },
        { name: "PM2", iconName: "Activity" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      title: "API Uptime Monitoring Alert SaaS",
      description: "A comprehensive SaaS monitoring platform designed to track endpoint uptime, latency, and operational failures in real-time, utilizing automated cron-like background tasks.",
      stack: ["Node.js", "React.js", "MongoDB", "Cron Jobs", "Nodemailer"],
      metrics: [
        "Monitored 100+ endpoints with 10,000+ checks daily",
        "Sub-minute outage detection capability",
        "Reduced Mean Time To Detection (MTTD) by 60%",
        "Automated instant email alerts and real-time failure dashboard"
      ],
      github: "https://github.com/chundawatyashveer",
      demo: "#"
    },
    {
      title: "Task Manager MERN SaaS",
      description: "A multi-role full-stack workflow management system with separate Admin and Employee dashboards to manage tasks, track progress, and facilitate secure communications.",
      stack: ["MERN Stack", "JWT Auth", "Role-Based Access Control", "REST APIs", "Tailwind CSS"],
      metrics: [
        "Distinct Admin panel: user provisioning & progress auditing",
        "Employee panel: CRUD workflows & completion trackers",
        "Secured APIs with route protection & JWT token handling",
        "Optimized filtering system based on priority, status, and deadlines"
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
      location: "India (Remote/Office)",
      bullets: [
        "Developing and maintaining scalable enterprise-grade web applications utilizing React.js, Node.js, Express.js, and MongoDB.",
        "Engineering ERP integrations including Oracle ERP and Infor systems to support secure, automated data synchronization.",
        "Designing and integrating production-ready RESTful APIs and robust role-based access control (RBAC) via JWT.",
        "Collaborating on Agile development sprints, git branching strategies, pull requests, and peer code reviews.",
        "Debugging, unit testing, and resolving complex bottlenecks to optimize performance and browser responsiveness."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Oracle ERP", "JWT", "Git"]
    },
    {
      company: "MediaCity",
      role: "Front-End Developer",
      period: "June – July 2025",
      location: "India",
      bullets: [
        "Designed and built a responsive, high-performance restaurant application with modern, interactive UI/UX features.",
        "Created dynamic menu displays, filtering systems, and fully responsive layouts optimized across mobile, tablet, and desktop devices.",
        "Optimized website load times and asset loading paths to ensure a seamless client-facing user journey."
      ],
      skills: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    }
  ] as Experience[],

  education: [
    {
      degree: "B.Tech – Computer Science & Engineering",
      school: "Government Engineering College, Ajmer",
      period: "2022 – Present",
      location: "Ajmer, India"
    }
  ] as Education[],

  achievements: [
    {
      title: "TCS CodeVita Season 12",
      detail: "Successfully cleared and was shortlisted as a candidate, achieving an impressive Global Rank of 428.",
      date: "Dec 2024"
    },
    {
      title: "Nation Building Case Competition",
      detail: "Actively participated in the National-level Quiz Round, tackling logic, structural analysis, and engineering problems.",
      date: "Dec 2024"
    }
  ] as Achievement[],

  chatbotQA: {
    initialMessage: "Hi there! I am Yashveer's AI Portfolio Assistant. Feel free to ask me anything about his skills, experience, or projects, or pick one of the options below!",
    questions: [
      {
        question: "What are Yashveer's key skills?",
        answer: "Yashveer is highly skilled in the MERN Stack (MongoDB, Express, React, Node.js) and TypeScript. In addition, he has experience with AI automation using N8N & the OpenAI API, database systems (MySQL, MongoDB), and cloud/deployment tools like PM2, Cloudflare, and Stripe integrations."
      },
      {
        question: "Tell me about his internship at JRS Innovation.",
        answer: "As a MERN Stack Developer Intern (Feb 2025 - Present), Yashveer builds scalable web apps, integrates ERP systems (like Oracle and Infor) for automated workflows, implements JWT-based authentication/RBAC, and actively designs secured RESTful APIs."
      },
      {
        question: "Tell me about the API Uptime Monitoring project.",
        answer: "It's an API Uptime Monitoring Alert SaaS built using Node.js, React, and MongoDB. It monitors over 100+ endpoints with 10k+ checks/day, features sub-minute outage detection, reduces Mean Time to Detection (MTTD) by 60%, and sends automated email alerts."
      },
      {
        question: "Is he open to full-time opportunities?",
        answer: "Yes! Yashveer is completing his B.Tech in CSE (graduating soon, 2022-Present) and is currently working as a MERN Stack Intern. He is actively looking for full-time Front-End Developer, React Developer, or MERN Stack Developer roles starting soon. You can contact him at chundawatyashveer@gmail.com or +91-7976438858."
      }
    ]
  }
};
