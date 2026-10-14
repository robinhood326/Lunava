import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Lunava collects, uses and protects personal information.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 14, 2026"
      current="/privacy"
      intro="Your professional background is personal. This policy explains what we collect, why, and the choices you have."
    >
      <h2>Information we collect</h2>
      <p>
        This website is for information only. There are no accounts, sign-ups or profiles, and the site does not store
        anything you type into it. We receive personal information only when you choose to contact us — for example,
        your name, email address and anything you include in your message. The contact form simply opens an email in your own mail app; nothing is submitted to or stored by the website itself.
      </p>
      <p>
        The site is a static website hosted on GitHub Pages. GitHub, as our hosting provider, may keep standard technical
        logs, such as IP address and browser type, to keep the site secure and working well. See{" "}
        <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener noreferrer">GitHub&apos;s privacy statement</a>.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To reply to your message and discuss the consulting or opportunities you&apos;ve asked about.</li>
        <li>To keep the website secure and understand whether it is working well.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We don&apos;t sell personal information. We only share details you send us — for example, with a platform or
        company on your behalf — when you&apos;ve asked us to. We may also share information when required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask to access, correct or delete information you&apos;ve sent us at any time by emailing{" "}
        <a href={`mailto:${siteConfig.email.privacy}`}>{siteConfig.email.privacy}</a>.
      </p>

      <h2>Retention and security</h2>
      <p>
        We keep information only as long as needed for the purposes above, and use reasonable technical and organizational
        measures to protect it.
      </p>

      <h2>Changes</h2>
      <p>We&apos;ll update this page if our practices change.</p>
    </LegalPage>
  );
}
