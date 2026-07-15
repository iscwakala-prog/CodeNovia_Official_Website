"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  toggleTheme,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    const initial =
      stored ??
      (document.documentElement.dataset.theme === "light" ? "light" : "dark");
    applyTheme(initial);
    setTheme(initial);
    setReady(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      disabled={!ready}
      onClick={() => setTheme((current) => toggleTheme(current))}
      className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-border bg-bg-elevated transition hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5.5 w-5.5 rounded-full bg-text shadow-sm transition duration-300 ease-out ${
          isDark ? "translate-x-[1.25rem]" : "translate-x-0"
        }`}
        style={{ height: "1.25rem", width: "1.25rem" }}
        aria-hidden
      />
    </button>
  );
}
