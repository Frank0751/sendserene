"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { languages } from "@/lib/site-content";
import { useLocale } from "@/hooks/use-locale";
import { localeCoverage, isRtl, type LocaleCode } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Language menu in the site header.
 *
 * Picking a language sets it for the whole site: the choice is stored, so
 * it survives navigation between pages, and it is applied to <html lang>
 * and <html dir> so right-to-left scripts lay out correctly.
 *
 * Where a language has not been fully translated yet, the menu says so
 * rather than implying a complete translation. Wording is supplied and
 * signed off by Zifankrah Ltd per the brief.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, hydrate, t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // Close on outside click or Escape, and return focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("header.language")}
        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md text-[13px] font-display text-ink-2 hover:text-teal hover:bg-paper-2/60 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="font-mono text-[11px] uppercase tracking-wider">
          {current.code}
        </span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("header.chooseLanguage")}
          className="absolute end-0 z-50 mt-2 w-[19rem] max-h-[70vh] overflow-y-auto rounded-xl border border-paper-3 bg-paper-card shadow-xl p-1.5"
        >
          <p className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
            {t("header.chooseLanguage")}
          </p>
          <ul>
            {languages.map((l) => {
              const code = l.code as LocaleCode;
              const selected = code === locale;
              const pct = Math.round(localeCoverage(code) * 100);
              const soon = "comingSoon" in l && l.comingSoon;
              return (
                <li key={l.code} role="option" aria-selected={selected} aria-disabled={soon || undefined}>
                  <button
                    type="button"
                    disabled={!!soon}
                    onClick={() => {
                      if (soon) return;
                      setLocale(code);
                      setOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 min-h-11 px-3 py-2 rounded-lg text-start transition-colors",
                      selected ? "bg-teal-pale/60"
                        : soon ? "opacity-50 cursor-default"
                        : "hover:bg-paper-2/70"
                    )}
                  >
                    <span className="min-w-0">
                      <span
                        className="block font-display text-[14px] font-medium text-ink truncate"
                        dir={isRtl(code) ? "rtl" : "ltr"}
                      >
                        {l.native}
                      </span>
                      <span className="block font-mono text-[9.5px] uppercase tracking-wider text-ink-light mt-0.5">
                        {soon ? `${l.label} · Coming soon`
                          : pct < 100 ? `${l.label} · ${pct}% translated`
                          : l.label}
                      </span>
                    </span>
                    {selected && (
                      <Check className="h-4 w-4 shrink-0 text-teal" aria-hidden />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
