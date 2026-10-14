import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Lunava uses cookies and similar technologies.",
  alternates: { canonical: "/cookies/" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="October 14, 2026"
      current="/cookies"
      intro="We keep cookies to a minimum. Here's what we use and why."
    >
      <h2>What cookies are</h2>
      <p>Cookies are small files stored by your browser. They help websites remember information between visits.</p>

      <h2>Cookies we use</h2>
      <ul>
        <li>
          <strong>Essential cookies</strong> only, and only where our hosting provider needs them to deliver and secure the site. There are no accounts, so there are no sign-in cookies, and we load no third-party scripts, fonts or images from other sites.
        </li>
      </ul>
      <p>
        We don&apos;t use advertising cookies. If we add analytics in the future, we&apos;ll update this policy and ask
        for consent where required.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. Blocking essential cookies may stop parts of the site
        from working.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies? Email <a href={`mailto:${siteConfig.email.privacy}`}>{siteConfig.email.privacy}</a>.
      </p>
    </LegalPage>
  );
}
