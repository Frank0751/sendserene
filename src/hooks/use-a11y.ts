"use client";

import { create } from "zustand";

export type TextSize = "default" | "large" | "xlarge";
export type Theme = "light" | "dark";

interface A11yState {
  textSize: TextSize;
  dyslexiaFont: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  readAloud: boolean;
  easyRead: boolean;
  theme: Theme;
  open: boolean;
  setTextSize: (s: TextSize) => void;
  toggleDyslexia: () => void;
  toggleContrast: () => void;
  toggleMotion: () => void;
  toggleReadAloud: () => void;
  toggleEasyRead: () => void;
  toggleTheme: () => void;
  setOpen: (o: boolean) => void;
  apply: () => void;
}

export const useA11y = create<A11yState>((set, get) => ({
  textSize: "default",
  dyslexiaFont: false,
  highContrast: false,
  reducedMotion: false,
  readAloud: false,
  easyRead: false,
  theme: "light",
  open: false,
  setTextSize: (s) => {
    set({ textSize: s });
    get().apply();
  },
  toggleDyslexia: () => {
    set({ dyslexiaFont: !get().dyslexiaFont });
    get().apply();
  },
  toggleContrast: () => {
    set({ highContrast: !get().highContrast });
    get().apply();
  },
  toggleMotion: () => {
    set({ reducedMotion: !get().reducedMotion });
    get().apply();
  },
  toggleReadAloud: () => set({ readAloud: !get().readAloud }),
  toggleEasyRead: () => {
    set({ easyRead: !get().easyRead });
    get().apply();
  },
  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    set({ theme: next });
    get().apply();
  },
  setOpen: (o) => set({ open: o }),
  apply: () => {
    if (typeof document === "undefined") return;
    const body = document.body;
    const s = get();
    body.classList.toggle("a11y-large", s.textSize === "large");
    body.classList.toggle("a11y-xlarge", s.textSize === "xlarge");
    body.classList.toggle("a11y-dyslexia", s.dyslexiaFont);
    body.classList.toggle("a11y-contrast", s.highContrast);
    body.classList.toggle("a11y-reduced", s.reducedMotion);
    body.classList.toggle("a11y-easy-read", s.easyRead);
    body.classList.toggle("dark", s.theme === "dark");

    // Apply dark mode CSS variable overrides via JS (avoids CSS recompile issues)
    const root = document.documentElement;
    if (s.theme === "dark") {
      root.style.setProperty("--color-paper", "#14201f");
      root.style.setProperty("--color-paper-2", "#1b2929");
      root.style.setProperty("--color-paper-3", "#2a3a3a");
      root.style.setProperty("--color-paper-card", "#1a2827");
      root.style.setProperty("--color-ink", "#ece4d2");
      root.style.setProperty("--color-ink-2", "#d4cab4");
      root.style.setProperty("--color-ink-mid", "#a99e87");
      root.style.setProperty("--color-ink-light", "#847b67");
      root.style.setProperty("--color-ink-faint", "#5f5849");
      root.style.setProperty("--color-teal", "#6fb0b6");
      root.style.setProperty("--color-teal-deep", "#9cc8cd");
      root.style.setProperty("--color-teal-light", "#88c2c7");
      root.style.setProperty("--color-teal-pale", "#1f3536");
      root.style.setProperty("--color-clay", "#d98a63");
      root.style.setProperty("--color-clay-deep", "#e4a07e");
      root.style.setProperty("--color-clay-pale", "#3a221a");
      root.style.setProperty("--color-sage", "#8fae7a");
      root.style.setProperty("--color-sage-pale", "#2a3522");
      root.style.setProperty("--color-slate-tag", "#8aaabc");
      root.style.setProperty("--color-slate-pale", "#233038");
      root.style.setProperty("--color-background", "#14201f");
      root.style.setProperty("--color-foreground", "#ece4d2");
    } else {
      // Reset to light mode values
      root.style.setProperty("--color-paper", "#faf6ed");
      root.style.setProperty("--color-paper-2", "#ece4d2");
      root.style.setProperty("--color-paper-3", "#ddd2b8");
      root.style.setProperty("--color-paper-card", "#fbf7ee");
      root.style.setProperty("--color-ink", "#1d1a15");
      root.style.setProperty("--color-ink-2", "#3a342b");
      root.style.setProperty("--color-ink-mid", "#5b5346");
      root.style.setProperty("--color-ink-light", "#7c7263");
      root.style.setProperty("--color-ink-faint", "#a89c89");
      root.style.setProperty("--color-teal", "#1f5158");
      root.style.setProperty("--color-teal-deep", "#123a40");
      root.style.setProperty("--color-teal-light", "#2f6a72");
      root.style.setProperty("--color-teal-pale", "#e4ecec");
      root.style.setProperty("--color-clay", "#b85c38");
      root.style.setProperty("--color-clay-deep", "#944a2c");
      root.style.setProperty("--color-clay-pale", "#f3e2d6");
      root.style.setProperty("--color-sage", "#5a7548");
      root.style.setProperty("--color-sage-pale", "#e6ecdc");
      root.style.setProperty("--color-slate-tag", "#5a7a8c");
      root.style.setProperty("--color-slate-pale", "#e0e6ea");
      root.style.setProperty("--color-background", "#faf6ed");
      root.style.setProperty("--color-foreground", "#1d1a15");
    }
  },
}));
