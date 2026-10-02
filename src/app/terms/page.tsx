import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use Lunava.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="October 1, 2026"
      current="/terms"
      intro="The ground rules for using Lunava, written to be read."
    >
      <h2>Using this website</h2>
      <p>
        This website provides information about Lunava and how we help software engineers find opportunities, earn from
        their skills and grow their careers. By using it you agree to these terms and to our{" "}
        <Link href="/privacy">Privacy Policy</Link>. The site has no accounts and no sign-up.
      </p>

      <h2>Information on this site</h2>
      <p>
        We work to keep the content accurate and up to date, but it is provided for general information. Example roles,
        pay types and illustrations describe the kinds of opportunities we focus on; they are not offers of work.
      </p>

      <h2>Opportunities</h2>
      <p>
        Lunava does not guarantee employment, interviews, income or any particular outcome. Hiring and pay decisions are
        made by the companies offering opportunities.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Don&apos;t misuse the site or attempt to access it in unauthorized ways.</li>
        <li>Don&apos;t copy or republish the site&apos;s content or illustrations without permission.</li>
      </ul>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms as Lunava grows. Questions? Email{" "}
        <a href={`mailto:${siteConfig.email.hello}`}>{siteConfig.email.hello}</a>.
      </p>
    </LegalPage>
  );
}
