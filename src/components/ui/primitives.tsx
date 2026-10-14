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

/** Mono micro-label with a glowing dot — the site's signature "eyebrow". */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-lunar-300", className)}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-glow-400 shadow-[0_0_10px_2px_rgb(76_201_240/0.7)]" />
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
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-fade sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
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
        "inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[0.7rem] text-muted ring-1 ring-inset ring-white/10",
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
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lunar-500/30 to-glow-400/10 text-lunar-200 ring-1 ring-inset ring-white/15",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}
