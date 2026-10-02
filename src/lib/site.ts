export const siteConfig = {
  name: "Lunava",
  domain: "lunava.tech",
  url: "https://lunava.tech",
  tagline: "Opportunities for software engineers. Careers built for the long term.",
  description:
    "Lunava helps software engineers turn their skills into income and long-term careers — connecting them with full-time, contract and remote opportunities at every level.",
  email: {
    hello: "hello@lunava.tech",
    companies: "companies@lunava.tech",
    privacy: "privacy@lunava.tech",
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "For Engineers", href: "/engineers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Opportunities", href: "/#opportunities" },
      { label: "For Engineers", href: "/engineers" },
      { label: "For Companies", href: "/how-it-works#companies" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
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

/** Social profiles. Replace the hrefs once official accounts exist. */
export const socialLinks = [
  { label: "Lunava on GitHub", network: "github", href: "https://github.com/" },
  { label: "Lunava on LinkedIn", network: "linkedin", href: "https://www.linkedin.com/" },
  { label: "Lunava on X", network: "x", href: "https://x.com/" },
] as const;
