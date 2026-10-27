import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary: "btn-glow text-white hover:-translate-y-0.5 hover:brightness-110",
  secondary: "border border-fg/15 bg-surface text-fg shadow-[var(--shadow-lift)] hover:-translate-y-0.5 hover:border-lunar-400/60",
  ghost: "text-muted hover:bg-fg/[0.06] hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base sm:h-[3.25rem] sm:px-7",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Adds a trailing arrow that nudges on hover. */
  arrow?: boolean;
}

type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function buttonClasses({ variant = "primary", size = "md", className }: Pick<CommonProps, "variant" | "size" | "className">) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, arrow, ...rest } = props;
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
