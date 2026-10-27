import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { FaqSection } from "@/components/sections/FaqSection";
import { PhotoBanner } from "@/components/sections/PhotoBanner";
import { PageCTA } from "@/components/sections/PageCTA";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Consulting for LATAM software engineers: role matching, résumé and profile polish, interview and English prep, and offer guidance.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Consulting for engineers going remote with the U.S."
        description="Practical, honest support at every stage — from choosing target roles to acing interviews to starting well with your new team."
      />
      <PhotoBanner src="/images/team-laptop.jpg" alt="Four colleagues working together around a laptop" caption="Prepare for U.S. hiring, together." position="50% 35%" />
      <ServicesSection />
      <ProcessSection />
      <PrinciplesSection />
      <FaqSection />
      <PageCTA />
    </PageShell>
  );
}
