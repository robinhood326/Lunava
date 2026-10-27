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
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <Container>
        <div className={cn("max-w-5xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1
            id="page-title"
            className="display mt-8 text-balance text-[clamp(3rem,9vw,8rem)]"
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
