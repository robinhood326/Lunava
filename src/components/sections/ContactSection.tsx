import { Building2, Mail, ShieldCheck } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

const channels = [
  { icon: Mail, title: "Engineers & general", email: siteConfig.email.hello },
  { icon: Building2, title: "Companies hiring engineers", email: siteConfig.email.companies },
  { icon: ShieldCheck, title: "Privacy", email: siteConfig.email.privacy },
];

/** Closing section: the final call to action and the way to reach us. */
export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-16 sm:pb-20">
      {/* The card sits inside the page container so its edges align with the header and other pages. */}
      <Container>
      <div className="glass relative isolate overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid-dark mask-radial absolute inset-0" />
          <div className="absolute -bottom-40 left-1/4 h-[26rem] w-[40rem] rounded-full bg-lunar-200/60 blur-[120px]" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-glow-300/30 blur-[100px]" />
        </div>
        <div>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <Reveal>
              <LogoMark idPrefix="contact" className="h-12 w-12" />
              <h2 id="contact-heading" className="mt-8 text-balance text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                Your Next Opportunity Starts Here.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                Tell us about your skills and goals — or the engineers your team needs. We&apos;ll help you find
                opportunities that turn engineering skills into income and long-term career growth.
              </p>
              <ul className="mt-10 space-y-3">
                {channels.map(({ icon: Icon, title, email }) => (
                  <li key={email} className="flex items-center gap-4 rounded-2xl bg-white/60 px-4 py-3.5 ring-1 ring-white">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lunar-50 to-white text-lunar-600 ring-1 ring-lunar-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-muted">{title}</p>
                      <a href={`mailto:${email}`} className="font-medium text-ink hover:text-lunar-600">
                        {email}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="text-ink">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
