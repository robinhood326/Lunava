import { Reveal } from "@/components/motion/Reveal";
import { Container, IconTile, Pill, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { roles } from "@/lib/data/content";
import { cn } from "@/lib/utils";

/** Column spans on the 6-column bento grid (md+): rows of 4+2, 3+3 and 2+4. */
const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-4"];

/** Bento grid: the engineering roles U.S. companies hire for. */
export function RolesSection({ id = "roles" }: { id?: string }) {
  return (
    <Section id={id} labelledBy="roles-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="roles-heading"
            eyebrow="The roles"
            title={
              <>
                Your skills are <span className="text-gradient">in demand.</span>
              </>
            }
            description="U.S. teams are looking for engineers across the stack. These are the roles we help LATAM developers pursue."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {roles.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 80} className={cn(spans[i])}>
              <SpotlightCard className="flex h-full flex-col p-7">
                <IconTile icon={w.icon} />
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-fg">{w.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{w.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Common technologies">
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
