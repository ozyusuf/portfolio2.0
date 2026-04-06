export const personal = {
  name: "Yusuf Öz",
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
  heroBio: "I ship real products to real users — Flutter apps on Google Play, a PWA serving 6,600+ monthly visitors, and AI-integrated systems. Currently exploring autonomous driving technologies.",
};

export const metrics: { value: number; label: string; suffix?: string; prefix?: string; display?: string }[] = [
  { value: 6630, suffix: "+", label: "Monthly Users" },
  { value: 2, suffix: "", label: "Shipped Products" },
  { value: 11474, display: "11.4K", label: "Page Views / Month" },
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
    name: "Autonomous Driving Technologies — Foundation Certificate",
    issuer: "National Technology Academy",
    period: "Feb 2026",
    details:
      "Completed 10-session foundation program. Selected among 1,000 candidates; advanced to top 120 for the specialization phase.",
  },
];

export const academy = {
  program: "Autonomous Driving Technologies",
  issuer: "National Technology Academy",
  sponsor: "Ministry of Industry and Technology",
  foundation: {
    period: "Jan 2026 – Feb 2026",
    applicants: 1000,
    sessions: 10,
    courses: [
      "Introduction to Autonomous Vehicles",
      "Vehicle Modeling & ADAS",
      "Sensor Fusion, Perception & Deep Learning",
      "Motion Planning & Control",
      "Systems Engineering & Functional Safety",
    ],
  },
  specialization: {
    period: "Mar 2026 – Aug 2026",
    selected: 120,
    topics: [
      {
        name: "Vehicle Modeling & ADAS",
        company: "FEV",
        period: "Mar 3 – 12",
        sessions: ["2026-03-03", "2026-03-05", "2026-03-10", "2026-03-12"],
      },
      {
        name: "Sensor Fusion & State Estimation",
        company: "BAYKAR",
        period: "Mar 17 – Apr 2",
        sessions: [
          "2026-03-17", "2026-03-18", "2026-03-24",
          "2026-03-26", "2026-03-31", "2026-04-02",
        ],
      },
      {
        name: "Deep Learning for Perception",
        company: "TÜBİTAK BİLGEM / ADASTEC",
        period: "Apr 7 – May 14",
        sessions: [
          "2026-04-07", "2026-04-09", "2026-04-14", "2026-04-16",
          "2026-04-21", "2026-04-22", "2026-04-28", "2026-04-30",
          "2026-05-05", "2026-05-07", "2026-05-12", "2026-05-14",
        ],
      },
      {
        name: "Motion Planning & Control",
        company: "FORD / ADASTEC",
        period: "May 18 – Jun 30",
        sessions: [
          "2026-05-18", "2026-05-21", "2026-06-02", "2026-06-04",
          "2026-06-09", "2026-06-11", "2026-06-16", "2026-06-18",
          "2026-06-23", "2026-06-25", "2026-06-30",
        ],
      },
      {
        name: "Agile Software Development",
        company: "ASELSAN / AVL",
        period: "Jul 2 – Aug 4",
        sessions: [
          "2026-07-02", "2026-07-07", "2026-07-09", "2026-07-14",
          "2026-07-16", "2026-07-21", "2026-07-23", "2026-07-28",
          "2026-07-30", "2026-08-04",
        ],
      },
      {
        name: "Systems Engineering & Functional Safety",
        company: "FEV",
        period: "Aug 6 – 20",
        sessions: [
          "2026-08-06", "2026-08-11", "2026-08-13",
          "2026-08-18", "2026-08-20",
        ],
      },
    ],
  },
};

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
    icon: "autonomous",
    title: "Autonomous Technologies",
    description:
      "Specializing in Autonomous Driving via the National Technology Academy, covering Sensor Fusion, Environmental Perception, and Motion Planning.",
    tools: "Sensor Fusion · Environmental Perception · Motion Planning · Systems Engineering",
  },
];

