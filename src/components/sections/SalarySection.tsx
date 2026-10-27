import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

/** Source: Stack Overflow Developer Survey 2025, median yearly total compensation in USD, self-reported, U.S. respondents. */
const stats = [
  { value: "$175,000", label: "Back-end developer", detail: "Median, U.S. respondents" },
  { value: "$138,000", label: "Full-stack developer", detail: "Median, U.S. respondents" },
  { value: "$189,500", label: "AI / ML engineer", detail: "Median, U.S. respondents" },
];

/** What U.S. teams pay, from a published survey, with honest caveats. */
export function SalarySection() {
  return (
    <Section id="pay" labelledBy="pay-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="pay-heading"
            eyebrow="The market"
            title={
              <>
                See what U.S. teams <span className="text-gradient">pay engineers.</span>
              </>
            }
            description="Published survey data shows how much software engineers earn in the United States. It is the market you would be joining, not a promise of what you will earn."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <SpotlightCard className="flex h-full flex-col p-8">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-gradient sm:text-5xl">{s.value}</p>
                <p className="mt-5 text-lg font-semibold text-fg">{s.label}</p>
                <p className="mt-1.5 text-sm text-muted">{s.detail}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 max-w-3xl space-y-2 text-sm leading-relaxed text-dim">
          <p>
            Source:{" "}
            <a href="https://survey.stackoverflow.co/2025/work" className="underline hover:text-fg">
              Stack Overflow Developer Survey 2025
            </a>
            , median yearly total compensation in USD, self-reported by respondents working in the United States.
          </p>
          <p>
            These figures are for U.S.-based engineers. Pay for engineers working remotely from Latin America varies widely by
            employer, role, seniority and contract type, and is often different from U.S. medians. Lunava does not guarantee any
            salary or income.
          </p>
        </div>
      </Container>
    </Section>
  );
}
