import { Check, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const stack = ["TypeScript", "Node.js", "AWS", "PostgreSQL"];

const matches = [
  { role: "Senior Backend Engineer", meta: "Fintech · Remote (U.S.)", score: "92%", featured: true },
  { role: "Full-stack Engineer", meta: "SaaS · Remote (U.S.)", score: "86%", featured: false },
];

/**
 * Illustrative mock of an engineer's profile matched to remote U.S. roles.
 * Pure markup + CSS; nothing here is real data.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* glow behind the window */}
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-lunar-500/30 via-transparent to-glow-400/20 blur-3xl" />

      <div role="img" aria-label="Illustration of a LATAM software engineer's profile matched to remote roles at U.S. companies" className="glass overflow-hidden rounded-[1.75rem] shadow-glow">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">Role match</span>
          <span className="w-10" aria-hidden="true" />
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          {/* profile */}
          <div className="rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-inset ring-white/[0.07]">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-lunar-300">Engineer profile</p>
            <p className="mt-1.5 text-[0.92rem] font-medium text-fg">Backend Engineer · 6 years</p>
            <p className="mt-1 flex items-center gap-1.5 text-[0.78rem] text-muted">
              <MapPin className="h-3.5 w-3.5 text-glow-400" aria-hidden="true" /> Latin America · UTC−5 · overlaps U.S. hours
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <li key={s} className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[0.65rem] text-muted ring-1 ring-inset ring-white/10">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* matches */}
          <ul className="space-y-3">
            {matches.map((m) => (
              <li
                key={m.role}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl p-3 ring-1 ring-inset",
                  m.featured ? "bg-lunar-500/[0.12] ring-lunar-400/50" : "bg-white/[0.03] ring-white/[0.07]",
                )}
              >
                <div className="min-w-0">
                  <p className="truncate text-[0.85rem] font-medium text-fg">{m.role}</p>
                  <p className="mt-0.5 text-[0.72rem] text-muted">{m.meta}</p>
                </div>
                <span className="rounded-md bg-emerald-400/10 px-2 py-1 font-mono text-[0.68rem] text-emerald-300">{m.score} fit</span>
              </li>
            ))}
          </ul>

          {/* checklist */}
          <ul className="space-y-2">
            {["Résumé tuned for U.S. recruiters", "Mock technical interview done", "Offer reviewed"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.8rem] text-muted">
                <span className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* floating chips */}
      <div aria-hidden="true" className="absolute -left-3 top-16 hidden animate-float items-center gap-2 rounded-full border border-white/12 bg-bg/80 px-3.5 py-2 text-xs text-fg shadow-lift backdrop-blur-xl sm:flex lg:-left-10">
        <Sparkles className="h-3.5 w-3.5 text-lunar-300" /> Paid in USD
      </div>
      <div aria-hidden="true" className="absolute -bottom-4 -right-2 hidden animate-float items-center gap-2 rounded-full border border-white/12 bg-bg/80 px-3.5 py-2 font-mono text-xs text-fg shadow-lift backdrop-blur-xl [animation-delay:-4s] sm:flex lg:-right-8">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgb(52_211_153/0.6)]" /> Remote · U.S. teams
      </div>
      <p className="mt-4 pl-1 text-left font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">Illustrative example</p>
    </div>
  );
}
