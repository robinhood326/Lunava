import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lunava helps software engineers turn their skills into income and sustainable careers. Learn what we do and what we believe.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
      <PageCTA />
    </PageShell>
  );
}
