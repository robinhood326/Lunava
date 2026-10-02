import { Fragment } from "react";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

const journey = ["Junior", "Mid", "Senior", "Staff", "Principal"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <HeroBackdrop />

      {/*
        Layout: 12-column grid — text 7 / visual 5 on small desktops, 6 / 6 from xl up.
        On desktop the hero fills the first screen (the header floats over it) and both
        columns are vertically centered, so nothing sits awkwardly high or low.
      */}
      <Container className="relative grid grid-cols-1 items-center gap-16 pb-20 pt-28 sm:pt-32 lg:min-h-[min(100svh,60rem)] lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-28 xl:gap-12">
        <div className="max-w-2xl lg:col-span-7 xl:col-span-6">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-lunar-700">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lunar-500 to-glow-400" />
            Learn · Start · Grow · Lead
          </p>

          {/* Two lines: "Career." is centered under "Build Your Perfect" (the h1 shrinks to the first line's width). */}
          <h1
            id="hero-heading"
            className="mt-6 w-fit font-semibold leading-[1.04] tracking-[-0.045em] text-ink text-[clamp(2.1rem,10.5vw,3.75rem)] sm:text-6xl lg:text-[3.25rem] xl:text-[4rem]"
          >
            <span className="block whitespace-nowrap">
              <span className="text-gradient-deep">Build Your Perfect</span>
            </span>
            <span className="block text-center">
              <span className="text-gradient">Career.</span>
            </span>
          </h1>

          <p className="mt-6 text-xl font-medium text-muted sm:text-2xl">
            Right role. Real income. Every level.
          </p>

          <div className="mt-10">
            <Button href="/contact" size="lg" arrow>
              Start Your Journey
            </Button>
          </div>

          {/* The journey, at a glance */}
          <ol aria-label="Career journey" className="glass mt-12 flex max-w-2xl items-center sm:mt-14 gap-1 rounded-2xl p-1.5 sm:gap-2.5 sm:rounded-3xl sm:p-3">
            {journey.map((step, i) => (
              <Fragment key={step}>
                {i > 0 && (
                  <li aria-hidden="true" className="h-0.5 min-w-2 flex-1 rounded-full bg-gradient-to-r from-lunar-300 to-glow-300" />
                )}
                <li
                  className={
                    i === journey.length - 1
                      ? "rounded-xl bg-gradient-to-r from-lunar-500 to-glow-400 px-2 py-2 text-[clamp(0.68rem,3.4vw,0.8rem)] font-semibold text-white shadow-soft sm:rounded-2xl sm:px-5 sm:py-2.5 sm:text-base lg:px-3.5 lg:text-sm xl:px-5 xl:text-[1.05rem]"
                      : "rounded-xl px-1 py-2 text-[clamp(0.68rem,3.4vw,0.8rem)] font-medium text-ink/70 sm:px-2.5 sm:py-2.5 sm:text-base lg:px-1.5 lg:text-sm xl:px-2.5 xl:text-[1.05rem]"
                  }
                >
                  {step}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>

        <div className="w-full lg:col-span-5 xl:col-span-6">
          <HeroVisual className="mb-6 max-w-[22rem] sm:max-w-[26rem] lg:mb-0 lg:mr-8 lg:max-w-[28rem] xl:max-w-[30rem] 2xl:max-w-[33rem]" />
        </div>
      </Container>
    </section>
  );
}

/** Extra soft color fields behind the hero (on top of the site-wide ambience). */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid-dark mask-radial absolute inset-0 opacity-70" />
      <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] animate-gradient rounded-full bg-lunar-200/50 blur-[120px]" />
      <div className="absolute -right-24 top-32 h-[26rem] w-[26rem] animate-gradient rounded-full bg-glow-300/30 blur-[120px] [animation-delay:-9s]" />
    </div>
  );
}
