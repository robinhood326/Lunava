export const siteConfig = {
  name: "Lunava",
  domain: "lunava.tech",
  url: "https://lunava.tech",
  tagline: "Remote software engineer consulting. Connecting LATAM engineers with U.S. companies.",
  description:
    "Lunava is a remote software engineer consultancy for LATAM-based developers. We help engineers find, prepare for and land remote roles with companies in the United States.",
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
      { label: "Hiring pathways", href: "/opportunities#pathways" },
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
