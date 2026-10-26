import { Marquee } from "@/components/ui/Marquee";
import { tickerItems } from "@/lib/data/content";

/** Thin scrolling band of roles, stacks and perks of remote U.S. work. */
export function TickerSection() {
  return (
    <section aria-label="Remote engineering roles and technologies" className="border-y border-white/[0.07] bg-white/[0.015] py-6">
      <Marquee items={tickerItems} label="Remote engineering roles and technologies" />
    </section>
  );
}
