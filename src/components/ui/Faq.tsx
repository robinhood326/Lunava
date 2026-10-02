import { Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

/** Accessible FAQ built on native <details>/<summary> — works without JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-[var(--radius-card)] glass">
      {items.map((item) => (
        <details key={item.question} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-ink outline-none focus-visible:text-lunar-700">
            {item.question}
            <Plus
              className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45 group-open:text-lunar-600"
              aria-hidden="true"
            />
          </summary>
          <p className="-mt-1 pb-6 pr-10 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
