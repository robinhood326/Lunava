import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Lunava works for software engineers and companies: get in touch, share your goals, find opportunities that pay for your skills and keep leveling up.",
  alternates: { canonical: "/how-it-works/" },
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <HowItWorksSection />
      <PageCTA />
    </PageShell>
  );
}
