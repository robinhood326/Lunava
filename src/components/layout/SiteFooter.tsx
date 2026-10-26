import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/primitives";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.07]">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo idPrefix="ftr" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-lunar-300">{group.title}</h2>
                <ul className="mt-5 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[0.95rem] text-muted transition-colors hover:text-fg">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 space-y-4 border-t border-white/[0.07] pt-8 text-sm text-dim">
          <p className="max-w-3xl text-xs leading-relaxed">
            Lunava is an independent consultancy. It is not a law, tax or immigration firm, and it is not affiliated with any
            employer. Company and product names belong to their respective owners. Lunava does not guarantee interviews, job
            offers or income.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Lunava. All rights reserved.</p>
            <p className="font-mono text-xs">{siteConfig.domain}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
