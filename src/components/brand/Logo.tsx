import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** Unique prefix for SVG defs when the mark appears more than once on a page. */
  idPrefix?: string;
  /** Adds the soft violet glow (use on dark backgrounds, at 32px and up). */
  glow?: boolean;
}

/**
 * The Lunava mark: a bold, rounded "L" — its sweeping corner is the arc of an
 * orbit — holding a four-point spark in its counter (the "luna" light, and the
 * spark of AI). Gradient violet → cyan; reads from 16px favicons up to large sizes.
 * Keep in sync with src/app/icon.svg.
 */
export function LogoMark({ className, idPrefix = "lnv", glow = true }: LogoMarkProps) {
  const body = `${idPrefix}-body`;
  const spark = `${idPrefix}-spark`;
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-10 overflow-visible", glow && "drop-shadow-[0_0_12px_rgb(112_102_241/0.55)]", className)}
    >
      <defs>
        <linearGradient id={body} x1="8" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d6d2ff" />
          <stop offset="0.4" stopColor="#8f87f8" />
          <stop offset="1" stopColor="#35c4f0" />
        </linearGradient>
        <linearGradient id={spark} x1="26" y1="6" x2="38" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#8be3fb" />
        </linearGradient>
      </defs>
      <path d="M13 6V27a15 15 0 0 0 15 15H41" stroke={`url(#${body})`} strokeWidth="8.5" strokeLinecap="round" />
      <path
        d="M32 7Q33.6 16.4 43 18Q33.6 19.6 32 29Q30.4 19.6 21 18Q30.4 16.4 32 7Z"
        fill={`url(#${spark})`}
      />
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
      <LogoMark idPrefix={idPrefix} className={cn("shrink-0", size === "lg" ? "h-10 w-10" : "h-8 w-8")} />
      <span className={cn("font-semibold tracking-[-0.05em] text-fg", size === "lg" ? "text-[1.7rem]" : "text-[1.35rem]")}>
        Lunava
      </span>
    </>
  );

  const layout = cn("inline-flex items-center", size === "lg" ? "gap-3" : "gap-2.5");

  if (href === null) {
    return <span className={cn(layout, className)}>{content}</span>;
  }

  return (
    <Link href={href} aria-label="Lunava home" className={cn(layout, "rounded-xl", className)}>
      {content}
    </Link>
  );
}
