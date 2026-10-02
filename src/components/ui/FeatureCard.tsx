import type { LucideIcon } from "lucide-react";
import { IconTile } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  feature,
  tone = "light",
  className,
}: {
  feature: Feature;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <article
      className={cn(
        "card-hairline group h-full rounded-[var(--radius-card)] p-6 transition-all duration-300 hover:-translate-y-0.5 lg:p-7",
        "glass hover:shadow-lift",
        className,
      )}
    >
      <IconTile icon={feature.icon} tone={tone} />
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em] text-ink">{feature.title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{feature.description}</p>
    </article>
  );
}
