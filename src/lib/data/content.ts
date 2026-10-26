import {
  AppWindow,
  BadgeCheck,
  Cloud,
  Code2,
  Compass,
  Database,
  FileSearch,
  Globe2,
  HeartPulse,
  Landmark,
  MessagesSquare,
  Route,
  ScanSearch,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

/* ── Hiring pathways ─────────────────────────────────────────── */

export interface Pathway {
  name: string;
  kind: string;
  summary: string;
  fit: string[];
}

/** General descriptions of how U.S. companies hire engineers abroad. Not legal or tax advice. */
export const pathways: Pathway[] = [
  {
    name: "Direct remote hire",
    kind: "Contractor engagement",
    summary:
      "A U.S. company brings you onto its team as an independent contractor, usually paid in USD and working in overlapping time zones.",
    fit: ["Long-term roles", "Paid in USD", "Join an existing team"],
  },
  {
    name: "Employer of record",
    kind: "Hired locally, work globally",
    summary:
      "An employer-of-record (EOR) employs you legally in your own country while you work for the U.S. company, with local contracts, benefits and payroll.",
    fit: ["Local benefits", "Local contract", "Full-time"],
  },
];

export const morePathways = {
  name: "…and more",
  kind: "Nearshore partners & project work",
  summary:
    "Nearshore agencies, staff-augmentation partners and fixed-term contracts are other doors. We help you compare them and pick what suits your goals.",
};

/* ── Roles ───────────────────────────────────────────────────── */

export interface Role {
  icon: LucideIcon;
  title: string;
  summary: string;
  tags: string[];
}

export const roles: Role[] = [
  {
    icon: Server,
    title: "Backend engineering",
    summary:
      "Design and build the APIs, services and data layers that power U.S. products — from monoliths to distributed systems.",
    tags: ["Node.js", "Python", "Java", "Go"],
  },
  {
    icon: AppWindow,
    title: "Frontend & full-stack",
    summary: "Ship polished web products end to end, from component libraries to server-rendered apps.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile engineering",
    summary: "Build and maintain native and cross-platform apps used by customers every day.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: Cloud,
    title: "DevOps, cloud & SRE",
    summary: "Keep systems fast, secure and reliable with infrastructure as code, CI/CD and observability.",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    icon: Database,
    title: "Data & ML engineering",
    summary: "Build the pipelines, warehouses and model-serving systems that turn data into product.",
    tags: ["SQL", "Spark", "MLOps"],
  },
  {
    icon: TestTube2,
    title: "QA & test automation",
    summary: "Raise quality with automated testing, tooling and release confidence across the stack.",
    tags: ["Playwright", "Cypress", "CI"],
  },
];

/* ── Industries ──────────────────────────────────────────────── */

export interface Industry {
  icon: LucideIcon;
  title: string;
  examples: string;
}

export const industries: Industry[] = [
  { icon: Code2, title: "SaaS & developer tools", examples: "B2B products, platforms, APIs" },
  { icon: Landmark, title: "Fintech", examples: "Payments, banking, lending" },
  { icon: HeartPulse, title: "Healthtech", examples: "Care platforms, records, devices" },
  { icon: Globe2, title: "E-commerce & marketplaces", examples: "Retail, logistics, consumer apps" },
  { icon: Database, title: "Data & analytics", examples: "Pipelines, BI, applied ML" },
  { icon: ShieldCheck, title: "Security & infrastructure", examples: "Cloud, identity, compliance" },
  { icon: MessagesSquare, title: "Media & communication", examples: "Messaging, video, social" },
  { icon: Cloud, title: "Startups to enterprise", examples: "From seed-stage to large teams" },
];

/** Short phrases for the scrolling ticker. */
export const tickerItems = [
  "Remote roles",
  "U.S. companies",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Go",
  "TypeScript",
  "AWS",
  "Kubernetes",
  "Mobile",
  "Data engineering",
  "Time-zone aligned",
  "Paid in USD",
];

/* ── Services & process ──────────────────────────────────────── */

export interface Service {
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
}

export const services: Service[] = [
  {
    icon: Compass,
    title: "Role & company matching",
    summary: "We map your stack and experience to the U.S. roles and hiring pathways where you are most in demand.",
    points: ["Skills & seniority review", "Target role shortlist", "Pathway fit"],
  },
  {
    icon: FileSearch,
    title: "Résumé & profile for the U.S. market",
    summary: "U.S. recruiters scan fast. We make your impact, scope and results clear in the first few seconds.",
    points: ["Résumé rewrite", "LinkedIn & GitHub polish", "Clear positioning"],
  },
  {
    icon: Target,
    title: "Interview & English prep",
    summary: "Technical rounds, system design and behavioral interviews in English are a skill of their own. Practise before it counts.",
    points: ["Mock technical interviews", "System design practice", "Communication coaching"],
  },
  {
    icon: BadgeCheck,
    title: "Offer & onboarding guidance",
    summary: "Understand contracts, rates and how working with a U.S. team differs, so you can start with confidence.",
    points: ["Offer & rate review", "Contractor vs employee basics", "First 90 days"],
  },
];

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  summary: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: ScanSearch,
    title: "Tell us about you",
    summary: "Share your stack, experience, country, English level and what you want from a U.S. remote role.",
  },
  {
    icon: Route,
    title: "Get a plan",
    summary: "We recommend target roles and hiring pathways, and what to improve before you apply.",
  },
  {
    icon: Target,
    title: "Apply & prepare",
    summary: "Polish your résumé and profile, then rehearse the interviews you will face.",
  },
  {
    icon: BadgeCheck,
    title: "Land & settle in",
    summary: "Review your offer, start well and build a track record with your new team.",
  },
];

