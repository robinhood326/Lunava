"use client";

import { useEffect } from "react";
import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-dvh items-center pb-20 pt-32">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <LogoMark idPrefix="err" className="h-12 w-12" />
          <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-fade">Something went wrong.</h1>
          <p className="mt-4 text-lg text-muted">An unexpected error occurred. Please try again.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button onClick={reset}>Try again</Button>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
