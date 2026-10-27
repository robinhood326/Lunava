import { Plus } from "lucide-react";
import type { FaqEntry } from "@/lib/data/content";

/** Accessible FAQ built on native <details>/<summary> — works without JavaScript. */
export function Faq({ items }: { items: FaqEntry[] }) {
  return (
    <div className="divide-y divide-fg/20 border-y border-fg">
      {items.map((item) => (
        <details key={item.question} className="group px-5 sm:px-7 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-fg outline-none focus-visible:text-lunar-300">
            {item.question}
            <Plus
              className="h-5 w-5 shrink-0 text-dim transition-transform duration-200 group-open:rotate-45 group-open:text-glow-400"
              aria-hidden="true"
            />
          </summary>
          <p className="-mt-1 pb-6 pr-8 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
