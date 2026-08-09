"use client";

import { create } from "zustand";
import {
  DICTIONARIES,
  isRtl,
  localeCoverage,
  translate,
  type LocaleCode,
  type TranslationKey,
} from "@/lib/i18n";
import {
  pageCoverage,
  translatePage,
  type PageKey,
} from "@/lib/i18n-pages";

const STORAGE_KEY = "sendserene.locale";

interface LocaleState {
  locale: LocaleCode;
  /** True once the stored preference has been read on the client. */
  hydrated: boolean;
  setLocale: (l: LocaleCode) => void;
  /** Read the saved preference. Call once, from a mount effect. */
  hydrate: () => void;
  /** Translate an interface string in the current locale. */
  t: (key: TranslationKey) => string;
  /** Translate page copy (hero, page headers) in the current locale. */
  tp: (key: PageKey) => string;
  /** How much of the interface the current locale covers, 0 to 1. */
  coverage: () => number;
  /** True when the current locale still shows some English. */
  isPartial: () => boolean;
}

/**
 * Reflect the locale on <html> so the document language is correct for
 * screen readers and so right-to-left scripts lay out properly.
 */
function applyToDocument(locale: LocaleCode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("lang", locale);
  root.setAttribute("dir", isRtl(locale) ? "rtl" : "ltr");
}

export const useLocale = create<LocaleState>((set, get) => ({
  // Always start from English so the server and the first client render
  // agree. The stored preference is applied in hydrate().
  locale: "en",
  hydrated: false,

  setLocale: (l) => {
    if (!DICTIONARIES[l]) return;
    set({ locale: l });
    applyToDocument(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // Storage can be unavailable in private mode. The choice still
      // applies for this page, it just will not be remembered.
    }
  },

  hydrate: () => {
    if (get().hydrated) return;
    let stored: LocaleCode | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    } catch {
      stored = null;
    }
    if (stored && DICTIONARIES[stored]) {
      set({ locale: stored, hydrated: true });
      applyToDocument(stored);
    } else {
      set({ hydrated: true });
    }
  },

  t: (key) => translate(get().locale, key),
  tp: (key) => translatePage(get().locale, key),

  // Combined across the interface strings and the page copy, so the figure
  // shown in the language menu reflects what a visitor actually sees.
  coverage: () => {
    const l = get().locale;
    return (localeCoverage(l) + pageCoverage(l)) / 2;
  },
  isPartial: () => get().coverage() < 0.999,
}));
