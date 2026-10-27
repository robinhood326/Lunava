import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/lib/data/content";

export function ServicesSection({ id = "services" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="services-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="services-heading"
            eyebrow="Consulting"
            title={
              <>
                Prepare. Apply. <span className="text-gradient">Get hired.</span>
              </>
            }
            description="From choosing targets to accepting an offer, we support each stage of landing a U.S. remote role."
          />
        </Reveal>

        <div className="space-y-4">
          {services.map((s, i) => (
            <div key={s.title} className="lg:sticky" style={{ top: `${7 + i * 1.25}rem` }}>
              <SpotlightCard className="p-7 sm:p-9">
                <IconTile icon={s.icon} />
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-fg">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.summary}</p>
                <ul className="mt-6 space-y-2.5 border-t border-ink/[0.07] pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-fg/90">
                      <Check className="h-4 w-4 shrink-0 text-glow-400" strokeWidth={2.5} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </Section>
  );
}
