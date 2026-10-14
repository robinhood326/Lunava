import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Expert consulting for AI training work: opportunity matching, profile polish, assessment and interview prep, and quality coaching.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Consulting for the people who train AI."
        description="Practical, honest support at every stage — from choosing platforms to passing assessments to delivering work that earns more of it."
      />
      <ServicesSection />
      <ProcessSection />
      <PrinciplesSection />
      <FaqSection />
      <PageCTA />
    </PageShell>
  );
}
