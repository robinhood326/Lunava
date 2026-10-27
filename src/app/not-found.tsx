import type { Metadata } from "next";
import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center pb-20 pt-32">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <LogoMark idPrefix="nf" className="h-12 w-12" />
          <p className="mt-8 font-mono text-sm text-lunar-300">404</p>
          <h1 className="display mt-3 text-6xl sm:text-8xl">This page is off the map.</h1>
          <p className="mt-4 text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/" arrow>
              Back to home
            </Button>
            <Button href="/opportunities" variant="secondary">
              Opportunities
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
