import { LogoMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

/** Short closing call to action used at the end of each page (except Contact). */
export function PageCTA() {
  return (
    <section aria-labelledby="page-cta-heading" className="py-16 sm:py-20">
      <Container>
        <Reveal className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lunar-200/60 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-glow-300/40 blur-3xl" />
          <div className="relative">
            <LogoMark idPrefix="cta" className="mx-auto h-12 w-12" />
            <h2 id="page-cta-heading" className="mt-6 text-balance text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl">
              Your Next Opportunity <span className="text-gradient-ink">Starts Here.</span>
            </h2>
            <p className="mt-3 text-lg text-muted">Tell us your skills and goals.</p>
            <Button href="/contact" size="lg" className="mt-8" arrow>
              Contact Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
