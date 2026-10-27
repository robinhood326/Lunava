"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const REFERENCE = { name: "New York", zone: "America/New_York" };
const cities = [
  { name: "Mexico City", zone: "America/Mexico_City" },
  { name: "Bogotá", zone: "America/Bogota" },
  { name: "São Paulo", zone: "America/Sao_Paulo" },
  { name: "Buenos Aires", zone: "America/Argentina/Buenos_Aires" },
];

/** Offset of a time zone from UTC, in minutes, at the given instant. */
function offsetMinutes(zone: string, at: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(at);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return Math.round((asUtc - Math.floor(at.getTime() / 1000) * 1000) / 60000);
}

function fmt(totalMinutes: number) {
  const m = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const mm = String(m % 60).padStart(2, "0");
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mm} ${h < 12 ? "AM" : "PM"}`;
}

const inWork = (hour: number) => hour >= 9 && hour < 17;

/** Interactive board: drag the time to see how working days overlap with New York. */
export function TimeZoneBoard() {
  const [now, setNow] = useState<Date | null>(null);
  const [nyMinutes, setNyMinutes] = useState<number | null>(null);
  const [live, setLive] = useState(true);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return <Shell>{<div className="glass h-80 rounded-2xl" />}</Shell>;
  }

  const nyOffset = offsetMinutes(REFERENCE.zone, now);
  const liveNy = (now.getUTCHours() * 60 + now.getUTCMinutes() + nyOffset + 1440) % 1440;
  const ny = live || nyMinutes === null ? liveNy : nyMinutes;

  return (
    <Shell>
      <div className="glass rounded-2xl p-5 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">{REFERENCE.name} · reference</p>
            <p className="mt-1 text-4xl font-semibold tracking-[-0.04em] text-fg tabular-nums sm:text-5xl">{fmt(ny)}</p>
          </div>
          <button
            type="button"
            onClick={() => setLive(true)}
            className={cn(
              "rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] ring-1 ring-inset transition-colors",
              live ? "bg-emerald-600/10 text-emerald-700 ring-emerald-700/30" : "text-muted ring-ink/15 hover:text-fg",
            )}
          >
            {live ? "● Live" : "Back to live"}
          </button>
        </div>

        <label className="mt-6 block">
          <span className="sr-only">Time in New York</span>
          <input
            type="range"
            min={0}
            max={1439}
            step={15}
            value={ny}
            onChange={(e) => {
              setLive(false);
              setNyMinutes(Number(e.target.value));
            }}
            className="h-2 w-full cursor-pointer accent-[#5b4fe4]"
          />
        </label>
        <p className="mt-2 text-xs text-dim">Drag to move the clock. Highlighted hours are 9 AM–5 PM in New York.</p>

        <ul className="mt-8 space-y-5">
          {cities.map((c) => {
            const delta = offsetMinutes(c.zone, now) - nyOffset;
            const local = ny + delta;
            const localHour = Math.floor((((local % 1440) + 1440) % 1440) / 60);
            let shared = 0;
            const cells = Array.from({ length: 24 }, (_, h) => {
              const nyHour = Math.floor((((h * 60 - delta) % 1440) + 1440) % 1440 / 60);
              const us = inWork(nyHour);
              const mine = inWork(h);
              if (us && mine) shared++;
              return { h, us, mine };
            });
            return (
              <li key={c.zone}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-medium text-fg">{c.name}</p>
                  <p className="font-mono text-sm text-muted tabular-nums">{fmt(local)}</p>
                </div>
                <div className="mt-2 flex gap-[3px]" role="img" aria-label={`${shared} hours of shared 9 to 5 working time with New York`}>
                  {cells.map(({ h, us, mine }) => (
                    <span
                      key={h}
                      className={cn(
                        "h-7 flex-1 rounded-[4px] transition-colors",
                        us && mine ? "bg-gradient-to-b from-lunar-400 to-glow-400" : us ? "bg-lunar-500/35" : "bg-ink/[0.06]",
                        h === localHour && "ring-2 ring-fg",
                      )}
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-dim">
                  {shared > 0 ? `${shared} shared hours of a 9–5 day with New York` : "Little overlap with a 9–5 New York day"}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-xs text-dim">Computed live from your device&apos;s clock. Daylight-saving changes shift the overlap by an hour.</p>
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <Section id="timezones" labelledBy="tz-heading">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="tz-heading"
              eyebrow="Try it"
              title={
                <>
                  Your day, <span className="text-gradient">their day.</span>
                </>
              }
              description="Move the clock and watch Latin American working hours line up with New York's. Shared hours are what make real-time collaboration with U.S. teams possible."
            />
          </Reveal>
          <Reveal delay={100}>{children}</Reveal>
        </div>
      </Container>
    </Section>
  );
}
