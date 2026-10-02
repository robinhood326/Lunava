import type { ElementType, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Layout ─────────────────────────────────────────────────────── */

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("mx-auto w-full max-w-[96rem] px-5 sm:px-6 lg:px-10", className)}>{children}</Tag>;
}

export function Section({
  children,
  className,
  id,
  tone = "light",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "white" | "dark";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative py-20 sm:py-24 lg:py-32",
        tone === "white" && "bg-white/55",
        tone === "dark" && "bg-tint",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, tone = "light", className }: { children: ReactNode; tone?: "light" | "dark"; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em]",
        "text-lunar-600",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lunar-500 to-glow-400" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  id,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={cn(
          "mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[3.1rem] lg:leading-[1.08]",
          "text-ink",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-lg leading-relaxed",
            "text-muted",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ── Display ────────────────────────────────────────────────────── */

type BadgeTone = "neutral" | "lunar" | "green" | "amber" | "sky" | "dark";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-slate-100 text-slate-700 ring-slate-200",
  lunar: "bg-lunar-50 text-lunar-700 ring-lunar-200",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  amber: "bg-amber-50 text-amber-800 ring-amber-200",
  sky: "bg-sky-50 text-sky-700 ring-sky-200",
  dark: "bg-white/70 text-ink ring-white",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  icon: Icon,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
  icon?: LucideIcon;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        badgeTones[tone],
        className,
      )}
    >
      {Icon && <Icon aria-hidden="true" className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

/** Rounded square holding an icon — used on feature and benefit cards. */
export function IconTile({
  icon: Icon,
  tone = "light",
  className,
}: {
  icon: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
        tone === "dark"
          ? "bg-white/70 text-lunar-600 ring-1 ring-white"
          : "bg-gradient-to-br from-lunar-50 to-white text-lunar-600 ring-1 ring-lunar-100",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}

/** Generic card surface. */
export function Card({
  children,
  className,
  interactive = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: ElementType;
}) {
  return (
    <Tag
      className={cn(
        "rounded-[var(--radius-card)] border border-white/80 bg-white/70 shadow-soft backdrop-blur-xl",
        interactive && "card-hairline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
