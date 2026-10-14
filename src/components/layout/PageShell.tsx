import type { ReactNode } from "react";

/** Wraps inner pages. The page hero handles its own top padding to clear the floating header. */
export function PageShell({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
