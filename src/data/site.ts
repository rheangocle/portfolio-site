// Central place for personal info, links, skills, and project case studies.
// Anything marked TODO needs a real URL, screenshot, or your confirmation
// (especially client attribution; see projects below).

export const site = {
  name: "Rhea Le",
  role: "Senior Full-Stack Web Developer",
  // One-line value proposition shown in the hero.
  tagline:
    "I build and maintain production web applications end to end, from enterprise WordPress and Laravel to modern React, Vue, and Astro front-ends.",
  location: "Greater Houston, TX",
  email: "rheangocle@gmail.com",
  links: {
    github: "https://github.com/rheangocle",
    // Hosted PDF résumé (downloadable). Update the file at public/Rhea-Le-Resume.pdf to refresh.
    resume: "/Rhea-Le-Resume.pdf",
    email: "mailto:rheangocle@gmail.com",
  },
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3", "Bash"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Vue", "Laravel", "Node.js", "Django / DRF", "Astro", "Tailwind CSS", "Alpine.js", "Vite", "jQuery"],
  },
  {
    label: "CMS & WordPress",
    items: ["WordPress", "Custom themes & plugins", "Elementor", "Gutenberg", "ACF", "WooCommerce", "WP-CLI", "Drupal", "Yoast / Schema SEO"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["Git", "CI/CD", "Docker", "Linux / Apache", "WP Engine", "cPanel / WHM", "Cloudflare / CDN", "DNS / SSL", "Postman", "OpenAPI"],
  },
  {
    label: "Databases & Analytics",
    items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Redis", "Google Analytics", "Google Tag Manager"],
  },
];

