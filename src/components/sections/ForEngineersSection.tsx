import { Check, Star, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

export const engineerBenefits = [
  "Discover relevant engineering opportunities",
  "Earn from the skills you already have",
  "Find roles that fit your experience",
  "Explore remote opportunities",
  "Explore contract and full-time work",
  "Build skills that lead to better-paid work",
  "Develop a long-term career",
  "Find new opportunities as your career evolves",
];

/** "Level up" section: career growth and the income that comes with it. */
export function ForEngineersSection() {
  return (
    <Section id="level-up" labelledBy="engineers-heading" className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              id="engineers-heading"
              eyebrow="Level up"
              title="Your Skills Have Value. Let's Find the Right Opportunity."
              description="Every new skill and every new role is a step up. We help engineers choose opportunities that grow their experience, their responsibility and their earnings — from junior to principal."
            />
            <ul className="mt-9 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {engineerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[0.95rem] text-ink">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lunar-600 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" arrow>
                Talk to us about your next step
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
                <Photo name="levelUp" className="object-[50%_30%]" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night-950/50 via-transparent to-transparent" />
              </div>
              <div aria-hidden="true" className="absolute -left-4 top-10 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line sm:-left-10">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  Level up
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                  <span>Mid</span>
                  <span className="h-px w-5 bg-lunar-400" />
                  <span className="rounded-md bg-lunar-600 px-1.5 py-0.5 font-medium text-white">Senior</span>
                  <span className="h-px w-5 bg-slate-200" />
                  <span className="text-slate-400">Staff</span>
                </div>
                <div className="mt-3 h-1.5 w-40 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-lunar-500 to-glow-400" />
                </div>
              </div>
              <div aria-hidden="true" className="absolute -right-3 bottom-12 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-sm font-semibold text-emerald-800 shadow-lift ring-1 ring-line sm:-right-8">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <TrendingUp className="h-4 w-4" />
                </span>
                Higher income
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
