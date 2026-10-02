import type { ReactNode } from "react";

/**
 * Wraps inner pages: clears the fixed header, then gives the first section a
 * tighter top padding so the page title sits at a consistent, comfortable
 * distance below the navigation (instead of a full section gap).
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="pt-16 lg:pt-[4.5rem] [&>section:first-of-type]:pt-12 sm:[&>section:first-of-type]:pt-14 lg:[&>section:first-of-type]:pt-16">
      {children}
    </div>
  );
}
