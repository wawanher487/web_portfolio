// src/lib/data.ts

export const siteConfig = {
  name: "Wawan Hermawan",
  title: "Software Engineer",
  email: "wawanhermawan2402@gmail.com",
  github: "https://github.com/wawanher487/",
  linkedin: "https://www.linkedin.com/in/wawanhermawan24/",
  tagline:
    "I build fast, scalable websites and turn them into growth engines for your business.",
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
      { name: "Prisma", level: 82 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "◈",
    color: "violet",
    items: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 72 },
      { name: "Vercel", level: 90 },
      { name: "REST / GraphQL", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Project Pertama",
    description:
      "Deskripsi singkat apa yang dibangun dan masalah apa yang diselesaikan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/...",
    live: "https://...",
    featured: true,
  },
];
