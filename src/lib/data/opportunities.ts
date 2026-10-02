import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Bug,
  Cloud,
  Database,
  Layers,
  LayoutTemplate,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export interface RoleArea {
  icon: LucideIcon;
  title: string;
  roles: string[];
}

/** Engineering areas Lunava focuses on, with example role titles. */
export const roleAreas: RoleArea[] = [
  { icon: Server, title: "Backend", roles: ["Backend Engineer", "API Engineer", "Distributed Systems Engineer"] },
  { icon: LayoutTemplate, title: "Frontend", roles: ["Frontend Engineer", "UI Engineer", "Design Systems Engineer"] },
  { icon: Layers, title: "Full-stack", roles: ["Full-stack Engineer", "Product Engineer", "Software Engineer"] },
  { icon: Database, title: "Data", roles: ["Data Engineer", "Analytics Engineer", "Data Scientist"] },
  { icon: BrainCircuit, title: "ML & AI", roles: ["ML Engineer", "AI Engineer", "MLOps Engineer"] },
  { icon: Cloud, title: "Cloud & DevOps", roles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer"] },
  { icon: Workflow, title: "Platform", roles: ["Platform Engineer", "Infrastructure Engineer", "Developer Experience"] },
  { icon: Bug, title: "QA & Automation", roles: ["QA Automation Engineer", "SDET", "Test Engineer"] },
  { icon: Smartphone, title: "Mobile", roles: ["iOS Engineer", "Android Engineer", "React Native Engineer"] },
  { icon: ShieldCheck, title: "Security", roles: ["Security Engineer", "AppSec Engineer", "Cloud Security Engineer"] },
];
