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
  return <Tag className={cn("mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-10", className)}>{children}</Tag>;
}

export function Section({
  children,
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-20 sm:py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}

/** Small pill label above a heading. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 rounded-full border border-fg/10 bg-surface/70 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted shadow-[var(--shadow-lift)]", className)}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lunar-400 to-glow-400" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className="display mt-5 text-balance text-[clamp(2.4rem,5.6vw,4.6rem)]"
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-pretty text-lg leading-relaxed text-muted", align === "center" && "mx-auto max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}

/* ── Display ────────────────────────────────────────────────────── */

export function Pill({ children, className, icon: Icon }: { children: ReactNode; className?: string; icon?: LucideIcon }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-fg/[0.05] px-2.5 py-1 font-mono text-[0.7rem] text-muted",
        className,
      )}
    >
      {Icon && <Icon aria-hidden="true" className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

/** Rounded square holding an icon — used on bento and feature cards. */
export function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lunar-400/20 to-glow-400/15 text-lunar-400 ring-1 ring-inset ring-lunar-400/20",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}
