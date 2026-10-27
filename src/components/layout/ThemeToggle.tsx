"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Light / dark switch. The initial theme is set before paint by the inline script in the root layout. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be unavailable; the choice just won't persist */
    }
    setDark(!dark);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/10 hover:text-fg"
    >
      {dark ? <Sun className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" /> : <Moon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />}
    </button>
  );
}
