import { EngineerIllustration, engineers } from "@/components/brand/EngineerIllustration";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";

/** Row of illustrated engineers. Decorative; the people are not real. */
export function TeamStrip() {
  return (
    <section aria-label="Illustration of software engineers" className="pb-16 sm:pb-24">
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {engineers.map((e, i) => (
            <li key={e.label}>
              <Reveal delay={i * 80} className="glass overflow-hidden rounded-[1.5rem] p-3">
                <EngineerIllustration engineer={e} idPrefix={`eng${i}`} />
                <p className="px-2 pb-2 pt-3 font-mono text-xs uppercase tracking-[0.14em] text-dim">{e.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-dim">Illustrations. Not real people.</p>
      </Container>
    </section>
  );
}
