import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";

/** Closing call to action: a big gradient panel. */
export function PageCTA() {
  return (
    <section aria-labelledby="page-cta-heading" className="py-16 sm:py-24">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white sm:rounded-[2.75rem] sm:px-12 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-[#5a4cf0] via-[#4b6bf5] to-[#16b6e3]" />
          <div aria-hidden="true" className="absolute -left-20 -top-24 -z-10 h-80 w-80 rounded-full bg-pink-400/50 blur-[90px] [animation:drift_18s_ease-in-out_infinite]" />
          <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-20 invert" />
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">Next step</p>
          <h2 id="page-cta-heading" className="mx-auto mt-5 max-w-3xl text-balance text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1] tracking-[-0.045em]">
            Ready for your next U.S. remote role?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/80">Tell us about your experience. We&apos;ll tell you where it fits.</p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-[#14123a] shadow-[0_20px_50px_-15px_rgb(0_0_0/0.5)] transition-transform hover:-translate-y-0.5"
          >
            Get matched
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
