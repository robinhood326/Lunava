import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const rubric = ["Correct output", "Handles edge cases", "Explains complexity"];

/**
 * Illustrative mock of an expert comparing two model responses — the core
 * task in AI training. Pure markup + CSS; nothing here is real data.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* glow behind the window */}
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-lunar-500/30 via-transparent to-glow-400/20 blur-3xl" />

      <div role="img" aria-label="Illustration of an expert comparing two AI responses and choosing the better one" className="glass overflow-hidden rounded-[1.75rem] shadow-glow">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">Response comparison</span>
          <span className="w-10" aria-hidden="true" />
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          {/* prompt */}
          <div className="rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-inset ring-white/[0.07]">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-lunar-300">Prompt</p>
            <p className="mt-1.5 text-[0.82rem] leading-relaxed text-fg/90">
              Write a function that merges overlapping intervals and explain its time complexity.
            </p>
          </div>

          {/* responses */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-inset ring-white/[0.07]">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-dim">Response A</p>
              <div className="mt-3 space-y-2" aria-hidden="true">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              </div>
              <p className="mt-3 rounded-md bg-rose-500/10 px-2 py-1 font-mono text-[0.62rem] text-rose-300">misses empty input</p>
            </div>
            <div className="rounded-xl bg-lunar-500/[0.12] p-3 ring-1 ring-inset ring-lunar-400/50">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-lunar-200">Response B</p>
              <div className="mt-3 space-y-2" aria-hidden="true">
                <div className="h-1.5 w-full rounded-full bg-lunar-300/40" />
                <div className="h-1.5 w-11/12 rounded-full bg-lunar-300/40" />
                <div className="h-1.5 w-4/5 rounded-full bg-lunar-300/40" />
                <div className="h-1.5 w-2/3 rounded-full bg-lunar-300/40" />
              </div>
              <p className="mt-3 rounded-md bg-emerald-400/10 px-2 py-1 font-mono text-[0.62rem] text-emerald-300">O(n log n) ✓</p>
            </div>
          </div>

          {/* rubric */}
          <ul className="space-y-2">
            {rubric.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.8rem] text-muted">
                <span className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* verdict */}
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs text-muted ring-1 ring-inset ring-white/10">A better</span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-bg shadow-[0_0_24px_-4px_rgb(143_135_248/0.9)]">B better</span>
            <span className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs text-muted ring-1 ring-inset ring-white/10">Tie</span>
          </div>

          {/* rationale */}
          <p className="rounded-xl bg-black/30 px-3.5 py-3 font-mono text-[0.72rem] leading-relaxed text-muted ring-1 ring-inset ring-white/[0.06]">
            <span className="text-glow-400">rationale</span> › B sorts first, merges in one pass and handles empty input
            <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-blink bg-glow-400" aria-hidden="true" />
          </p>
        </div>
      </div>

      {/* floating chips */}
      <div aria-hidden="true" className="absolute -left-3 top-16 hidden animate-float items-center gap-2 rounded-full border border-white/12 bg-bg/80 px-3.5 py-2 text-xs text-fg shadow-lift backdrop-blur-xl sm:flex lg:-left-10">
        <Sparkles className="h-3.5 w-3.5 text-lunar-300" /> Expert-reviewed
      </div>
      <div aria-hidden="true" className="absolute -bottom-4 -right-2 hidden animate-float items-center gap-2 rounded-full border border-white/12 bg-bg/80 px-3.5 py-2 font-mono text-xs text-fg shadow-lift backdrop-blur-xl [animation-delay:-4s] sm:flex lg:-right-8">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgb(52_211_153/0.6)]" /> RLHF · code eval
      </div>
      <p className="mt-4 pl-1 text-left font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">Illustrative example</p>
    </div>
  );
}
