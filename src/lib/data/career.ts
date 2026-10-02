import type { CareerStage, ExperienceLevel } from "../types";

export interface CareerStageInfo {
  id: CareerStage;
  title: string;
  description: string;
  audience: string[];
  levels: ExperienceLevel[];
}

export const careerStages: CareerStageInfo[] = [
  {
    id: "starting-out",
    title: "Starting Out",
    description:
      "For students, new graduates and entry-level engineers looking for their first opportunities.",
    audience: ["Students", "New graduates", "Bootcamp & self-taught", "Internships"],
    levels: ["entry"],
  },
  {
    id: "growing",
    title: "Growing",
    description:
      "For engineers building experience and looking for their next challenge.",
    audience: ["Junior engineers", "Mid-level engineers", "Career switchers"],
    levels: ["junior", "mid"],
  },
  {
    id: "experienced",
    title: "Experienced",
    description:
      "For senior engineers looking for meaningful projects, better opportunities and the right team.",
    audience: ["Senior engineers", "Specialists", "Independent contractors"],
    levels: ["senior"],
  },
  {
    id: "leading",
    title: "Leading",
    description:
      "For staff, principal, technical leads and engineering leaders looking for their next career move.",
    audience: ["Staff & principal", "Tech leads", "Engineering managers"],
    levels: ["staff", "principal"],
  },
];
