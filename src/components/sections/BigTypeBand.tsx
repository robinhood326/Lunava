/** Giant outlined type that drifts sideways in opposite directions. Decorative. */
const rows = [
  { words: ["REMOTE", "U.S. TEAMS", "LATAM", "ENGINEERS"], reverse: false },
  { words: ["YOUR STACK", "THEIR HOURS", "ONE CAREER", "GROW"], reverse: true },
];

export function BigTypeBand() {
  return (
    <section aria-hidden="true" className="overflow-hidden py-10 sm:py-16">
      <div className="space-y-2 sm:space-y-4">
        {rows.map((row, r) => (
          <div key={r} className="mask-edges-x overflow-hidden">
            <div className={`marquee-track flex w-max ${row.reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0">
                  {row.words.map((w, i) => (
                    <span
                      key={w}
                      className={`px-5 display text-[clamp(3.5rem,11vw,9rem)] leading-none sm:px-8 ${
                        (i + r) % 2 === 0 ? "text-outline" : "text-fg"
                      }`}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
