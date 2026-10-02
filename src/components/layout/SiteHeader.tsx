"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { buttonClasses } from "@/components/ui/Button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Solid frosted header once the page is scrolled.
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

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          solid ? "border-b border-white/70 bg-white/60 shadow-soft backdrop-blur-xl" : "border-b border-transparent bg-transparent",
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between gap-6 px-5 sm:px-6 lg:h-[4.5rem] lg:px-10">
          <Logo idPrefix="hdr" href="/" size="lg" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors",
                        active ? "bg-white/80 text-ink shadow-soft" : "text-muted hover:text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={buttonClasses({ size: "sm" })}
            >
              Contact Us
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/70 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside <header> so its backdrop-filter does not become the containing block */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-white/70 bg-white/85 backdrop-blur-2xl lg:hidden"
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 pb-10 pt-4 sm:px-6">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn("flex items-center justify-between py-4 text-lg font-medium", active ? "text-ink" : "text-muted")}
                  >
                    {item.label}
                    {active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lunar-500 to-glow-400" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pt-10">
            <Link href="/contact" onClick={() => setOpen(false)} className={buttonClasses({ size: "lg", className: "w-full" })}>
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
