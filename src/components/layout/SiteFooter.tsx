import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { GithubIcon } from "@/components/brand/GithubIcon";
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
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white/[0.04] py-2 pl-3 pr-4 text-sm text-muted ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/[0.08] hover:text-fg"
            >
              <GithubIcon className="h-4 w-4 text-fg" />
              <span>
                Static site · built with React · hosted on <span className="text-fg">GitHub Pages</span>
              </span>
            </a>
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
            Lunava is an independent consultancy. It is not affiliated with, endorsed by or sponsored by Mercor, micro1 or any
            other platform named on this site. Product and company names belong to their respective owners. Lunava does not
            guarantee acceptance, work or income.
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
