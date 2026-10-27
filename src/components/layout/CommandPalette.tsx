"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, CornerDownLeft, Mail, Search } from "lucide-react";
import { footerNav, mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const OPEN_PALETTE_EVENT = "lunava:open-palette";

interface Command {
  id: string;
  label: string;
  hint: string;
  run: () => void;
}

/** ⌘K / Ctrl+K command palette: jump to any page or copy our email. */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const pages = [...mainNav, { label: "Contact", href: "/contact" }, ...footerNav.flatMap((g) => g.links)];
    const seen = new Set<string>();
    const nav: Command[] = [];
    for (const p of pages) {
      if (seen.has(p.href)) continue;
      seen.add(p.href);
      nav.push({ id: p.href, label: p.label, hint: p.href, run: () => router.push(p.href) });
    }
    return [
      ...nav,
      {
        id: "copy-email",
        label: "Copy our email",
        hint: siteConfig.email.hello,
        run: () => {
          void navigator.clipboard?.writeText(siteConfig.email.hello);
          setCopied(true);
        },
      },
    ];
  }, [router]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setCopied(false);
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  if (!open) return null;

  function choose(c: Command | undefined) {
    if (!c) return;
    c.run();
    if (c.id !== "copy-email") setOpen(false);
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh]" role="dialog" aria-modal="true" aria-label="Command palette">
      <button type="button" aria-label="Close" className="absolute inset-0 cursor-default bg-bg/70 " onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-ink/12 bg-surface/95 shadow-[0_30px_80px_-20px_rgb(20_19_15/0.4)] ">
        <div className="flex items-center gap-3 border-b border-ink/[0.08] px-4">
          <Search className="h-4 w-4 text-dim" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIndex((i) => Math.min(i + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                choose(results[index]);
              }
            }}
            placeholder="Go to a page, or search…"
            aria-label="Search commands"
            className="h-14 flex-1 bg-transparent text-[0.95rem] text-fg outline-none placeholder:text-dim"
          />
          <kbd className="rounded-md border border-ink/12 px-1.5 py-0.5 font-mono text-[0.65rem] text-dim">esc</kbd>
        </div>
        <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-dim">Nothing matches “{query}”.</li>}
          {results.map((c, i) => (
            <li key={c.id} role="option" aria-selected={i === index}>
              <button
                type="button"
                onMouseMove={() => setIndex(i)}
                onClick={() => choose(c)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors",
                  i === index ? "bg-lunar-500/20 text-fg" : "text-muted",
                )}
              >
                <span className="flex items-center gap-3">
                  {c.id === "copy-email" ? <Mail className="h-4 w-4 text-glow-400" aria-hidden="true" /> : <ArrowRight className="h-4 w-4 text-lunar-300" aria-hidden="true" />}
                  {c.id === "copy-email" && copied ? "Copied!" : c.label}
                </span>
                <span className="font-mono text-xs text-dim">{c.hint}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-ink/[0.08] px-4 py-2.5 font-mono text-[0.68rem] text-dim">
          <span>↑ ↓ to move</span>
          <span className="inline-flex items-center gap-1.5">
            <CornerDownLeft className="h-3 w-3" aria-hidden="true" /> to open
          </span>
        </div>
      </div>
    </div>
  );
}
