import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lunava — whether you're a software engineer or a company hiring engineers.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="pt-6 sm:pt-10">
        <ContactSection />
      </div>
    </PageShell>
  );
}
