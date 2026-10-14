import {
  BadgeCheck,
  BrainCircuit,
  Code2,
  Compass,
  FileSearch,
  FlaskConical,
  Gavel,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  MessagesSquare,
  PenLine,
  Route,
  ScanSearch,
  ShieldAlert,
  Sigma,
  Target,
  type LucideIcon,
} from "lucide-react";

/* ── Platforms ───────────────────────────────────────────────── */

export interface Platform {
  name: string;
  kind: string;
  summary: string;
  fit: string[];
}

/** Descriptions are intentionally general: Lunava is independent and does not speak for these companies. */
export const platforms: Platform[] = [
  {
    name: "Mercor",
    kind: "Expert marketplace",
    summary:
      "An AI-powered talent marketplace that connects engineers and domain experts with AI labs and companies for contract evaluation, data and training projects.",
    fit: ["Engineers", "Researchers", "Domain experts"],
  },
  {
    name: "micro1",
    kind: "Talent platform",
    summary:
      "An AI-driven talent platform that vets experts and places them on AI-training, evaluation and data-quality work for AI teams.",
    fit: ["Engineers", "Specialists", "Linguists"],
  },
];

export const morePlatforms = {
  name: "…and more",
  kind: "Expert networks & AI-data vendors",
  summary:
    "The market is broad and changes quickly. We track expert networks, AI-data vendors and lab programs so you are not limited to a single door.",
};

/* ── Work types ──────────────────────────────────────────────── */

export interface WorkType {
  icon: LucideIcon;
  title: string;
  summary: string;
  tags: string[];
}

export const workTypes: WorkType[] = [
  {
    icon: MessagesSquare,
    title: "Model evaluation & RLHF",
    summary:
      "Compare model responses, rank them against a rubric and explain why. Your judgement is the signal models learn from.",
    tags: ["Preference ranking", "Rubrics", "Rationales"],
  },
  {
    icon: Code2,
    title: "Code & software engineering",
    summary:
      "Write, review and debug code that trains and tests coding models — from algorithms to full-stack tasks and tool use.",
    tags: ["Code review", "Debugging", "Test writing"],
  },
  {
    icon: ShieldAlert,
    title: "Red teaming & safety",
    summary:
      "Probe models for weaknesses, edge cases and unsafe behaviour, and document what you find so it can be fixed.",
    tags: ["Adversarial prompts", "Policy checks", "Risk notes"],
  },
  {
    icon: PenLine,
    title: "Prompt & dataset writing",
    summary:
      "Author challenging prompts, reference answers and multi-step tasks that stretch what a model can currently do.",
    tags: ["Prompt design", "Reference answers", "Task design"],
  },
  {
    icon: Sigma,
    title: "STEM & reasoning",
    summary:
      "Create and verify maths, science and logic problems with correct, step-by-step solutions.",
    tags: ["Math", "Physics", "Proof checking"],
  },
  {
    icon: Languages,
    title: "Multilingual & linguistics",
    summary:
      "Evaluate fluency, tone and cultural accuracy across languages, and help models work well beyond English.",
    tags: ["Translation QA", "Localisation", "Fluency"],
  },
];

/* ── Expert domains ──────────────────────────────────────────── */

export interface Domain {
  icon: LucideIcon;
  title: string;
  examples: string;
}

export const domains: Domain[] = [
  { icon: Code2, title: "Software & data engineering", examples: "Backend, frontend, ML, DevOps, data" },
  { icon: FlaskConical, title: "Science & research", examples: "Physics, chemistry, biology, maths" },
  { icon: HeartPulse, title: "Medicine & health", examples: "Clinicians, pharmacists, researchers" },
  { icon: Gavel, title: "Law & policy", examples: "Legal analysis, compliance, policy" },
  { icon: Landmark, title: "Finance & economics", examples: "Modelling, accounting, markets" },
  { icon: GraduationCap, title: "Education & writing", examples: "Teaching, editing, technical writing" },
  { icon: Globe2, title: "Languages", examples: "Native and professional fluency" },
  { icon: BrainCircuit, title: "AI & ML practitioners", examples: "Evals, alignment, tooling" },
];