export const queryKB: { keys: string[]; response: string }[] = [
  {
    keys: ["hi", "hello", "hey", "merhaba", "selam", "howdy"],
    response:
      "Hey! I'm built on Yusuf's portfolio data. Ask me about his projects, tech stack, experience, or what he's currently learning.",
  },
  {
    keys: ["who", "yusuf", "yourself", "introduce", "bio", "kim", "hakkında", "anlat"],
    response:
      "Yusuf Öz is a Software Engineering student at Mugla Sitki Kocman University who ships real products. He's published mobile apps on Google Play, built a PWA with 6,600+ monthly users, and is currently specializing in Autonomous Driving Technologies through Turkey's National Technology Academy.",
  },
  {
    keys: [
      "hire", "hiring", "role", "candidate", "position", "recruit", "suitable",
      "fit", "qualified", "good for", "should we", "take him", "would he",
      "is he a", "web internship", "mobile internship", "open to",
    ],
    response:
      "Yusuf is a strong fit for mobile (Flutter) or full-stack web roles. He's shipped real products, follows clean architecture, and has R&D internship experience. He's also expanding into AI/autonomous systems. Open to internships and collaboration — reach him at ysfoz123@gmail.com.",
  },
  {
    keys: [
      "good", "great", "strong", "talented", "impressive", "capable",
      "reliable", "worth", "recommend", "skill level", "how good",
    ],
    response:
      "His track record is solid — shipped two live products by his 3rd year of uni, one with 6,600+ monthly users. He's had a real internship, published on Google Play, and is in a highly competitive national program (top 120/1,000). He builds things and ships them.",
  },
  {
    keys: [
      "users", "usage", "traffic", "visitors", "monthly", "statistics",
      "growth", "how many", "kullanıcı", "ziyaretçi", "kaç", "analytics",
    ],
    response:
      "MenuKYK serves 6,630+ unique monthly users with 11,474 page views/month — +136% visitor growth. It's live at menukyk.com.tr across Turkey's KYK dormitories.",
  },
  {
    keys: ["menukyk", "menu", "kyk", "dorm", "dormitory", "yurt", "pwa", "saas", "serverless"],
    response:
      "MenuKYK is a serverless SaaS PWA automating dormitory menu tracking for KYK dorms across Turkey. Built with React, Vite, Supabase, and Tailwind — it uses Gemini AI for image-based menu verification from crowdsourced uploads. 6,630+ monthly users, 11.4K page views/month, +136% growth.",
  },
  {
    keys: [
      "flutter or web", "web or flutter", "flutter or react",
      "which one", "prefer", "better at", "stronger",
    ],
    response:
      "Both — and he has real shipped products in each. Flutter for structured mobile apps (Clean Architecture, Play Store). React/Vite for serverless web (MenuKYK, 6,600+ users). His edge is that he can own an entire product solo, front to back, on either platform.",
  },
  {
    keys: [
      "flutter", "mobile", "dart", "android", "play store", "greenhouse",
      "caffeverse", "cardapp", "uygulama", "mobil", "bloc", "clean architecture",
    ],
    response:
      "Flutter projects: Greenhouse Management System (Google Play, Clean Architecture + BLOC + Supabase), Caffeverse (coffee price comparison with live Google Maps), and CardApp (digital business cards, built during his Virtus R&D internship). He follows BLOC pattern and Clean Architecture throughout.",
  },
  {
    keys: [
      "react", "website", "frontend", "html", "css", "javascript", "vite",
      "tailwind", "responsive", "web development",
    ],
    response:
      "On the web side, Yusuf built MenuKYK — a full SaaS PWA with React, Vite, Supabase, and Tailwind. He also maintained university web interfaces at MSKU's Digital Transformation Office. Stack: React, Vite, Tailwind, Supabase, REST APIs.",
  },
  {
    keys: [
      "machine learning", "reinforcement learning", "q-learning", "q learning",
      "gemini", "prediction", "wine", "neural", "yapay zeka", "makine öğrenmesi",
    ],
    response:
      "AI/ML work: RL-Drive Multi-Agent (multi-agent autonomous driving sim with Q-Learning and collision avoidance), Wine Quality Prediction (ML model with a live web demo), and Gemini AI integration in MenuKYK for image-based menu verification.",
  },
  {
    keys: [
      "autonomous", "self-driving", "otonom", "vehicle", "sensor fusion",
      "perception", "motion planning", "lidar", "adas", "driving",
      "baykar", "fev", "ford", "aselsan", "adastec",
    ],
    response:
      "Yusuf is specializing in Autonomous Driving at Turkey's National Technology Academy (backed by the Ministry of Industry). Top 120 selected from 1,000 applicants. Topics: Vehicle Modeling & ADAS (FEV), Sensor Fusion (BAYKAR), Deep Learning for Perception (TÜBİTAK BİLGEM), Motion Planning (FORD/ADASTEC), and Functional Safety (FEV).",
  },
  {
    keys: [
      "experience", "career", "company", "virtus",
      "intern", "deneyim", "professional", "background", "worked",
    ],
    response:
      "Professional background: Mobile Developer Intern at Virtus R&D (Jul–Aug 2025) building CardApp in Flutter with BLOC and Docker. Software Team Member at MSKU's Digital Transformation Office (Feb–Jun 2025) maintaining university services. Currently Board Member of the Data Science Community.",
  },
  {
    keys: [
      "tech", "stack", "tools", "languages", "skills", "technologies", "framework",
      "teknoloji", "beceri", "supabase", "firebase", "docker", "git", "python",
    ],
    response:
      "Tech stack: Dart, Python, Java, C, SQL, JavaScript. Mobile — Flutter, BLOC, Clean Architecture. Backend — Supabase, Firebase, Google Maps API, REST APIs. Tools — Git, Docker, Postman. Currently adding sensor fusion and deep learning to the mix.",
  },
  {
    keys: [
      "education", "university", "degree", "school", "student", "coursework",
      "eğitim", "okul", "üniversite", "öğrenci", "mugla",
    ],
    response:
      "B.Sc. Software Engineering at Mugla Sitki Kocman University (Sep 2022–Present). Coursework includes Data Structures, Algorithms, OOP, Software Architectures, System & Network Programming, and Intro to ML/AI.",
  },
  {
    keys: [
      "academy", "national technology", "certification", "certificate",
      "ministry", "akademi", "sertifika", "specialization", "foundation",
    ],
    response:
      "Yusuf holds an Autonomous Driving Foundation Certificate from the National Technology Academy. Selected top 120 from 1,000 applicants for the advanced specialization (Mar–Aug 2026) with industry partners: BAYKAR, FEV, FORD, ASELSAN, and TÜBİTAK BİLGEM.",
  },
  {
    keys: [
      "projects", "project", "built", "made", "created", "shipped", "published", "live",
      "proje", "all projects", "what projects", "show me",
    ],
    response:
      "5 projects: MenuKYK (React PWA, 6,630+ users — live), Greenhouse Management System (Google Play — live), RL-Drive Multi-Agent (Q-Learning sim), Caffeverse (Flutter + Maps), Wine Quality Prediction (ML + live demo). Two are live, real-user products.",
  },
  {
    keys: [
      "contact", "email", "reach", "linkedin", "github",
      "iletişim", "ulaş", "connect",
    ],
    response:
      "Reach Yusuf at ysfoz123@gmail.com, find his code at github.com/ozyusuf, or connect on LinkedIn. He's open to internship opportunities and collaboration on intelligent systems.",
  },
  {
    keys: [
      "current", "now", "learning", "working on", "lately", "recent",
      "şu an", "şimdi", "öğreniyor", "focused", "right now", "currently",
    ],
    response:
      "Right now Yusuf is actively learning Sensor Fusion & State Estimation at the National Technology Academy (with BAYKAR), while maintaining MenuKYK and working on new mobile app projects.",
  },
  {
    keys: [
      "available", "availability", "start", "when can", "start date",
      "full-time", "part-time", "full time", "part time", "internship",
      "graduation", "graduate", "müsait", "ne zaman",
    ],
    response:
      "Yes — actively looking. 3rd-year student graduating in 2027, with prior internship experience at Virtus R&D. Full-time available in summer, part-time during semester. Remote or on-site. → ysfoz123@gmail.com",
  },
  {
    keys: [
      "location", "located", "where", "remote", "onsite", "on-site", "relocate",
      "turkey", "mugla", "nerede", "uzaktan", "hybrid",
    ],
    response:
      "Based in Mugla, Turkey. Open to remote work and relocation for the right opportunity. Has experience collaborating in team environments both in-person and remotely.",
  },
  {
    keys: [
      "english", "language", "speak", "fluent", "communication", "turkish",
      "ingilizce", "dil", "languages spoken",
    ],
    response:
      "Native Turkish speaker, fluent in English — both technical and conversational. All his projects, documentation, and this very assistant are in English.",
  },
  {
    keys: [
      "team", "teamwork", "collaborate", "collaboration", "worked with",
      "group", "pair", "together", "takım", "ekip",
    ],
    response:
      "Yes — he's worked in team settings: R&D internship at Virtus (collaborated with backend team), university digital office (maintained shared systems), and is currently a board member of a student data science community. He also ships solo products.",
  },
  {
    keys: [
      "best project", "favorite project", "most proud", "proudest", "impressive project",
      "favorite", "highlight", "flagship", "en iyi proje", "proud of",
    ],
    response:
      "MenuKYK — built from scratch, zero server costs (serverless), real users across Turkey with zero marketing. The technical challenge was making it fast and reliable at scale while integrating Gemini AI for crowdsourced verification. It's still growing.",
  },
  {
    keys: [
      "how many users", "user growth", "how did you get", "6000", "6630",
      "traffic growth", "how did menukyk", "grow",
    ],
    response:
      "MenuKYK grew entirely organically — no paid ads, just word of mouth in KYK dormitory communities. The core loop: students upload the daily menu, other students check it. Gemini AI handles verification so the data stays reliable. Currently at 6,630+ monthly users with +136% growth.",
  },
  {
    keys: [
      "open source", "source code", "public repo", "github repo", "code available",
      "can i see", "repository", "açık kaynak",
    ],
    response:
      "RL-Drive Multi-Agent and Wine Quality Prediction are public on GitHub (github.com/ozyusuf). MenuKYK is a commercial product — the codebase is private. The Greenhouse app is also private.",
  },
  {
    keys: [
      "how long", "how much time", "timeline", "built in", "time to build",
      "duration", "weeks", "months", "ne kadar sürdü",
    ],
    response:
      "MenuKYK was built and launched within a few months as a solo project. The Greenhouse app was developed during university alongside coursework. His approach: ship early, iterate based on real usage.",
  },
  {
    keys: [
      "looking for", "what kind of role", "what role", "career goal", "goal",
      "aspiration", "future", "plan", "hedef", "amaç",
    ],
    response:
      "He's looking for internship or entry-level roles in mobile (Flutter) or full-stack web, with a growing interest in AI/autonomous systems engineering. Ideally somewhere he can ship real things, not just maintain legacy code.",
  },
];
