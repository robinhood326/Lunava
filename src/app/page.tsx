import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PageCTA } from "@/components/sections/PageCTA";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TickerSection } from "@/components/sections/TickerSection";
import { WorkTypesSection } from "@/components/sections/WorkTypesSection";
import { faqs } from "@/lib/data/content";
import { siteConfig } from "@/lib/site";
import { jsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      description: siteConfig.description,
      email: siteConfig.email.hello,
      knowsAbout: ["AI training", "RLHF", "AI model evaluation", "Expert consulting"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <Hero />
      <TickerSection />
      <PlatformsSection />
      <WorkTypesSection />
      <ProcessSection />
      <FaqSection />
      <PageCTA />
    </>
  );
}
