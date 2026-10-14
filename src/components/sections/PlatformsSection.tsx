import { ArrowUpRight, Layers } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Pill, Section, SectionHeading, Container } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { morePlatforms, platforms } from "@/lib/data/content";

/** Where the work is: the expert marketplaces Lunava helps people get onto. */
export function PlatformsSection({ id = "platforms" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="platforms-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="platforms-heading"
            eyebrow="Platforms"
            title={
              <>
                One consultancy. <span className="text-gradient">Many doors.</span>
              </>
            }
            description="AI labs hire experts through marketplaces and networks. We help you pick the right ones, apply well and be ready for what comes next."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-fg sm:text-4xl">{p.name}</p>
                  <ArrowUpRight className="h-5 w-5 text-dim" aria-hidden="true" />
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-lunar-300">{p.kind}</p>
                <p className="mt-5 flex-1 leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Roles often placed on ${p.name}`}>
                  {p.fit.map((f) => (
                    <li key={f}>
                      <Pill>{f}</Pill>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}

          <Reveal delay={platforms.length * 80}>
            <SpotlightCard className="flex h-full flex-col border-dashed p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-gradient sm:text-4xl">{morePlatforms.name}</p>
                <Layers className="h-5 w-5 text-dim" aria-hidden="true" />
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-lunar-300">{morePlatforms.kind}</p>
              <p className="mt-5 leading-relaxed text-muted">{morePlatforms.summary}</p>
            </SpotlightCard>
          </Reveal>
        </div>

        <p className="mt-6 text-sm text-dim">
          Descriptions are general summaries. Lunava is independent and not affiliated with, or endorsed by, any platform listed.
        </p>
      </Container>
    </Section>
  );
}
