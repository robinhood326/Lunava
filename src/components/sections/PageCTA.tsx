import { LogoMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

/** Closing call to action used at the end of each page (except Contact). */
export function PageCTA() {
  return (
    <section aria-labelledby="page-cta-heading" className="py-16 sm:py-24">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-lunar-600/25 via-lunar-600/5 to-transparent" />
          <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-60" />
          <div aria-hidden="true" className="absolute inset-x-0 -top-px mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-lunar-300 to-transparent" />
          <LogoMark idPrefix="cta" className="mx-auto h-14 w-14" />
          <h2 id="page-cta-heading" className="mx-auto mt-8 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] text-fade sm:text-5xl">
            Ready for your next U.S. remote role?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-muted">Tell us about your experience. We&apos;ll tell you where it fits.</p>
          <Button href="/contact" size="lg" className="mt-10" arrow>
            Get matched
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
