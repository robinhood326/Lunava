import { CheckCircle2, TrendingUp } from "lucide-react";
import { Photo, photoUrl } from "@/components/ui/Photo";
import { cn } from "@/lib/utils";

/**
 * Hero visual: a real engineer at work, framed by the Lunava orbit motif,
 * with floating moments that tell the story — open to opportunities,
 * getting paid, moving up a level.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[34rem] select-none", className)}>
      {/* Orbit rings */}
      <svg aria-hidden="true" viewBox="0 0 600 600" className="absolute -inset-[12%] h-[124%] w-[124%]">
        <circle cx="300" cy="300" r="290" fill="none" stroke="rgb(112 102 241 / 0.25)" />
        <circle cx="300" cy="300" r="240" fill="none" stroke="rgb(112 102 241 / 0.18)" strokeDasharray="2 7" />
        <g className="origin-center animate-orbit [transform-box:view-box]">
          <circle cx="300" cy="10" r="5" fill="#4cb6ea" />
          <circle cx="300" cy="10" r="12" fill="#4cb6ea" opacity="0.2" />
        </g>
        <g className="origin-center animate-orbit-reverse [transform-box:view-box]">
          <circle cx="60" cy="300" r="4" fill="#8f87f8" />
        </g>
      </svg>
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-lunar-300/50 blur-[90px]" />

      {/* Main photo */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/80">
        <Photo name="heroEngineer" priority sizes="(min-width: 1024px) 34rem, 90vw" className="object-[60%_center]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-lunar-900/25 via-transparent to-transparent" />
      </div>

      {/* Engineer card with real headshot */}
      <div aria-hidden="true" className="glass absolute -left-4 top-[9%] w-56 animate-float rounded-2xl p-3.5 sm:-left-8">
        <div className="flex items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl("headshotMan", 120, "&h=120&crop=faces")}
              alt=""
              width={40}
              height={40}
              decoding="async"
              suppressHydrationWarning
              className="absolute inset-0 h-full w-full object-cover"
            />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">Backend Engineer</p>
            <p className="truncate text-xs text-muted">Go · PostgreSQL · AWS</p>
          </div>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to opportunities
        </p>
      </div>

      {/* Income card */}
      <div aria-hidden="true" className="glass absolute -right-4 top-[46%] w-52 animate-float-slow rounded-2xl p-4 [animation-delay:-4s] sm:-right-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          Contract payment received
        </div>
        <p className="mt-2 font-mono text-2xl font-semibold text-ink">$4,800</p>
        <div className="mt-3 flex items-end gap-1">
          {[30, 42, 38, 55, 68, 82].map((h, i) => (
            <span key={i} className="w-full rounded-sm bg-gradient-to-t from-lunar-500 to-glow-400" style={{ height: `${h * 0.4}px`, opacity: 0.5 + i * 0.1 }} />
          ))}
        </div>
      </div>

      {/* Level up card */}
      <div aria-hidden="true" className="glass absolute -bottom-6 left-[8%] animate-float rounded-2xl px-4 py-3 [animation-delay:-2s]">
        <p className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
          <TrendingUp className="h-3.5 w-3.5 text-glow-500" />
          Level up
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <span>Mid</span>
          <span className="h-px w-5 bg-gradient-to-r from-lunar-400 to-glow-400" />
          <span className="rounded-md bg-gradient-to-r from-lunar-500 to-glow-400 px-1.5 py-0.5 font-medium text-white">Senior</span>
          <span className="h-px w-5 bg-lunar-200" />
          <span className="text-slate-400">Staff</span>
        </div>
      </div>
    </div>
  );
}
