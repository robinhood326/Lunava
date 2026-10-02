import type { ReactNode } from "react";
import { HeroBackdrop } from "@/components/sections/Hero";
import { Container } from "@/components/ui/primitives";

/** Full-bleed dark canvas used by the 404 and error pages. */
export function DarkShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate min-h-dvh overflow-hidden pb-20 pt-28 sm:pt-32">
      <HeroBackdrop />
      <Container>{children}</Container>
    </section>
  );
}
