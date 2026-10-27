import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";

/** Closing call to action used at the end of each page (except Contact): one big serif line. */
export function PageCTA() {
  return (
    <section aria-labelledby="page-cta-heading" className="border-t border-fg py-20 sm:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">Next step</p>
          <h2 id="page-cta-heading" className="display mt-6 max-w-5xl text-balance text-[clamp(3rem,9vw,8.5rem)]">
            Ready for your next <span className="text-gradient">U.S. remote role?</span>
          </h2>
          <Link
            href="/contact"
            className="group mt-12 inline-flex items-center gap-3 border-b-2 border-fg pb-2 text-2xl font-medium text-fg transition-colors hover:border-lunar-500 hover:text-lunar-500 sm:text-3xl"
          >
            Tell us about your experience
            <ArrowUpRight className="h-7 w-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
