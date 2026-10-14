import { Marquee } from "@/components/ui/Marquee";
import { tickerItems } from "@/lib/data/content";

/** Thin scrolling band of the kinds of work experts do. */
export function TickerSection() {
  return (
    <section aria-label="Kinds of AI training work" className="border-y border-white/[0.07] bg-white/[0.015] py-6">
      <Marquee items={tickerItems} label="Kinds of AI training work" />
    </section>
  );
}
