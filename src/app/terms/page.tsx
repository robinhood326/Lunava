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
      updated="October 14, 2026"
      current="/terms"
      intro="The ground rules for using Lunava, written to be read."
    >
      <h2>Using this website</h2>
      <p>
        This website provides information about Lunava, an AI-training expert consulting agency that helps experts find, prepare for and succeed in AI training and evaluation work. By using it you agree to these terms and to our{" "}
        <Link href="/privacy">Privacy Policy</Link>. The site has no accounts and no sign-up.
      </p>

      <h2>Information on this site</h2>
      <p>
        We work to keep the content accurate and up to date, but it is provided for general information. Example tasks
        and illustrations show the kinds of work we advise on; they are not offers of work.
      </p>

      <h2>Opportunities and third-party platforms</h2>
      <p>
        Lunava does not guarantee acceptance onto any platform, work, interviews, income or any particular outcome.
        Hiring, project availability and pay are decided by the platforms and companies offering the work.
      </p>
      <p>
        Lunava is an independent consultancy. It is not affiliated with, endorsed by or sponsored by Mercor, micro1 or any
        other platform mentioned on this site. Their names and trademarks belong to their respective owners and are used
        only to describe the market in which we advise. Descriptions of platforms are general and may be out of date;
        check each platform&apos;s own site and terms before applying.
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
