import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "block w-full rounded-sm border-0 bg-ink/[0.05] px-4 text-[0.95rem] text-fg ring-1 ring-inset ring-ink/12 transition-shadow placeholder:text-dim focus:bg-ink/[0.07] focus:outline-none focus:ring-2 focus:ring-lunar-400 aria-[invalid=true]:ring-rose-400";

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
}

/** Label + control + hint/error wiring. Pass `aria-describedby={describedBy(id, …)}` to the control. */
export function Field({ id, label, hint, error, optional, children, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-fg">
        {label}
        {optional && <span className="text-xs font-normal text-dim">Optional</span>}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-dim">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function describedBy(id: string, { hint, error }: { hint?: string; error?: string }) {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

export function TextInput({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(controlBase, "h-12", className)} {...props} />;
}

export function TextArea({ className, ...props }: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={cn(controlBase, "min-h-36 py-3 leading-relaxed", className)} {...props} />;
}

export function Select({ className, children, ...props }: ComponentPropsWithoutRef<"select">) {
  return (
    <div className="relative">
      <select className={cn(controlBase, "h-12 cursor-pointer appearance-none pr-10 [&>option]:bg-surface", className)} {...props}>
        {children}
      </select>
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-dim"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6l4 4 4-4" />
      </svg>
    </div>
  );
}
