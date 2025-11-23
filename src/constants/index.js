// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "ADE ENSATé - Clubs Manager",
    description:
      "Revolutionizing Club Management - AI-powered scheduling, real-time analytics, and seamless collaboration tools for student clubs.",
    href: "https://ade-clubs-manager.vercel.app/",
    image: "/assets/projects/siteAde.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Supabase" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "ENSA-OFFLINE Store",
    description:
      "ENSA-OFFLINE Store - Playful e-commerce experience for campus merchandise with bold typography and interactive animations.",
    href: "https://ensa-offline.store/",
    image: "/assets/projects/screenshot-ensa offline project.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "MongoDB" },
    ],
  },
  {
    id: 3,
    name: "EMSI Share",
    description:
      "EMSI Share - an online Platform to share files",
    href: "https://emsi-share.vercel.app/",
    image: "/assets/projects/EmsiShare.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Supabase" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "WaslMed",
    description:
      "WaslMed: Smart Health platform - Next generation healthcare combining modern technology with personalized care.",
    href: "",
    image: "/assets/projects/WaslMEd1.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "QR Code Scanning" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "PWA" },
      { id: 6, name: "AI" },
    ],
  },
  {
    id: 5,
    name: "OramaChain",
    description:
      "OramaChain - AI-Native Fleet & Supply Chain Management Platform powered by blockchain and real-time analytics.",
    href: "https://oramachain.vercel.app/",
    image: "/assets/projects/oramachain.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React.js" },
      { id: 3, name: "OpenAI" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 6,
    name: "SPLEUX",
    description:
      "SPLEUX ACADEMY - Smart Analytics Intelligence platform with advanced algorithmic signals, 97% accuracy, and a global community of 35,000+ members.",
    href: "",
    image: "/assets/projects/spleux 1.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Vercel" },
      { id: 5, name: "GitHub Actions" },
      { id: 6, name: "CI/CD" },
    ],
  },
  {
    id: 7,
    name: "MUSÉE ABDERRAHMAN SLAOUI",
    description:
      "Site web pour MUSÉE ABDERRAHMAN SLAOUI - Un patrimoine artistique et culturel marocain d'exception.",
    href: "https://musee-as.vercel.app/",
    image: "/assets/projects/MAS.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "GSAP" },
    ],
  },
  {
    id: 8,
    name: "BARBAROS",
    description:
      "BARBAROS - Web/Mobile rewards system for clients and barbers with precision grooming and loyalty management.",
    href: "https://barbaros-pink.vercel.app/",
    image: "/assets/projects/barbaros.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "QR Code Scanning" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "PWA" },
    ],
  },
  {
    id: 9,
    name: "DDMRP Experts",
    description:
      "DDMRP Experts - Supply Chain Excellence through Demand Driven Material Requirements Planning.",
    href: "", // No link provided, leaving empty or could be "#"
    image: "/assets/projects/ddmrp.png",
    bgImage: "/assets/backgrounds/poster.jpg", // Reusing a background
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "React.js" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Node.js" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/rsn.abdellah/" },
  { name: "GitHub", href: "https://github.com/AbdellahRAISSOUNI" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abdellah-raissouni-1419432a8/" },
];
