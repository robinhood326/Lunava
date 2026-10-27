import { Mail, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

const channels = [
  { icon: Mail, title: "General & engineer enquiries", email: siteConfig.email.hello },
  { icon: ShieldCheck, title: "Privacy", email: siteConfig.email.privacy },
];

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="page-title" className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 id="page-title" className="display mt-8 text-balance text-[clamp(3.2rem,9vw,7.5rem)]">
              Let&apos;s find your fit.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Tell us about your experience and goals, or what your team needs. We&apos;ll reply with an honest view of where you
              could fit in a U.S. remote role.
            </p>
            <ul className="mt-10 space-y-3">
              {channels.map(({ icon: Icon, title, email }) => (
                <li key={email} className="glass flex items-center gap-4 rounded-sm px-4 py-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-lunar-500/20 text-lunar-200 ring-1 ring-inset ring-ink/15">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-dim">{title}</p>
                    <a href={`mailto:${email}`} className="font-medium text-fg hover:text-lunar-300">
                      {email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
