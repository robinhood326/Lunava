import type { Metadata } from "next";
import { LogoMark } from "@/components/brand/Logo";
import { DarkShell } from "@/components/layout/DarkShell";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <DarkShell>
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center text-ink">
        <LogoMark idPrefix="nf" className="h-12 w-12" />
        <p className="mt-8 font-mono text-sm text-lunar-600">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">This page is off the map.</h1>
        <p className="mt-4 text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Your next opportunity is probably somewhere
          else.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" arrow>
            Back to home
          </Button>
          <Button href="/engineers" variant="glass">
            For engineers
          </Button>
        </div>
      </div>
    </DarkShell>
  );
}
