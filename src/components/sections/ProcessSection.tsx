import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { processSteps } from "@/lib/data/content";

export function ProcessSection({ id = "process" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="process-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="How it works"
            title={
              <>
                Four steps, <span className="text-gradient">no guesswork.</span>
              </>
            }
            align="center"
          />
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.65rem] hidden h-px bg-gradient-to-r from-transparent via-lunar-400/50 to-transparent lg:block"
          />
          {processSteps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 90} className="relative">
                <span className="relative z-10 flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-sm border border-ink/15 bg-bg font-mono text-sm font-semibold text-lunar-200 shadow-[0_0_30px_-6px_rgb(112_102_241/0.7)]">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-fg">{s.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{s.summary}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
