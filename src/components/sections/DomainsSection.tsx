import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { domains } from "@/lib/data/content";

/** The kinds of expertise AI labs look for. */
export function DomainsSection() {
  return (
    <Section id="domains" labelledBy="domains-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="domains-heading"
            eyebrow="Expertise"
            title={
              <>
                Deep knowledge <span className="text-gradient">in any field.</span>
              </>
            }
            description="Engineering is a big part of the market, but it is far from the only one. If you are an expert, someone is training a model that needs you."
          />
        </Reveal>
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((d, i) => (
            <li key={d.title}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <SpotlightCard className="h-full p-6">
                  <d.icon className="h-6 w-6 text-lunar-300" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-5 font-semibold tracking-[-0.01em] text-fg">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.examples}</p>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