/* ── Principles ──────────────────────────────────────────────── */

export const principles = [
  {
    title: "Honest expectations",
    summary:
      "We never promise a job, a salary or an interview. Hiring decisions and pay are made by employers and change often.",
  },
  {
    title: "On the engineer's side",
    summary: "Our guidance is built around your goals. We tell you plainly when a role or pathway is not a good fit.",
  },
  {
    title: "Built for LATAM",
    summary: "We understand your market, your time zones and the questions that come with working for a company abroad.",
  },
  {
    title: "Your data stays yours",
    summary: "This site has no accounts and stores nothing you type. We only see what you choose to email us.",
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */

export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    question: "Who is Lunava for?",
    answer:
      "Software engineers based in Latin America who want to work remotely for U.S. companies — from first remote role to senior and lead positions.",
  },
  {
    question: "Will I definitely get a job?",
    answer:
      "No one can promise that, and we won't. Employers decide who they hire. We help you choose the right targets, present your strengths clearly and prepare well.",
  },
  {
    question: "Do I need fluent English?",
    answer:
      "Strong working English helps, because interviews and daily collaboration happen in it. We coach technical communication so you can explain your work with confidence.",
  },
  {
    question: "Will I be a contractor or an employee?",
    answer:
      "It depends on the company and pathway. Many U.S. companies engage LATAM engineers as contractors, while others use an employer of record. We explain the differences; for legal or tax decisions, speak to a qualified professional.",
  },
  {
    question: "Do time zones work?",
    answer:
      "Most of Latin America overlaps well with U.S. working hours, which is a big reason companies hire here. We help you target teams whose schedule fits yours.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Send us a message and we'll explain how our consulting works before you commit to anything. There are no sign-ups or payments on this website.",
  },
  {
    question: "How is my information handled?",
    answer:
      "The website is static and has no backend. The contact form just opens an email in your own mail app, so nothing you type is stored by the site.",
  },
];

/* ── Contact ─────────────────────────────────────────────────── */

export const contactTopics = [
  { value: "engineer", label: "I'm a LATAM engineer looking for U.S. remote roles" },
  { value: "company", label: "I'm a U.S. company hiring engineers" },
  { value: "partnership", label: "Partnerships" },
  { value: "press", label: "Press" },
  { value: "other", label: "Something else" },
];
