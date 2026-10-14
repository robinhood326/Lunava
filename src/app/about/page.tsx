import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";

export const metadata: Metadata = {
  title: "About",
  description: "Lunava is an independent AI-training expert consulting agency. Learn our mission and principles.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="An independent consultancy for AI training experts."
        description="We help skilled people find and succeed in the work that makes AI models better."
      />
      <AboutSection />
      <PrinciplesSection />
      <PageCTA />
    </PageShell>
  );
}
