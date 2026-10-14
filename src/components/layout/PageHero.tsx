import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}

/** Introductory band at the top of every inner page. */
export function PageHero({ eyebrow, title, description, children, align = "left" }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden pb-14 pt-36 sm:pb-20 sm:pt-44">
      <Container>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1
            id="page-title"
            className="mt-5 text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-fade sm:text-6xl lg:text-[4.4rem]"
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
      </Container>
    </section>
  );
}