/** Short phrases for the scrolling ticker. */
export const tickerItems = [
  "RLHF",
  "Preference ranking",
  "Code review",
  "Red teaming",
  "Rubric writing",
  "Fact-checking",
  "Prompt design",
  "Multilingual evals",
  "STEM reasoning",
  "Agentic tasks",
  "Safety evaluation",
  "Domain review",
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
    title: "Opportunity matching",
    summary: "We map your background to the platforms and project types where it is most in demand.",
    points: ["Skills & domain review", "Platform shortlist", "Project-type fit"],
  },
  {
    icon: FileSearch,
    title: "Profile & application polish",
    summary: "Your profile is read by recruiters and automated screens. We make your expertise easy to see.",
    points: ["Resume & profile rewrite", "Evidence of depth", "Clear positioning"],
  },
  {
    icon: Target,
    title: "Assessment & interview prep",
    summary: "AI-led interviews and skills tests are their own format. Practise before it counts.",
    points: ["Mock AI interviews", "Task walk-throughs", "Feedback on answers"],
  },
  {
    icon: BadgeCheck,
    title: "Quality coaching",
    summary: "Once you are in, quality scores decide what comes next. We help you read guidelines and stay consistent.",
    points: ["Guideline reading", "Rationale writing", "Review feedback habits"],
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
    summary: "Share your background, domain, availability and what you want from AI-training work.",
  },
  {
    icon: Route,
    title: "Get a plan",
    summary: "We recommend platforms and project types that suit you, and what to fix before you apply.",
  },
  {
    icon: Target,
    title: "Apply & prepare",
    summary: "Polish your profile, then rehearse the interviews and assessments you will face.",
  },
  {
    icon: BadgeCheck,
    title: "Deliver quality work",
    summary: "Learn the guidelines, build a track record and keep access to better projects.",
  },
];

/* ── Principles ──────────────────────────────────────────────── */

export const principles = [
  {
    title: "Honest expectations",
    summary:
      "We never promise work, pay or acceptance. Availability, rates and requirements are set by each platform and change often.",
  },
  {
    title: "Independent by design",
    summary: "Lunava is not affiliated with or endorsed by Mercor, micro1 or any other platform we mention.",
  },
  {
    title: "Quality first",
    summary: "Good AI training is careful work. We coach for accuracy and clear reasoning, never shortcuts.",
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
    question: "What is AI training work?",
    answer:
      "Experts help improve AI models by evaluating responses, writing prompts and reference answers, reviewing code and testing for failures. Models learn from careful human judgement in the areas that people know best.",
  },
  {
    question: "Is Lunava part of Mercor or micro1?",
    answer:
      "No. Lunava is an independent consultancy. We help you understand, prepare for and apply to opportunities on platforms such as Mercor and micro1, but we do not represent them and cannot offer anyone a place on them.",
  },
  {
    question: "Will I definitely get work?",
    answer:
      "No one can promise that, and we won't. Platforms decide who they accept and which projects are open. We help you present your strengths clearly and prepare well.",
  },
  {
    question: "Do I need to be a software engineer?",
    answer:
      "No. Engineering is a big part of the market, but science, medicine, law, finance, writing and language experts are in demand too. If you have deep knowledge in a field, get in touch.",
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
  { value: "expert", label: "I'm an expert looking for AI training work" },
  { value: "team", label: "I represent an AI team or platform" },
  { value: "partnership", label: "Partnerships" },
  { value: "press", label: "Press" },
  { value: "other", label: "Something else" },
];

/* ── Static-site pipeline (shown on Home and About) ───────────── */

export const pipeline = [
  { label: "Write", title: "React + TypeScript", detail: "Components in src/" },
  { label: "Build", title: "next build", detail: "Static export" },
  { label: "Output", title: "HTML · CSS · JS", detail: "Plain files in out/" },
  { label: "Publish", title: "GitHub Pages", detail: "Live at lunava.tech" },
];
