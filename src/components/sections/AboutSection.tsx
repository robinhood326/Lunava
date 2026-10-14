import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const pillars = [
  {
    title: "Opportunity",
    summary: "AI labs need skilled people to evaluate and teach their models. We help experts find that work across platforms.",
  },
  {
    title: "Preparation",
    summary: "Applications, AI interviews and skills tests are a format of their own. We coach you through each one.",
  },
  {
    title: "Quality",
    summary: "Careful, well-reasoned work is what keeps projects coming. We help you build habits that last.",
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
                    Great AI needs <span className="text-gradient">great experts.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Behind every capable AI model are people who checked its answers, wrote harder questions and explained what good
                looks like. That work is skilled, flexible and increasingly in demand, but the landscape is fragmented and
                changes fast.
              </p>
              <p>
                Lunava is a small consultancy that makes it easier to navigate. We help engineers, researchers and domain
                specialists understand the platforms, present their expertise well and deliver work they can be proud of.
              </p>
              <p>
                We are independent. We do not work for any platform, we never promise outcomes, and we tell you plainly when
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
