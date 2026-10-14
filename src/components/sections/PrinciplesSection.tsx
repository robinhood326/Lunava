import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { principles } from "@/lib/data/content";

export function PrinciplesSection() {
  return (
    <Section labelledBy="principles-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="principles-heading"
            eyebrow="Principles"
            title={
              <>
                Straight talk, <span className="text-gradient">careful work.</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <SpotlightCard className="h-full p-6">
                <p className="font-mono text-xs text-lunar-300">0{i + 1}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.015em] text-fg">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.summary}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
