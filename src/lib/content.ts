export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  accent: "cyan" | "violet" | "lime";
};

export const site = {
  name: "Yasir Rahim",
  role: "Computer Science Engineer",
  eyebrow: "Independent digital builder",
  email: "sadiqyasir1631@gmail.com",
  github: "https://github.com/yasirrahim16",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  location: "Pakistan",
  availability: "Open to selected collaborations",
  bio: "I build immersive software experiences where engineering precision meets cinematic interaction. My focus is modern web architecture, creative UI systems, and interfaces that feel as good as they perform.",
  stats: [
    { value: "18+", label: "Experiments shipped" },
    { value: "12", label: "Core technologies" },
    { value: "60fps", label: "Motion target" },
    { value: "24/7", label: "Curiosity online" }
  ],
  nav: [
    ["About", "about"],
    ["Work", "projects"],
    ["Stack", "skills"],
    ["Journey", "experience"],
    ["GitHub", "github"],
    ["Contact", "contact"]
  ] as [string, string][],
  skills: [
    { name: "React / Next.js", level: 94, detail: "App Router, server components, architecture" },
    { name: "TypeScript", level: 91, detail: "Typed systems, interfaces, reusable primitives" },
    { name: "Three.js / R3F", level: 86, detail: "Interactive 3D scenes, shaders, lighting" },
    { name: "GSAP / Motion", level: 93, detail: "Scroll choreography, micro-interactions" },
    { name: "UI / UX", level: 95, detail: "Visual systems, hierarchy, experience design" },
    { name: "Performance", level: 88, detail: "Code splitting, motion budgets, web vitals" }
  ],
  technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "GSAP", "Motion", "Lenis", "Three.js", "WebGL", "GLSL", "Canvas", "Lottie"],
  experience: [
    { period: "2026 — Now", title: "Independent Frontend Engineer", company: "Yasir Studio", text: "Designing and engineering expressive web products with a strong emphasis on motion, clarity, and speed." },
    { period: "2025 — 2026", title: "Creative Web Developer", company: "Selected client work", text: "Built responsive interfaces, interactive prototypes, and reusable systems for digital products." },
    { period: "2024 — 2025", title: "Computer Science Learner", company: "Self-directed lab", text: "Deep-dived into programming fundamentals, modern web architecture, and visual computing." }
  ],
  education: [
    { year: "2026", title: "Computer Science", place: "Academic pathway", note: "Focused on software engineering, problem solving, and modern web systems." },
    { year: "2024", title: "Frontend Foundations", place: "Independent study", note: "Built a portfolio of projects across JavaScript, React, TypeScript, and UI design." }
  ],
  services: [
    { number: "01", title: "Creative Frontend", text: "High-end landing pages and product interfaces with crisp architecture and custom motion." },
    { number: "02", title: "Interactive 3D", text: "WebGL experiences, reactive hero scenes, 3D cards, and atmospheric visual systems." },
    { number: "03", title: "Design Systems", text: "Reusable components and interaction rules that scale across pages and products." },
    { number: "04", title: "Performance Pass", text: "Motion-aware performance tuning, loading strategy, accessibility, and responsive polish." }
  ],
  testimonials: [
    { quote: "A rare mix of engineering discipline and visual ambition.", name: "Future collaborator", role: "Placeholder testimonial" },
    { quote: "The details make the experience feel premium without getting noisy.", name: "Design partner", role: "Placeholder testimonial" },
    { quote: "Strong systems thinking, strong taste, and an obsession with the last 10%.", name: "Creative lead", role: "Placeholder testimonial" }
  ],
  achievements: [
    "Built interactive 3D web experiments from scratch",
    "Designed reusable motion systems for portfolio-grade interfaces",
    "Explored shader-driven visual effects with WebGL",
    "Created responsive interfaces across mobile, desktop, and ultrawide layouts"
  ],
  certificates: [
    { title: "Modern Web Development", issuer: "Portfolio placeholder", year: "2026" },
    { title: "UI / UX Fundamentals", issuer: "Portfolio placeholder", year: "2025" },
    { title: "JavaScript & TypeScript", issuer: "Portfolio placeholder", year: "2025" }
  ],
  gallery: [
    { title: "Aurora interface", caption: "Visual system / 01", hue: "cyan" },
    { title: "Signal field", caption: "3D study / 02", hue: "violet" },
    { title: "Liquid glass", caption: "Material study / 03", hue: "lime" },
    { title: "Night grid", caption: "Motion study / 04", hue: "cyan" },
    { title: "Orbit panel", caption: "Prototype / 05", hue: "violet" },
    { title: "Soft machine", caption: "Interaction study / 06", hue: "lime" }
  ],
  faq: [
    { q: "Can I replace all content from one place?", a: "Yes. The core editable content lives in src/lib/content.ts, while components consume that data." },
    { q: "Can I replace the profile image later?", a: "Yes. The profile frame accepts a normal image path and the 3D, glow, border, tilt, and lighting effects remain attached to the frame." },
    { q: "Is the site responsive?", a: "Yes. The layout has mobile, tablet, laptop, desktop, and ultrawide behavior with reduced-motion handling." },
    { q: "Does the contact form need a backend?", a: "No. It validates client-side and falls back to a mailto action; an optional endpoint can be configured in .env." }
  ],
  projects: [
    { title: "NOVA / immersive product", slug: "nova", category: "Experience", year: "2026", description: "A cinematic product interface blending WebGL atmosphere, reactive surfaces, and sharp editorial typography.", stack: ["Next.js", "R3F", "GSAP", "GLSL"], liveUrl: "#", githubUrl: "https://github.com/yasirrahim16", accent: "cyan" },
    { title: "VANTA / creative dashboard", slug: "vanta", category: "Interface", year: "2026", description: "A futuristic analytics shell with modular cards, live states, interaction feedback, and responsive data density.", stack: ["React", "TypeScript", "Tailwind", "Motion"], liveUrl: "#", githubUrl: "https://github.com/yasirrahim16", accent: "violet" },
    { title: "ORBIT / portfolio lab", slug: "orbit", category: "Experiment", year: "2025", description: "A visual laboratory exploring particle fields, mouse-reactive geometry, and scroll-linked scene changes.", stack: ["Three.js", "WebGL", "Lenis", "GSAP"], liveUrl: "#", githubUrl: "https://github.com/yasirrahim16", accent: "lime" },
    { title: "ARC / design system", slug: "arc", category: "System", year: "2025", description: "A compact system of accessible components, motion tokens, and visual rules designed for expressive product work.", stack: ["React", "CSS", "Motion", "A11y"], liveUrl: "#", githubUrl: "https://github.com/yasirrahim16", accent: "cyan" },
    { title: "PULSE / motion study", slug: "pulse", category: "Experiment", year: "2025", description: "A kinetic interface study where typography, light, and scroll velocity form the primary interaction language.", stack: ["GSAP", "Canvas", "CSS", "React"], liveUrl: "#", githubUrl: "https://github.com/yasirrahim16", accent: "violet" },
    { title: "AETHER / concept app", slug: "aether", category: "Concept", year: "2024", description: "A minimal control surface for a fictional network of creative digital tools, tuned for touch and desktop input.", stack: ["Next.js", "TypeScript", "Tailwind", "Motion"], liveUrl: "#", githubUrl: "https://github.com/yasirrahim16", accent: "lime" }
  ] as Project[]
};

export const githubUrl = site.github;
