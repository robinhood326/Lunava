import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { DomainsSection } from "@/components/sections/DomainsSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { WorkTypesSection } from "@/components/sections/WorkTypesSection";

export const metadata: Metadata = {
  title: "AI Training Opportunities",
  description:
    "Explore paid AI training and evaluation work on expert platforms like Mercor and micro1 — RLHF, code review, red teaming, domain review and more.",
  alternates: { canonical: "/opportunities/" },
};

export default function OpportunitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Opportunities"
        title="Where expertise becomes AI training work."
        description="Platforms like Mercor and micro1 hire experts to evaluate, correct and teach AI models. Here is the landscape and how you could fit in."
      />
      <PlatformsSection />
      <WorkTypesSection />
      <DomainsSection />
      <PageCTA />
    </PageShell>
  );
}
