import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CareersSection } from "@/components/sections/CareersSection";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "Careers at Lunava",
  description: "Work at Lunava and help software engineers build better careers. Learn how we work.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  return (
    <PageShell>
      <CareersSection />
      <PageCTA />
    </PageShell>
  );
}
