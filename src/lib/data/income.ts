import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Clock3, FileSignature, Globe2 } from "lucide-react";

export interface IncomePath {
  icon: LucideIcon;
  title: string;
  description: string;
  pay: string;
}

/** The ways engineers can earn through the opportunities Lunava helps them find. */
export const incomePaths: IncomePath[] = [
  {
    icon: BriefcaseBusiness,
    title: "Full-time roles",
    description: "Stable salaried positions with teams that invest in your growth.",
    pay: "Annual salary",
  },
  {
    icon: FileSignature,
    title: "Contract projects",
    description: "Well-scoped engagements that pay for specialist skills, short or long term.",
    pay: "Hourly or project rate",
  },
  {
    icon: Clock3,
    title: "Part-time & flexible",
    description: "Extra income alongside studies, another role or other commitments.",
    pay: "Flexible hours",
  },
  {
    icon: Globe2,
    title: "Remote work",
    description: "Opportunities you can do from where you live, across time zones and markets.",
    pay: "Work from anywhere",
  },
];
