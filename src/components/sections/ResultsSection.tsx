import { Reveal } from "@/components/motion/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import type { PhotoName } from "@/lib/photos";
import { cn } from "@/lib/utils";

interface Outcome {
  photo: PhotoName;
  tag: string;
  title: string;
  body: string;
  className?: string;
}

const outcomes: Outcome[] = [
  {
    photo: "greatTeam",
    tag: "Growth",
    title: "Joining a team that helps you grow",
    body: "The right team turns a job into a career — mentors, real ownership and people who celebrate your wins.",
    className: "sm:col-span-2 lg:row-span-2",
  },
  {
    photo: "firstRole",
    tag: "First role",
    title: "Landing a first engineering job",
    body: "From learning to earning.",
  },
  {
    photo: "higherIncome",
    tag: "Income",
    title: "Earning more from your skills",
    body: "Better-paid roles and contracts.",
  },
  {
    photo: "promotion",
    tag: "Level up",
    title: "Moving up a level",
    body: "More scope, more responsibility.",
  },
  {
    photo: "remoteWork",
    tag: "Freedom",
    title: "Working from anywhere",
    body: "Remote work that fits your life.",
  },
];

/** The outcomes Lunava works toward with engineers, shown through photography. */
export function ResultsSection() {
  return (
    <Section id="results" labelledBy="results-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="results-heading"
            eyebrow="What engineers achieve"
            title={
              <>
                <span className="text-gradient-ink">Income, growth and a career you own.</span>
              </>
            }
            description="This is what the right opportunity can lead to — and what we work toward with every engineer we help."
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 70} className={cn("min-h-[17rem]", o.className)}>
              <figure className="group relative h-full overflow-hidden rounded-[var(--radius-card)] shadow-soft">
                <Photo
                  name={o.photo}
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider backdrop-blur">
                    {o.tag}
                  </span>
                  <p className={cn("mt-3 font-semibold leading-snug", i === 0 ? "text-2xl" : "text-lg")}>{o.title}</p>
                  <p className="mt-1 text-sm text-slate-200">{o.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
