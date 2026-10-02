import type { LucideIcon } from "lucide-react";
import type { CareerStageInfo } from "@/lib/data/career";
import { cn } from "@/lib/utils";

interface CareerStageCardProps {
  stage: CareerStageInfo;
  icon: LucideIcon;
  index: number;
  className?: string;
}

/** One of the four career stages. */
export function CareerStageCard({ stage, icon: Icon, index, className }: CareerStageCardProps) {
  return (
    <article
      className={cn(
        "card-hairline group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] glass p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:p-7",
        className,
      )}
    >
      {/* Rising bars: a small visual of progression that fills further at each stage */}
      <div aria-hidden="true" className="mb-8 flex h-14 items-end gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "w-3 rounded-full transition-all duration-500",
              i <= index ? "bg-gradient-to-t from-lunar-600 to-lunar-300" : "bg-slate-100",
              i <= index && "group-hover:to-glow-300",
            )}
            style={{ height: `${28 + i * 24}%` }}
          />
        ))}
        <span className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lunar-500 to-glow-400 text-white shadow-soft">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>

      <p className="font-mono text-xs text-slate-400">0{index + 1}</p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-ink">{stage.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{stage.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Who ${stage.title} is for`}>
        {stage.audience.map((a) => (
          <li key={a} className="rounded-full bg-white/70 px-2.5 py-1 text-xs text-muted ring-1 ring-inset ring-white">
            {a}
          </li>
        ))}
      </ul>
    </article>
  );
}
