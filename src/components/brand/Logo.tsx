import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** Unique prefix for SVG defs when the mark appears more than once on a page. */
  idPrefix?: string;
}

/**
 * The Lunava mark: a soft gradient app-icon tile holding a white crescent and
 * a rising point of light on an orbit — "luna" + momentum toward the next
 * opportunity. Designed to read well from 16px favicons up to large sizes.
 */
export function LogoMark({ className, idPrefix = "lnv" }: LogoMarkProps) {
  const tile = `${idPrefix}-tile`;
  const gloss = `${idPrefix}-gloss`;
  const mask = `${idPrefix}-mask`;
  const glow = `${idPrefix}-glow`;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={cn("h-10 w-10", className)}>
      <defs>
        <linearGradient id={tile} x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8f87f8" />
          <stop offset="0.5" stopColor="#6c63f0" />
          <stop offset="1" stopColor="#4bb6ea" />
        </linearGradient>
        <linearGradient id={gloss} x1="24" y1="0" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <mask id={mask}>
          <rect width="48" height="48" fill="white" />
          <circle cx="28.5" cy="19" r="10" fill="black" />
        </mask>
      </defs>

      {/* Tile */}
      <rect width="48" height="48" rx="14" fill={`url(#${tile})`} />
      <rect width="48" height="48" rx="14" fill={`url(#${gloss})`} />
      <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#ffffff" strokeOpacity="0.25" />

      {/* Orbit */}
      <path d="M9 36.5C17 38 30 33 36.5 15" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.6" strokeLinecap="round" />

      {/* Crescent */}
      <circle cx="21.5" cy="25" r="12" fill="#ffffff" mask={`url(#${mask})`} />

      {/* Rising light */}
      <circle cx="35.5" cy="13" r="6" fill={`url(#${glow})`} opacity="0.55" />
      <circle cx="35.5" cy="13" r="3" fill="#ffffff" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  idPrefix?: string;
  href?: string | null;
  size?: "md" | "lg";
}

export function Logo({ className, idPrefix, href = "/", size = "md" }: LogoProps) {
  const content = (
    <>
      <LogoMark
        idPrefix={idPrefix}
        className={cn(
          "shrink-0",
          size === "lg" ? "h-11 w-11 lg:h-12 lg:w-12" : "h-9 w-9",
        )}
      />
      <span
        className={cn(
          "font-semibold tracking-[-0.045em]",
          size === "lg" ? "text-[1.7rem] lg:text-[1.85rem]" : "text-[1.4rem]",
          "text-fg",
        )}
      >
        Lunava
      </span>
    </>
  );

  const layout = cn("inline-flex items-center", size === "lg" ? "gap-3" : "gap-2.5");

  if (href === null) {
    return <span className={cn(layout, className)}>{content}</span>;
  }

  return (
    <Link href={href} aria-label="Lunava home" className={cn(layout, "rounded-2xl", className)}>
      {content}
    </Link>
  );
}
