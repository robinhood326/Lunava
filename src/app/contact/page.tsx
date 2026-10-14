import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Lunava about your expertise and goals — or what your AI team needs — and we'll get back to you.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
