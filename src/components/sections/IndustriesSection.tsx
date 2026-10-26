import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { industries } from "@/lib/data/content";

/** The industries hiring remote engineers. */
export function IndustriesSection() {
  return (
    <Section id="industries" labelledBy="industries-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries"
            title={
              <>
                Real products. <span className="text-gradient">Every industry.</span>
              </>
            }
            description="From early-stage startups to established enterprises, U.S. companies in every sector are building remote engineering teams."
          />
        </Reveal>
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((d, i) => (
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
