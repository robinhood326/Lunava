import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

interface City {
  name: string;
  x: number;
  y: number;
  zone?: string;
}

/** Positions are an equirectangular projection of real coordinates, drawn as a stylised dot map. */
const us: City[] = [
  { name: "San Francisco", x: 23, y: 71 },
  { name: "Austin", x: 243, y: 123 },
  { name: "New York", x: 453, y: 51 },
];

const latam: (City & { hub: number })[] = [
  { name: "Mexico City", x: 231, y: 200, zone: "UTC−6", hub: 1 },
  { name: "Bogotá", x: 452, y: 302, zone: "UTC−5", hub: 2 },
  { name: "São Paulo", x: 697, y: 498, zone: "UTC−3", hub: 2 },
  { name: "Buenos Aires", x: 592, y: 575, zone: "UTC−3", hub: 1 },
];

const dots = Array.from({ length: 22 * 16 }, (_, i) => ({ x: 20 + (i % 22) * 36, y: 20 + Math.floor(i / 22) * 38 }));

function arc(a: City, b: City) {
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - Math.abs(a.x - b.x) * 0.18 - 40;
  return `M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`;
}

/** Illustration of LATAM cities linked to U.S. hubs, with a note on time-zone overlap. */
export function ConnectionSection() {
  return (
    <Section id="connection" labelledBy="connection-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="connection-heading"
              eyebrow="Same hours"
              title={
                <>
                  Close to the U.S. <span className="text-gradient">in the way that matters.</span>
                </>
              }
              description="From Mexico City to Buenos Aires, most of Latin America works within a few hours of U.S. time zones. That overlap is a big reason U.S. teams hire here, and it lets you collaborate live instead of handing work off overnight."
            />
            <p className="mt-6 text-sm text-dim">Stylised illustration. Time zones vary by season and country.</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass rounded-[1.75rem] p-4 sm:p-6">
              <svg
                viewBox="0 0 800 620"
                role="img"
                aria-label="Stylised map showing Latin American cities Mexico City, Bogotá, São Paulo and Buenos Aires connected to U.S. hubs San Francisco, Austin and New York"
                className="h-auto w-full"
              >
                <defs>
                  <linearGradient id="conn-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#8f87f8" />
                    <stop offset="1" stopColor="#4bb6ea" />
                  </linearGradient>
                </defs>
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r="1.6" fill="currentColor" className="text-white/[0.12]" />
                ))}
                {latam.map((c) => (
                  <path key={c.name} d={arc(c, us[c.hub])} stroke="url(#conn-line)" strokeWidth="1.8" strokeDasharray="2 6" strokeLinecap="round" fill="none" />
                ))}
                {us.map((c) => (
                  <g key={c.name}>
                    <circle cx={c.x} cy={c.y} r="14" fill="#8f87f8" opacity="0.18" />
                    <circle cx={c.x} cy={c.y} r="5" fill="#8f87f8" />
                    <text x={c.x + 14} y={c.y - 14} fontSize="23" fill="currentColor" className="text-white/80">
                      {c.name}
                    </text>
                  </g>
                ))}
                {latam.map((c) => (
                  <g key={c.name}>
                    <circle cx={c.x} cy={c.y} r="14" fill="#4bb6ea" opacity="0.18" />
                    <circle cx={c.x} cy={c.y} r="5" fill="#4bb6ea" />
                    <text x={c.x + 14} y={c.y + 8} fontSize="23" fill="currentColor" className="text-white/80">
                      {c.name}
                    </text>
                    <text x={c.x + 14} y={c.y + 28} fontSize="17" fill="currentColor" className="text-white/45">
                      {c.zone}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
