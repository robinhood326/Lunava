import type { ReactNode } from "react";
import { HeroBackdrop } from "@/components/sections/Hero";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Extra bottom padding when content (e.g. a search bar) overlaps the hero edge. */
  overlap?: boolean;
  align?: "left" | "center";
  aside?: ReactNode;
}

/** Dark introductory band used at the top of every inner page. */
export function PageHero({ eyebrow, title, description, children, overlap, align = "left", aside }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-title"
      className={cn(
        "relative isolate overflow-hidden pt-32 sm:pt-36",
        overlap ? "pb-24 sm:pb-28" : "pb-16 sm:pb-20 lg:pb-24",
      )}
    >
      <HeroBackdrop />
      <Container className={cn(Boolean(aside) && "grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]")}>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
          <h1
            id="page-title"
            className="mt-5 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            {title}
          </h1>
          {description && (
            <p className={cn("mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed", align === "center" && "mx-auto")}>
              {description}
            </p>
          )}
          {children}
        </div>
        {aside}
      </Container>
    </section>
  );
}
