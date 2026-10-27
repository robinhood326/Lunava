"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/brand/Logo";
import { OPEN_PALETTE_EVENT } from "@/components/layout/CommandPalette";
import { buttonClasses } from "@/components/ui/Button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname === `${href}/` || pathname.startsWith(`${href}/`);
}

/** Floating glass pill navigation (centred, inset from the viewport edge). */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      // Keep keyboard focus inside the open menu.
      if (e.key === "Tab" && panelRef.current) {
        const focusables = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a, button")].filter(
          Boolean,
        ) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
        <div
          className={cn(
            "mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border pl-4 pr-2 transition-all duration-300 sm:pl-5",
            scrolled || open
              ? "border-fg/10 bg-bg/75 shadow-[var(--shadow-lift)] backdrop-blur-xl"
              : "border-fg/[0.06] bg-surface/50 backdrop-blur-md",
          )}
        >
          <Logo idPrefix="hdr" href="/" />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        active ? "bg-fg/[0.08] text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
              aria-label="Open command palette"
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 font-mono text-xs text-dim ring-1 ring-inset ring-fg/10 transition-colors hover:text-fg hover:ring-fg/25 lg:inline-flex"
            >
              <Command className="h-3.5 w-3.5" aria-hidden="true" /> K
            </button>
            <ThemeToggle />
            <div className="hidden min-[400px]:block">
              <Link href="/contact" className={buttonClasses({ size: "sm" })}>
                Get matched
              </Link>
            </div>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-fg/10 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="fixed inset-x-0 top-0 z-40 h-dvh bg-bg/90 px-5 pt-24 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="display block rounded-2xl px-4 py-3 text-4xl text-fg transition-colors hover:bg-fg/[0.06] aria-[current=page]:text-lunar-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className={cn(buttonClasses({ size: "lg" }), "mt-6 w-full")}>
              Get matched
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
