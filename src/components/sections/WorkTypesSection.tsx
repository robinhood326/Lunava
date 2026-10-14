import { Reveal } from "@/components/motion/Reveal";
import { Container, IconTile, Pill, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { workTypes } from "@/lib/data/content";
import { cn } from "@/lib/utils";

/** Column spans on the 6-column bento grid (md+): rows of 4+2, 3+3 and 2+4. */
const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-4"];

/** Bento grid: the main kinds of AI training work. */
export function WorkTypesSection({ id = "work" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="work-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="work-heading"
            eyebrow="The work"
            title={
              <>
                Your judgement is <span className="text-gradient">the training signal.</span>
              </>
            }
            description="Models get better when skilled people check, rank, correct and challenge them. These are the main kinds of work you could do."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {workTypes.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 80} className={cn(spans[i])}>
              <SpotlightCard className="flex h-full flex-col p-7">
                <IconTile icon={w.icon} />
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-fg">{w.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{w.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Typical tasks">
                  {w.tags.map((t) => (
                    <li key={t}>
                      <Pill>{t}</Pill>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
