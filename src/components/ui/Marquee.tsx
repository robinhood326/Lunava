import { Sparkle } from "lucide-react";

/** Endless horizontal ticker. The list is rendered twice so the loop is seamless (second copy is hidden from assistive tech). */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  return (
    <div role="group" aria-label={label} className="mask-edges-x group overflow-hidden">
      <div className="marquee-track flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={item} className="flex items-center">
                <span className="px-6 font-mono text-sm uppercase tracking-[0.16em] text-muted sm:px-8">{item}</span>
                <Sparkle aria-hidden="true" className="h-3.5 w-3.5 text-lunar-400/70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
