export const personal = {
  name: "Mahmut Yusuf Öz",
  title: "Software Engineering Student | Mobile & Web Developer",
  location: "Mugla, Turkey",
  email: "ysfoz123@gmail.com",
  phone: "+90 541 793 6567",
  links: {
    github: "https://github.com/ozyusuf",
    linkedin: "https://linkedin.com/in/yusuf-öz-601025309",
    medium: "https://medium.com/@yusufoz",
    portfolio: "https://yusuf-oz.vercel.app",
  },
  heroTagline: "Building mobile, web & intelligent systems.",
  heroBio: "I ship real products to real users — Flutter apps on Google Play, a PWA serving 6,600+ monthly visitors, and AI-integrated systems. Currently exploring autonomous driving and multi-agent reinforcement learning.",
};

export const metrics = [
  { value: 6630, suffix: "+", label: "Monthly Users" },
  { value: 3, suffix: "", label: "Shipped Products" },
  { value: 11474, display: "11.4K", label: "Page Views / Month" },
  { value: 136, suffix: "%", prefix: "+", label: "Visitor Growth MoM" },
];

export const projects = [
  {
    name: "MenuKYK",
    featured: true,
    tech: ["React", "Vite", "Supabase", "Tailwind CSS", "PWA", "Gemini AI"],
    description:
      "Serverless SaaS PWA automating dormitory menu tracking for KYK dorms across Turkey. Integrated Gemini AI for image processing to verify and handle crowdsourced menu uploads at scale. Built responsive, cross-platform UI and admin verification system.",
    stats: [
      { value: "6,630+", label: "users" },
      { value: "11.4K", label: "views" },
      { value: "+136%", label: "growth" },
    ],
    link: { url: "https://www.menukyk.com.tr/", label: "Live" },
  },
  {
    name: "Greenhouse Management System",
    featured: false,
    tech: ["Flutter", "Supabase", "BLOC", "Clean Architecture"],
    description:
      "Full-featured mobile app to digitize manual greenhouse records. Published on Google Play Store with Supabase backend and Firebase Auth. Applied Clean Architecture principles for long-term maintainability.",
    stats: null,
    link: {
      url: "https://play.google.com/store/apps/details?id=com.devyusufoz.serayonetimi",
      label: "Play Store",
    },
  },
  {
    name: "RL-Drive Multi-Agent",
    featured: false,
    tech: ["Python", "Q-Learning", "Multi-Agent", "Reinforcement Learning"],
    description:
      "Multi-agent autonomous driving simulation using Q-Learning for grid-based navigation. Implemented reward shaping and collision avoidance logic for concurrent agent training.",
    stats: null,
    link: { url: "https://github.com/ozyusuf/RL-Drive-MultiAgent", label: "GitHub" },
  },
  {
    name: "Caffeverse",
    featured: false,
    tech: ["Flutter", "Firebase", "Google Maps API"],
    description:
      "Location-based mobile application to compare coffee prices from nearby cafes. Integrated Google Maps API to display cafe locations and calculate distances in real-time.",
    stats: null,
    link: null,
  },
  {
    name: "Wine Quality Prediction",
    featured: false,
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    description:
      "ML model predicting wine quality from physicochemical properties using a Kaggle dataset. Developed a public-facing web interface to demonstrate model predictions in real time.",
    stats: null,
    link: { url: "https://wine-quality-website.vercel.app/", label: "Demo" },
  },
];

export const experience = [
  {
    role: "Mobile Developer Intern",
    company: "Virtus R&D (Virtus AR-GE)",
    period: "Jul 2025 – Aug 2025",
    details: [
      "Frontend development of CardApp, a digital business card solution using Flutter",
      "Implemented BLOC pattern for state management and scalable code structure",
      "Collaborated with backend team, utilized Docker for containerization",
      "Optimized UI components for better UX and performance",
    ],
  },
  {
    role: "Software Team Member",
    company: "MSKU – Digital Transformation Office",
    period: "Feb 2025 – Jun 2025",
    details: [
      "Maintained university-wide digital services",
      "Improved internal web interfaces using HTML, CSS, JavaScript",
      "Gained insight into large-scale software deployment and public sector digital strategies",
    ],
  },
  {
    role: "Board Member",
    company: "Data Science Community",
    period: "Oct 2025 – Present",
    details: ["Organizing events and coordinating research initiatives"],
  },
];

