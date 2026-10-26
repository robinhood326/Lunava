import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";

export const metadata: Metadata = {
  title: "About",
  description: "Lunava is a consultancy that helps LATAM-based software engineers connect with remote roles at U.S. companies. Learn our mission and principles.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="An independent consultancy for LATAM software engineers."
        description="We help talented engineers in Latin America find, win and succeed in remote roles with U.S. companies."
      />
      <AboutSection />
      <PrinciplesSection />
      <PageCTA />
    </PageShell>
  );
}
