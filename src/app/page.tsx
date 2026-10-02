import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { IncomeSection } from "@/components/sections/IncomeSection";
import { OpportunityTypesSection } from "@/components/sections/OpportunityTypesSection";
import { PageCTA } from "@/components/sections/PageCTA";
import { ResultsSection } from "@/components/sections/ResultsSection";
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
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <Hero />
      <OpportunityTypesSection />
      <IncomeSection />
      <ResultsSection />
      <PageCTA />
    </>
  );
}
