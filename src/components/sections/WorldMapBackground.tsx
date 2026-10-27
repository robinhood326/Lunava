import { WORLD_GRID, dotsLatam, dotsOther, dotsUS } from "@/lib/data/worldDots";

const x = (lon: number) => (lon + 180) / WORLD_GRID.step;
const y = (lat: number) => (WORLD_GRID.latMax - lat) / WORLD_GRID.step;

const hubs = [
  { name: "San Francisco", lon: -122.4, lat: 37.8 },
  { name: "Austin", lon: -97.7, lat: 30.3 },
  { name: "New York", lon: -74, lat: 40.7 },
];

const cities = [
  { name: "Mexico City", lon: -99.1, lat: 19.4, hub: 1 },
  { name: "Bogotá", lon: -74.1, lat: 4.7, hub: 2 },
  { name: "São Paulo", lon: -46.6, lat: -23.5, hub: 2 },
  { name: "Buenos Aires", lon: -58.4, lat: -34.6, hub: 0 },
];

function arc(lonA: number, latA: number, lonB: number, latB: number) {
  const ax = x(lonA), ay = y(latA), bx = x(lonB), by = y(latB);
  const mx = (ax + bx) / 2;
  const my = Math.min(ay, by) - Math.hypot(ax - bx, ay - by) * 0.32;
  return `M${ax} ${ay} Q${mx} ${my} ${bx} ${by}`;
}

/**
 * Digital dot-matrix world map for the hero: the United States and Latin America
 * are lit, with animated links from LATAM cities to U.S. hubs. Pure SVG + CSS.
 */
export function WorldMapBackground({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`6 0 100 ${WORLD_GRID.height}`}
      role="img"
      aria-label="Dotted world map with the United States and Latin America highlighted and linked by animated connections"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="map-link" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#16b6e3" />
          <stop offset="1" stopColor="#8176ff" />
        </linearGradient>
      </defs>

      <path d={dotsOther} stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" className="text-fg/[0.13]" />
      <path d={dotsUS} stroke="var(--color-lunar-400)" strokeWidth="1.05" strokeLinecap="round" opacity="0.78" />
      <path d={dotsLatam} stroke="var(--color-glow-400)" strokeWidth="1.05" strokeLinecap="round" opacity="0.78" />

      {cities.map((c) => {
        const h = hubs[c.hub];
        const d = arc(c.lon, c.lat, h.lon, h.lat);
        return (
          <g key={c.name}>
            <path d={d} stroke="url(#map-link)" strokeWidth="0.3" opacity="0.45" />
            <path d={d} stroke="url(#map-link)" strokeWidth="0.55" strokeLinecap="round" pathLength={100} className="map-flow" />
          </g>
        );
      })}

      {hubs.map((h) => (
        <g key={h.name}>
          <circle cx={x(h.lon)} cy={y(h.lat)} r="1.9" fill="var(--color-lunar-400)" opacity="0.25" className="map-pulse" />
          <circle cx={x(h.lon)} cy={y(h.lat)} r="0.9" fill="var(--color-lunar-300)" />
        </g>
      ))}
      {cities.map((c) => (
        <g key={c.name}>
          <circle cx={x(c.lon)} cy={y(c.lat)} r="1.9" fill="var(--color-glow-400)" opacity="0.25" className="map-pulse" />
          <circle cx={x(c.lon)} cy={y(c.lat)} r="0.9" fill="var(--color-glow-300)" />
        </g>
      ))}
    </svg>
  );
}
