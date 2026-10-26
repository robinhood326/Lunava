import { ArrowUpRight, Layers } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Pill, Section, SectionHeading, Container } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { morePathways, pathways } from "@/lib/data/content";

/** How U.S. companies hire engineers in Latin America. */
export function PathwaysSection({ id = "pathways" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="pathways-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="pathways-heading"
            eyebrow="Pathways"
            title={
              <>
                One goal. <span className="text-gradient">Several ways in.</span>
              </>
            }
            description="U.S. companies hire engineers in Latin America in more than one way. We help you understand each and choose the one that fits your life."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-fg sm:text-4xl">{p.name}</p>
                  <ArrowUpRight className="h-5 w-5 text-dim" aria-hidden="true" />
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-lunar-300">{p.kind}</p>
                <p className="mt-5 flex-1 leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Highlights of ${p.name}`}>
                  {p.fit.map((f) => (
                    <li key={f}>
                      <Pill>{f}</Pill>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}

          <Reveal delay={pathways.length * 80}>
            <SpotlightCard className="flex h-full flex-col border-dashed p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-gradient sm:text-4xl">{morePathways.name}</p>
                <Layers className="h-5 w-5 text-dim" aria-hidden="true" />
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-lunar-300">{morePathways.kind}</p>
              <p className="mt-5 leading-relaxed text-muted">{morePathways.summary}</p>
            </SpotlightCard>
          </Reveal>
        </div>

        <p className="mt-6 text-sm text-dim">
          Descriptions are general summaries, not legal or tax advice. Arrangements vary by company and country.
        </p>
      </Container>
    </Section>
  );
}
