"use client";

import { useEffect } from "react";
import { LogoMark } from "@/components/brand/Logo";
import { DarkShell } from "@/components/layout/DarkShell";
import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <DarkShell>
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center text-ink">
        <LogoMark idPrefix="err" className="h-12 w-12" />
        <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">Something went wrong.</h1>
        <p className="mt-4 text-lg text-muted">An unexpected error occurred. Please try again.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset} variant="primary">
            Try again
          </Button>
          <Button href="/" variant="glass">
            Back to home
          </Button>
        </div>
      </div>
    </DarkShell>
  );
}
