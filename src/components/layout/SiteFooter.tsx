import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SocialIcon } from "@/components/brand/SocialIcon";
import { Container } from "@/components/ui/primitives";
import { footerNav, siteConfig, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/80 bg-white/55 text-muted backdrop-blur-xl">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 mx-auto h-72 max-w-3xl rounded-full bg-lunar-200/40 blur-3xl" />
      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo idPrefix="ftr" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">{siteConfig.tagline}</p>
            <ul className="mt-7 flex gap-2" aria-label="Social media">
              {socialLinks.map((s) => (
                <li key={s.network}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-muted ring-1 ring-white transition-colors hover:bg-white hover:text-ink"
                  >
                    <SocialIcon network={s.network} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-lunar-600">{group.title}</h2>
                <ul className="mt-5 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[0.95rem] text-muted transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lunava. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-400">{siteConfig.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
