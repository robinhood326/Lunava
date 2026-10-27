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

/** Mono micro-label with an automatic section index: the site's signature eyebrow. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow-index inline-flex items-center border-t border-fg pt-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg", className)}>
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
        className="display mt-6 text-balance text-[clamp(2.6rem,6.5vw,5.2rem)]"
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
        "inline-flex items-center gap-1.5 border border-fg/25 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-muted",
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
        "inline-flex h-11 w-11 shrink-0 items-center justify-center border border-fg/25 text-lunar-500",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}