export type Project = {
  title: string;
  // Short context line under the title.
  context: string;
  blurb: string;
  // Bullet highlights. Keep to 3-4, lead with impact.
  highlights: string[];
  stack: string[];
  // Optional live link + repo. Leave undefined to hide the button.
  liveUrl?: string;
  repoUrl?: string;
  liveLabel?: string;
  // Featured projects render larger / first.
  featured?: boolean;
  // Image path under /public. Leave undefined to render a styled placeholder.
  image?: string;
  // "cover" fills the frame (good for site screenshots); "contain" shows the
  // whole image on a backdrop (good for portrait/mobile app screenshots).
  imageFit?: "cover" | "contain";
  // Optional third link (e.g. a demo video).
  extraUrl?: string;
  extraLabel?: string;
  // Optional row of named, linked clients (used on the agency card).
  clients?: { name: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "BellyEase",
    context: "Solo product · design, backend, and mobile app",
    featured: true,
    blurb:
      "A FODMAP-friendly recipe app that generates personalized recipes and analyzes a user's pantry from a photo. Built and shipped solo, front to back.",
    highlights: [
      "Django REST API + React Native (Expo) app with JWT auth and Google/Apple social login",
      "Integrated content generation with an automatic provider fallback for reliability and cost control",
      "Freemium model with usage metering and in-app subscriptions (RevenueCat)",
      "Production deploy on Railway with CI gates, Sentry monitoring, and PostgreSQL",
    ],
    stack: ["Django", "DRF", "React Native", "Expo", "TypeScript", "PostgreSQL", "Railway"],
    image: "/screenshots/bellyease.png",
    imageFit: "contain",
    // TODO: add an App Store / TestFlight link if available, or set repoUrl to public.
    repoUrl: "https://github.com/rheangocle/recipe-app-react-native",
    liveLabel: "View app",
  },
  {
    title: "ClothingCue",
    context: "Solo product · clothingcue.com",
    featured: true,
    blurb:
      "A restock-alert SaaS that watches a specific size, color, or length (not just a product page) and notifies shoppers the moment their exact variant is back in stock.",
    highlights: [
      "Turborepo monorepo: a Next.js 15 web app, a Fastify worker service, and shared parsing/email packages",
      "Background worker parses Shopify product variants and runs cron-scheduled stock checks across stores like Lululemon, Alo, and Gymshark",
      "Supabase Postgres with Drizzle ORM and Supabase Auth; email/SMS alerts via Resend and React Email",
      "Freemium model with a Pro tier that adds SMS alerts and price-drop tracking",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Drizzle", "Fastify", "Turborepo"],
    image: "/screenshots/clothingcue.png",
    liveUrl: "https://clothingcue.com",
    liveLabel: "Visit site",
  },
  {
    title: "Enterprise WordPress at Scale",
    context: "Senior Web Developer · Curious Minds Media",
    featured: true,
    blurb:
      "Lead developer on a multi-client agency portfolio. Highlights include a full hand-coded-to-Elementor rebuild of Guidepoint Security's site and a thousands-of-pages legacy migration, all without losing SEO, schema, or redirects.",
    highlights: [
      "Rebuilt Guidepoint Security's hand-coded site into a maintainable Elementor build, preserving design, SEO, and editorial usability",
      "Led a thousands-of-pages legacy-to-Elementor migration into reusable templates and widgets for clients including Monetary Metals",
      "Maintained and deployed sites across varied hosting setups, from WP Engine to cPanel/WHM stacks such as RevisionFX",
      "Owned full-cycle CMS deployments, covering plugin audits, PHP upgrades, backups, SSL/DNS/CDN checks, and release coordination",
    ],
    stack: ["WordPress", "PHP", "Elementor", "ACF", "Astro", "Tailwind", "cPanel/WHM"],
    image: "/screenshots/guidepoint.png",
    clients: [
      { name: "Guidepoint Security", url: "https://www.guidepointsecurity.com" },
      { name: "Timesheets.com", url: "https://www.timesheets.com" },
      { name: "RevisionFX", url: "https://revisionfx.com" },
    ],
    liveUrl: "https://www.curiousm.com",
    liveLabel: "Curious Minds Media",
    // TODO: more clients you can publicly name (e.g. Clearwater Marine Aquarium,
    // SCLC, YCharts) can be added to the clients[] list above once you have a
    // live, linkable URL for each.
  },
  {
    title: "Helm",
    context: "Full-Stack Web Developer · Local Spark",
    featured: true,
    blurb:
      "A multi-tenant Laravel SaaS that lets users sign in and run their whole web presence from one place: spin up WordPress sites, generate content, and manage marketing across thousands of sites.",
    highlights: [
      "Built a multi-tenant Laravel/Vue platform with RBAC, audit logging, and Redis-backed job queues",
      "Developed backend tooling to manage WordPress data and connect to remote MySQL databases across many Linux/cPanel servers",
      "Integrated third-party services including content generation, Google Maps/Directions, media uploads, and WordPress REST workflows",
    ],
    stack: ["Laravel", "Vue", "PHP", "MySQL", "Redis", "REST APIs"],
    image: "/screenshots/helm.png",
    liveUrl: "https://helm.localspark.ai",
    liveLabel: "Visit Helm",
    extraUrl: "https://youtu.be/FFRXwVZ0xLs",
    extraLabel: "Watch demo",
  },
  {
    title: "WFSU Public Media",
    context: "Web Developer · PBS/NPR member station",
    blurb:
      "Public-facing web features for a public media station, with a focus on audience growth and modernizing backend APIs.",
    highlights: [
      "Shipped newsletter signup features and site updates that grew subscriptions 50.8% and contributed to a 5.4% lift in donations",
      "Modernized backend APIs with OAuth2 authentication on Linux-based environments",
      "Maintained features in PHP, JavaScript, Python, and MariaDB-backed systems",
    ],
    stack: ["PHP", "JavaScript", "Python", "MariaDB", "OAuth2"],
    image: "/screenshots/wfsu.png",
    liveUrl: "https://www.wfsu.org",
    liveLabel: "Visit site",
  },
  {
    title: "Down Unda Pools",
    context: "Freelance · Houston custom pool builder",
    blurb:
      "Website build and ongoing support for a luxury custom pool builder, with an image-forward design that showcases their work and converts visitors into consultations.",
    highlights: [
      "Delivered a polished, visual WordPress site that strengthened the business's online presence",
      "Improved performance, search visibility, and maintainability through SEO and technical cleanup",
      "Provide ongoing content updates and support",
    ],
    stack: ["WordPress", "PHP", "SEO", "Performance"],
    image: "/screenshots/downundapools.png",
    liveUrl: "https://downundapools.com",
    liveLabel: "Visit site",
  },
];
