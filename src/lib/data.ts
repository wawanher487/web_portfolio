// src/lib/data.ts

export const siteConfig = {
  name: "Wawan Hermawan",
  title: "Software Engineer",
  email: "wawanhermawan2402@gmail.com",
  github: "https://github.com/wawanher487/",
  linkedin: "https://www.linkedin.com/in/wawanhermawan24/",
  whatsapp: "https://wa.me/6281928897858",
  tagline:
    "I help businesses build fast, scalable websites and turn them into growth engines that increase traffic, generate leads, and boost revenue.",
};

export const aboutData = {
  bio: [
    "I'm a Fullstack Developer with 2+ years of experience building scalable and high-performance web applications. I specialize in the JavaScript ecosystem — crafting modern frontends with Next.js and building robust backend systems with Node.js and NestJS.",
    "Beyond just building websites, I focus on creating digital solutions that solve real business problems and drive growth. I care deeply about clean code, performance, and delivering products that provide real value to users and businesses.",
  ],
  highlights: [
    { icon: "🚀", text: "Delivered 10+ real-world projects" },
    { icon: "📈", text: "Focused on business growth solutions" },
    { icon: "⚡", text: "Performance & scalability oriented" },
    { icon: "🧩", text: "Clean code & maintainable systems" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "▲",
    color: "cyan",
    items: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Laravel", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "⬡",
    color: "indigo",
    items: [
      { name: "Node.js", level: 88 },
      { name: "NestJS", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 90 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "◈",
    color: "violet",
    items: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 77 },
      { name: "Vercel", level: 90 },
      { name: "Postman", level: 95 },
      { name: "REST / GraphQL", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CPRN 2026 Website",
    description:
      "Official event website for CPRN 2026 with SEO optimization and high-performance landing pages to increase visibility and engagement.",
    longDescription:
      "Developed using Next.js with a focus on performance and SEO. Achieved high Lighthouse scores and fast load times on Vercel. Implemented structured metadata and responsive UI to improve user experience and search engine indexing.",
    tech: ["Next.js", "Tailwind CSS", "mongoDB", "Vercel", "SEO"],
    github: "https://github.com/wawanher487/cprn-2026",
    live: "https://cprn2026.ceccep.org/",
    featured: true,
    accentColor: "orange" as const,
    number: "01",
  },
  {
    id: 2,
    title: "Monja Digital Platform",
    description:
      "Backend system for a business website, focused on building scalable RESTful APIs to support content management and business operations.",
    longDescription:
      "Developed the backend architecture using NestJS and Node.js, creating structured and scalable RESTful APIs. Handled data management with MongoDB and ensured clean, maintainable code using TypeScript. The system supports seamless data flow between frontend and backend, enabling efficient content updates and improved application performance.",
    tech: ["NestJS", "Node.js", "TypeScript", "MongoDB"],
    github: "https://github.com/wawanher487/api-monja",
    live: undefined,
    featured: true,
    accentColor: "green" as const,
    number: "02",
  },
  {
    id: 3,
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance system leveraging face recognition and real-time processing to improve accuracy and eliminate manual tracking.",
    longDescription:
      "Designed and developed a scalable attendance system integrating face recognition for automated check-in. Built backend services using NestJS and Node.js, and implemented real-time data processing with RabbitMQ for efficient communication between services. Utilized Python for face recognition processing and MongoDB for flexible data storage. The system significantly reduces manual errors and streamlines employee attendance management.",
    tech: ["React", "NestJS", "Node.js", "Python", "MongoDB", "RabbitMQ"],
    github: "https://github.com/wawanher487/absensi-apps",
    live: undefined,
    featured: true,
    accentColor: "cyan" as const,
    number: "03",
  },
];

// Tambahkan di src/lib/data.ts

export const pricingData = {
  packages: [
    {
      id: "starter",
      name: "Starter",
      subtitle: "MSMEs  & Personal",
      priceRange: "Rp500K – Rp900K",
      description:
        "Perfect for those who need a fast and professional online presence.",
      color: "cyan" as const,
      popular: false,
      features: [
        { text: "Landing page (max. 5 sections)", included: true },
        { text: "Light custom design", included: true },
        { text: "Mobile friendly & responsive", included: true },
        { text: "WhatsApp integration", included: true },
        { text: "Basic SEO (meta tags & indexing)", included: true },
        { text: "Domain setup & deployment", included: true },
        { text: "SSL (HTTPS)", included: true },
        { text: "1 revision", included: true },
        { text: "Contact form / lead form", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started",
    },
    {
      id: "business",
      name: "Business",
      subtitle: "Growing Businesses",
      priceRange: "Rp1.2jt – Rp2.4jt",
      description:
        "For businesses that need a professional website with fully custom design.",
      color: "indigo" as const,
      popular: true,
      features: [
        { text: "Website (max. 10 sections/pages)", included: true },
        { text: "Full custom design", included: true },
        { text: "Mobile friendly & responsive", included: true },
        { text: "Standard performance optimization", included: true },
        { text: "Basic SEO (meta tags & indexing)", included: true },
        { text: "Domain setup & deployment", included: true },
        { text: "SSL (HTTPS)", included: true },
        { text: "2 revisions", included: true },
        { text: "Contact form / lead form", included: true },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started",
    },
    {
      id: "professional",
      name: "Professional",
      subtitle: "Companies & Branding",
      priceRange: "Rp2.6jt – Rp5jt",
      description:
        "A complete solution for companies serious about building their digital brand.",
      color: "violet" as const,
      popular: false,
      features: [
        { text: "Multi-page website", included: true },
        { text: "Full custom design", included: true },
        { text: "Mobile friendly & responsive", included: true },
        { text: "Advanced performance optimization", included: true },
        { text: "SEO ready (full structure)", included: true },
        { text: "Form & interaction integration", included: true },
        { text: "Domain setup & deployment", included: true },
        { text: "SSL (HTTPS)", included: true },
        { text: "3 revisions", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Get Started",
    },
  ],

  customCard: {
    title: "Custom / Collaboration",
    subtitle: "Let’s Discuss First",
    description:
      "Have specific needs? Long-term collaboration? Complex system integrations? Let’s sit down together and find the best solution.",
    points: [
      "Web app & SaaS development",
      "Collaboration / revenue share",
      "API integration & custom backend",
      "Technical consultation",
      "Long-term partnership",
    ],
    cta: "Let's Talk",
  },
};