export const skills = {
  languages: ["Dart", "Python", "Java", "C", "SQL", "JavaScript", "HTML", "CSS"],
  mobile: ["Flutter", "BLOC Pattern", "Provider", "Clean Architecture"],
  backend: ["Supabase", "Firebase (Auth, Firestore)", "Google Maps API", "REST APIs"],
  tools: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Claude Code", "Gemini", "Antigravity IDE"],
};

export const education = {
  degree: "B.Sc. in Software Engineering",
  university: "Mugla Sitki Kocman University",
  period: "Sep 2022 – Present",
  coursework: [
    "Data Structures",
    "OOP",
    "Software Design Patterns",
    "Algorithms",
    "Intro to ML",
    "Intro to AI",
    "Software Project Management",
    "System and Network Programming",
    "Software Architectures",
  ],
};

export const certifications = [
  {
    name: "Autonomous Driving Technologies Specialization",
    issuer: "National Technology Academy",
    period: "Jan 2026 – Present",
    details:
      "Completed foundational training; currently undergoing advanced specialization supported by the Ministry of Industry and Technology.",
  },
];

export const capabilities = [
  {
    icon: "mobile",
    title: "Mobile Development",
    description:
      "Production Flutter apps with clean architecture, BLOC state management, and real Play Store releases.",
    tools: "Flutter · Dart · BLOC · Provider · Firebase · Supabase",
  },
  {
    icon: "web",
    title: "Web Development",
    description:
      "Serverless PWAs and responsive interfaces built with modern frameworks, serving thousands of active users.",
    tools: "React · Vite · Tailwind · Supabase · REST APIs · PWA",
  },
  {
    icon: "systems",
    title: "Intelligent Systems",
    description:
      "AI/ML pipelines, reinforcement learning simulations, and autonomous driving research through the National Technology Academy.",
    tools: "Python · Scikit-learn · Q-Learning · Multi-Agent RL · Gemini AI",
  },
];

export const queryResponses: Record<string, string> = {
  "shipped|published|real users|production|product":
    "Yusuf has shipped 3 products to real users: MenuKYK (a PWA with 6,630+ monthly users across Turkey), Greenhouse Management System (published on Google Play), and CardApp (built during his internship at Virtus R&D).",

  "flutter|mobile|dart|app":
    "Yusuf has built multiple Flutter applications: Greenhouse Management System (published on Google Play with Clean Architecture and BLOC), Caffeverse (location-based coffee price comparison with Google Maps), and CardApp (digital business card, internship project). He uses BLOC pattern, Provider, and Clean Architecture principles.",

  "web|react|pwa|menukyk|website":
    "Yusuf's main web project is MenuKYK — a serverless SaaS PWA built with React, Vite, Supabase, and Tailwind CSS. It automates dormitory menu tracking for KYK dorms across Turkey, serving 6,630+ unique visitors with 11,474 page views per month and +136% visitor growth. It integrates Gemini AI for image-based menu verification.",

  "ai|ml|machine learning|reinforcement|autonomous|driving":
    "Yusuf's AI/ML work includes: RL-Drive Multi-Agent (a multi-agent autonomous driving simulation using Q-Learning), Wine Quality Prediction (an ML model with a live web demo), and Gemini AI integration in MenuKYK for image processing. He's currently specializing in Autonomous Driving Technologies through the National Technology Academy.",

  "experience|internship|work|job":
    "Yusuf has professional experience as a Mobile Developer Intern at Virtus R&D (Jul-Aug 2025), where he worked on CardApp using Flutter and BLOC. He also served as a Software Team Member at MSKU's Digital Transformation Office (Feb-Jun 2025), and is currently a Board Member of the Data Science Community.",

  "tech|stack|tools|languages|skills":
    "Yusuf's tech stack: Languages — Dart, Python, Java, C, SQL, JavaScript. Mobile — Flutter, BLOC, Provider, Clean Architecture. Backend — Supabase, Firebase, Google Maps API, REST APIs. Tools — Git, Docker, VS Code, Postman, Claude Code.",

  "education|university|degree|school":
    "Yusuf is pursuing a B.Sc. in Software Engineering at Mugla Sitki Kocman University (Sep 2022 – Present). His coursework includes Data Structures, Algorithms, ML, AI, Software Architectures, and System Programming.",

  "certification|academy|autonomous driving":
    "Yusuf holds an Autonomous Driving Technologies certification from the National Technology Academy (Jan 2026 – Present). He completed the foundational training and is currently in the advanced specialization program supported by Turkey's Ministry of Industry and Technology.",
};
