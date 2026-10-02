import { TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import type { PhotoName } from "@/lib/photos";
import { cn } from "@/lib/utils";

interface Stage {
  photo: PhotoName;
  title: string;
  line: string;
  /** Vertical offset on desktop so the cards rise like a staircase. */
  offset: string;
}

const stages: Stage[] = [
  { photo: "progressStart", title: "Starting out", line: "One laptop. Big plans.", offset: "lg:mt-32" },
  { photo: "progressFirstRole", title: "First role", line: "A first real salary.", offset: "lg:mt-24" },
  { photo: "progressGrowing", title: "Growing", line: "Better team. Better pay.", offset: "lg:mt-16" },
  { photo: "progressSenior", title: "Senior", line: "Higher rates. More say.", offset: "lg:mt-8" },
  { photo: "progressThriving", title: "Thriving", line: "Top income. Real freedom.", offset: "lg:mt-0" },
];

/** A rising, five-step photo story of an engineer's growth in skills and income. */
export function ProgressionSection() {
  return (
    <Section id="progression" tone="dark" labelledBy="progression-heading" className="overflow-hidden">
      <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0 opacity-60" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="progression-heading"
            eyebrow="The journey"
            align="center"
            title={
              <>
                From first laptop <span className="text-gradient-ink">to the top of your field.</span>
              </>
            }
            description="Every step up brings new skills, more responsibility and better income."
          />
        </Reveal>

        <ol className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:items-start lg:gap-4">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className={cn(s.offset, i === stages.length - 1 && "sm:col-span-2 lg:col-span-1")}>
              <figure className="glass flex h-full items-center gap-3 overflow-hidden rounded-[var(--radius-card)] p-2 lg:block">
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-[calc(var(--radius-card)-0.375rem)] lg:aspect-[4/5] lg:w-auto">
                  <Photo
                    name={s.photo}
                    sizes="(min-width: 1024px) 20vw, 112px"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 font-mono text-[0.68rem] font-semibold text-lunar-700 backdrop-blur lg:left-3 lg:top-3 lg:px-2.5 lg:py-1">
                    0{i + 1}
                  </span>
                </div>
                <figcaption className="min-w-0 flex-1 pr-2 lg:px-3 lg:pb-3 lg:pt-4">
                  <p className="font-semibold text-ink">{s.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{s.line}</p>
                  {/* Income meter: fills further at each stage */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="sr-only">Income level {i + 1} of {stages.length}</span>
                    <div aria-hidden="true" className="flex flex-1 gap-1">
                      {stages.map((_, j) => (
                        <span
                          key={j}
                          className={cn(
                            "h-1.5 flex-1 rounded-full",
                            j <= i ? "bg-gradient-to-r from-lunar-500 to-glow-400" : "bg-lunar-100",
                          )}
                        />
                      ))}
                    </div>
                    {i === stages.length - 1 && <TrendingUp className="h-4 w-4 text-emerald-500" aria-hidden="true" />}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 text-center text-xs text-slate-500">
          An illustrative journey — every career and income path is different.
        </p>
      </Container>
    </Section>
  );
}
