import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { PathwaysSection } from "@/components/sections/PathwaysSection";
import { RolesSection } from "@/components/sections/RolesSection";

export const metadata: Metadata = {
  title: "Remote U.S. Roles",
  description:
    "Explore remote software engineering roles at U.S. companies — backend, frontend, mobile, DevOps, data and QA — and the ways LATAM engineers get hired.",
  alternates: { canonical: "/opportunities/" },
};

export default function OpportunitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Opportunities"
        title="Where LATAM talent meets U.S. teams."
        description="U.S. companies hire remote engineers across the stack. Here is how they hire and where you could fit in."
      />
      <PathwaysSection />
      <RolesSection />
      <IndustriesSection />
      <PageCTA />
    </PageShell>
  );
}
