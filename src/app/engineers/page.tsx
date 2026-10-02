import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CareerStagesSection } from "@/components/sections/CareerStagesSection";
import { ForEngineersSection } from "@/components/sections/ForEngineersSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { ValuePropsSection } from "@/components/sections/ValuePropsSection";

export const metadata: Metadata = {
  title: "For Software Engineers",
  description:
    "How Lunava helps software engineers earn from their skills and level up — from first role to principal, across full-time, contract and remote work.",
  alternates: { canonical: "/engineers/" },
};

export default function EngineersPage() {
  return (
    <PageShell>
      <CareerStagesSection id="engineers" tone="white" />
      <ForEngineersSection />
      <ValuePropsSection />
      <PageCTA />
    </PageShell>
  );
}
