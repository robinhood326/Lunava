import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <Container className="relative grid grid-cols-1 items-center gap-16 pb-20 pt-36 sm:pt-40 lg:min-h-[min(100svh,58rem)] lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-36">
        <div className="lg:col-span-7">
          <Link
            href="/opportunities"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pl-2 pr-3.5 text-sm text-muted backdrop-blur transition-colors hover:border-white/25 hover:text-fg"
          >
            <span className="rounded-full bg-gradient-to-r from-lunar-500 to-glow-400 px-2.5 py-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-white">
              New
            </span>
            Remote roles with U.S. companies
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          <h1
            id="hero-heading"
            className="mt-7 text-balance text-[clamp(2.6rem,9vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-fade sm:text-6xl lg:text-[4.8rem] xl:text-[6rem]"
          >
            Aim higher, <span className="text-gradient">from where you live.</span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
            Lunava is a <strong className="font-medium text-fg">remote software engineer consultancy</strong>. We help LATAM-based
            developers find, prepare for and land remote roles with companies in the United States.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" arrow>
              Get matched
            </Button>
            <Button href="/opportunities" size="lg" variant="secondary">
              Explore roles
            </Button>
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-dim">
            <span>Independent consultancy</span>
            <span aria-hidden="true">/</span>
            <span>No guarantees, just honest guidance</span>
            <span aria-hidden="true">/</span>
            <span>Built for LATAM engineers</span>
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
