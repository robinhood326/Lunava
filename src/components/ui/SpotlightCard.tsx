"use client";

import type { ElementType, PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Bento card whose border and surface light up where the cursor is.
 * Only sets two CSS variables on pointer move; the visuals live in globals.css (.spot).
 */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Tag onPointerMove={onPointerMove} className={cn("spot", className)}>
      {children}
    </Tag>
  );
}
