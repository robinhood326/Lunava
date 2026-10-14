import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/brand/GithubIcon";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { pipeline } from "@/lib/data/content";
import { siteConfig } from "@/lib/site";

/** Explains — and shows — that this site is a static React site published from GitHub. */
export function StaticSiteSection({ id = "built", compact = false }: { id?: string; compact?: boolean }) {
  return (
    <Section id={id} labelledBy="static-heading" className={compact ? "py-16 sm:py-20" : undefined}>
      <Container>
        <Reveal>
          <div className="glass relative isolate overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
            <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-glow-400/15 blur-[100px]" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-16 -z-10 h-80 w-80 rounded-full bg-lunar-500/20 blur-[100px]" />

            <SectionHeading
              id="static-heading"
              eyebrow="Built to last"
              title={
                <>
                  A static site, <span className="text-gradient">written in React.</span>
                </>
              }
              description="Every page is pre-built into plain HTML, CSS and JavaScript and published straight from GitHub. No server and no database to run, which makes it fast, secure by design and simple to keep online."
            />

            <ol className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-3">
              {pipeline.map((step, i) => (
                <PipelineStep key={step.title} step={step} isLast={i === pipeline.length - 1} />
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-fg underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-lunar-300"
              >
                <GithubIcon /> View the source on GitHub
              </a>
              <span>Free HTTPS · custom domain · auto-deploys on every push</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function PipelineStep({ step, isLast }: { step: (typeof pipeline)[number]; isLast: boolean }) {
  return (
    <>
      <li className="rounded-2xl border border-white/10 bg-black/25 p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-lunar-300">{step.label}</p>
        <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-fg">{step.title}</p>
        <p className="mt-1 font-mono text-xs text-muted">{step.detail}</p>
      </li>
      {!isLast && (
        <li aria-hidden="true" className="flex items-center justify-center lg:px-1">
          <ArrowRight className="hidden h-4 w-4 text-lunar-300 lg:block" />
          <span className="flow-line-y block h-6 w-0.5 lg:hidden" />
        </li>
      )}
    </>
  );
}
