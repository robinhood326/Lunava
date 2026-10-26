import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const pillars = [
  {
    title: "Opportunity",
    summary: "U.S. companies need talented engineers, and Latin America has them. We help connect the two.",
  },
  {
    title: "Preparation",
    summary: "U.S. résumés, English-language interviews and technical assessments are a format of their own. We coach you through each one.",
  },
  {
    title: "Quality",
    summary: "Strong collaboration and steady delivery keep remote careers growing. We help you build habits that last.",
  },
];

export function AboutSection() {
  return (
    <>
      <Section labelledBy="mission-heading" className="pt-0 sm:pt-0 lg:pt-4">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                id="mission-heading"
                eyebrow="Our mission"
                title={
                  <>
                    Great teams are <span className="text-gradient">built across borders.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Latin America is full of exceptional software engineers, and U.S. companies are hiring remote talent more than ever.
                But finding the right role, standing out to U.S. recruiters and navigating contracts and interviews in another
                country can be confusing.
              </p>
              <p>
                Lunava is a small consultancy that makes it easier to navigate. We help LATAM-based software engineers understand
                the market, present their experience well and connect with teams in the United States.
              </p>
              <p>
                We are independent. We do not work for any employer, we never promise outcomes, and we tell you plainly when
                something is not a good fit.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section labelledBy="pillars-heading" className="pt-0 sm:pt-0">
        <Container>
          <h2 id="pillars-heading" className="sr-only">
            What we focus on
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <SpotlightCard className="h-full p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-lunar-300">0{i + 1}</p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-fg">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
