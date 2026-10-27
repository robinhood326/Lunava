import { ArrowUpRight, Check, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

const line1 = ["Aim", "higher,"];
const line2 = ["from", "where", "you", "live."];

function Words({ words, start, className }: { words: string[]; start: number; className?: string }) {
  return (
    <>
      {words.map((w, i) => (
        <span key={w + i} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <span className={`word inline-block ${className ?? ""}`} style={{ animationDelay: `${(start + i) * 90}ms` }}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate">
      <Container className="relative pb-10 pt-32 text-center sm:pt-40 lg:pb-16">
        <a
          href="#pay"
          className="group mx-auto inline-flex items-center gap-2.5 rounded-full border border-fg/10 bg-surface/80 py-1.5 pl-2 pr-4 text-sm text-muted shadow-[var(--shadow-lift)] backdrop-blur transition-colors hover:text-fg"
        >
          <span className="btn-glow rounded-full px-2.5 py-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-white">New</span>
          See what U.S. teams pay engineers
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>

        <h1 id="hero-heading" className="display mx-auto mt-8 max-w-5xl text-balance text-[clamp(3rem,9.5vw,8.2rem)]">
          <Words words={line1} start={0} />
          <br />
          <Words words={line2} start={line1.length} className="text-gradient" />
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
          Lunava is a <strong className="font-medium text-fg">remote software engineer consultancy</strong>. We help LATAM-based developers find,
          prepare for and land remote roles with companies in the United States.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" arrow>
            Get matched
          </Button>
          <Button href="/opportunities" size="lg" variant="secondary">
            Explore roles
          </Button>
        </div>
        <p className="mt-6 font-mono text-xs text-dim">Independent consultancy · No guarantees, just honest guidance</p>
      </Container>

      {/* Stage: photo with floating product cards */}
      <Container className="pb-16 lg:pb-24">
        <div className="relative mx-auto max-w-6xl">
          <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-lunar-400/30 via-glow-400/15 to-pink-400/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-fg/10 shadow-[var(--shadow-glow)] sm:rounded-[2.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/video-call.jpg"
              alt="A person on a video call with a distributed team"
              width={1000}
              height={667}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
              style={{ objectPosition: "40% 45%" }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <p className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.14em] text-white/90 sm:bottom-6 sm:left-8">
              Live with U.S. teams · Stock photo
            </p>
          </div>

          {/* Role match card */}
          <div className="glass absolute -left-2 top-6 hidden w-[17rem] animate-float rounded-3xl p-4 sm:block lg:-left-10 lg:top-12">
            <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-dim">
              <Sparkles className="h-3.5 w-3.5 text-lunar-400" aria-hidden="true" /> Role match
            </p>
            <p className="mt-2 text-sm font-semibold text-fg">Backend Engineer · 6 yrs</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
              <MapPin className="h-3 w-3 text-glow-400" aria-hidden="true" /> Latin America · UTC−5
            </p>
            <ul className="mt-3 space-y-2">
              {[
                ["Senior Backend Engineer", "92%"],
                ["Full-stack Engineer", "86%"],
              ].map(([role, score]) => (
                <li key={role} className="flex items-center justify-between rounded-xl bg-fg/[0.05] px-3 py-2 text-xs">
                  <span className="text-fg">{role}</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-300">{score}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Overlap card */}
          <div className="glass absolute -right-2 bottom-10 hidden w-60 animate-float rounded-3xl p-4 [animation-delay:-4s] sm:block lg:-right-10 lg:bottom-16">
            <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-dim">
              <Clock className="h-3.5 w-3.5 text-glow-400" aria-hidden="true" /> Shared hours
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-fg">
              6<span className="text-base font-medium text-muted"> h / day</span>
            </p>
            <p className="text-xs text-muted">Mexico City ↔ New York</p>
            <div className="mt-3 flex gap-[3px]" aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i} className={`h-5 flex-1 rounded-[4px] ${i >= 3 && i < 9 ? "bg-gradient-to-b from-lunar-400 to-glow-400" : "bg-fg/10"}`} />
              ))}
            </div>
          </div>

          <div className="glass absolute right-6 top-6 hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-fg sm:flex lg:right-12">
            <Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={3} aria-hidden="true" /> Paid in USD
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-dim">Cards are illustrative examples, not real data.</p>
      </Container>
    </section>
  );
}
