import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/primitives";
import { roleAreas } from "@/lib/data/opportunities";

const workTypes = ["Full-time", "Contract", "Part-time", "Internship", "Remote", "Hybrid", "On-site"];

export function OpportunityTypesSection() {
  return (
    <Section id="opportunities" labelledBy="opportunity-types-heading">
      <Container>
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="opportunity-types-heading"
            eyebrow="Opportunities"
            title="Find Your Fit."
            description="Every discipline. Every way to work."
          />
          <Button href="/contact" variant="secondary" className="shrink-0" arrow>
            Talk to us about opportunities
          </Button>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {roleAreas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={(i % 5) * 60}>
              <div className="card-hairline h-full rounded-[var(--radius-card)] glass p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <IconTile icon={area.icon} />
                <h3 className="mt-4 font-semibold text-ink">{area.title}</h3>
                <ul className="mt-2 space-y-1">
                  {area.roles.map((r) => (
                    <li key={r} className="text-sm text-muted">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm font-medium text-ink">Ways to work:</span>
          {workTypes.map((t) => (
            <span key={t} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-muted ring-1 ring-inset ring-line">
              {t}
            </span>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
