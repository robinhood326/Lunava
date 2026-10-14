export const siteConfig = {
  name: "Lunava",
  domain: "lunava.tech",
  url: "https://lunava.tech",
  tagline: "AI training expert consulting. Put your expertise to work.",
  description:
    "Lunava is an AI-training expert consulting agency. We help engineers, researchers and domain specialists find, qualify for and succeed in paid AI training and evaluation projects on platforms like Mercor and micro1.",
  email: {
    hello: "hello@lunava.tech",
    privacy: "privacy@lunava.tech",
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Opportunities", href: "/opportunities" },
      { label: "Platforms", href: "/opportunities#platforms" },
      { label: "Services", href: "/services" },
      { label: "How it works", href: "/services#process" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
