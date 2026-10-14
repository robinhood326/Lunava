import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/lib/data/content";

export function ServicesSection({ id = "services" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="services-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Consulting"
            title={
              <>
                Get in. Do well. <span className="text-gradient">Keep going.</span>
              </>
            }
            description="From first application to consistent quality scores, we support each stage of working in AI training."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <SpotlightCard className="h-full p-7 sm:p-9">
                <IconTile icon={s.icon} />
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-fg">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.summary}</p>
                <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-fg/90">
                      <Check className="h-4 w-4 shrink-0 text-glow-400" strokeWidth={2.5} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
