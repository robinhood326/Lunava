import { Compass, Eye, Hourglass, UsersRound } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureCard, type Feature } from "@/components/ui/FeatureCard";
import { Photo } from "@/components/ui/Photo";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const values: Feature[] = [
  { icon: UsersRound, title: "Engineers first", description: "Every decision starts with one question: does this make things better for the engineer?" },
  { icon: Eye, title: "Honest by default", description: "Clear information, honest expectations about pay, and no promises we can't keep." },
  { icon: Hourglass, title: "Long-term thinking", description: "We measure success in careers built, not clicks on a listing." },
  { icon: Compass, title: "Open to every path", description: "Degrees, bootcamps, self-taught, career changers — skills count, wherever they came from." },
];

const pillars = [
  {
    phase: "01 · Opportunity",
    title: "Find work that fits",
    items: ["Roles across every engineering discipline", "Full-time, contract, part-time and remote", "From internships to principal positions"],
  },
  {
    phase: "02 · Income",
    title: "Earn from your skills",
    items: ["Paid work that values what you know", "Clear expectations on compensation", "Extra income through contract and flexible work"],
    active: true,
  },
  {
    phase: "03 · Career",
    title: "Keep leveling up",
    items: ["Opportunities that build new skills", "A path from junior to leadership", "Support at every stage, not just one search"],
  },
];

export function AboutSection() {
  return (
    <>
      <Section id="about" tone="white" labelledBy="about-heading" className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                id="about-heading"
                eyebrow="About Lunava"
                title={
                  <>
                    Helping engineers turn skills into <span className="text-gradient-ink">sustainable careers.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Lunava is a technology careers company for software engineers. Engineering careers rarely move in a
                  straight line — people switch stacks, move from contract to full-time, change countries, specialize
                  and step into leadership. Too often, every move starts from scratch.
                </p>
                <p>
                  We think that&apos;s backwards. Your skills, experience and goals should travel with you. We help
                  engineers discover opportunities, earn from what they know and keep building a career over the long
                  term.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                <Photo name="teamCollaborating" />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-24">
            <SectionHeading
              eyebrow="What we do"
              title="Opportunity. Income. Career."
              description="Three things we help every engineer with — whether they're looking for a first role or the next big step."
              as="h3"
            />
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {pillars.map((r, i) => (
              <Reveal as="li" key={r.phase} delay={i * 100}>
                <div
                  className={cn(
                    "h-full rounded-[var(--radius-card)] p-7",
                    r.active ? "bg-gradient-to-br from-lunar-500 to-glow-400 text-white shadow-glow" : "glass",
                  )}
                >
                  <p className={cn("font-mono text-xs uppercase tracking-[0.16em]", r.active ? "text-white/80" : "text-lunar-600")}>
                    {r.phase}
                  </p>
                  <h3 className={cn("mt-3 text-xl font-semibold", r.active ? "text-white" : "text-ink")}>{r.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {r.items.map((item) => (
                      <li key={item} className={cn("flex gap-3 text-[0.95rem]", r.active ? "text-white/90" : "text-muted")}>
                        <span aria-hidden="true" className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", r.active ? "bg-white" : "bg-lunar-400")} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="values-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <LogoMark idPrefix="about" className="h-12 w-12" />
              <Eyebrow className="mt-8">The name</Eyebrow>
              <h3 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                Careers have phases. The direction is what matters.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Lunava takes its name from <em>luna</em>. The moon moves through phases — new, growing, full — but it
                keeps moving, and it&apos;s always there. An engineering career is similar: learning, starting,
                growing, specializing, leading. Our mark is a crescent with a point of light rising ahead of it — the
                next opportunity, always within reach.
              </p>
            </Reveal>
            <div>
              <Reveal>
                <h3 id="values-heading" className="text-xl font-semibold text-ink">
                  What we believe
                </h3>
              </Reveal>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {values.map((v, i) => (
                  <Reveal as="li" key={v.title} delay={i * 80}>
                    <FeatureCard feature={v} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
