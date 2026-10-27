import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/primitives";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookie Policy" },
];

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  current: string;
  children: ReactNode;
}

/** Shared layout for legal documents with readable long-form typography. */
export function LegalPage({ title, updated, intro, current, children }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} />
      <Container className="pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <nav aria-label="Legal documents" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={l.href === current ? "page" : undefined}
                    className={
                      l.href === current
                        ? "block whitespace-nowrap rounded-2xl bg-ink/10 px-3 py-2 text-sm font-medium text-fg"
                        : "block whitespace-nowrap rounded-2xl px-3 py-2 text-sm text-muted hover:text-fg"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <article className="max-w-3xl text-[1.02rem] leading-relaxed text-muted [&_a]:font-medium [&_a]:text-lunar-300 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-glow-300 [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-[-0.01em] [&_h2]:text-fg first:[&_h2]:mt-0 [&_li]:mt-2 [&_p]:mt-4 [&_strong]:text-fg [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
            <p className="!mt-0 font-mono text-xs uppercase tracking-[0.14em] text-dim">Last updated {updated}</p>
            {children}
          </article>
        </div>
      </Container>
    </>
  );
}
