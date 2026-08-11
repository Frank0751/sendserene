"use client";

import { useEffect, useState } from "react";
import { Menu, X, Globe, Accessibility } from "lucide-react";
import { nav, site } from "@/lib/site-content";
import { useA11y } from "@/hooks/use-a11y";
import { useLocale } from "@/hooks/use-locale";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const setOpenPanel = useA11y((s) => s.setOpen);
  const { t, hydrate } = useLocale();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-paper-3"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Wordmark */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <span
              className="grid h-9 w-9 place-items-center rounded-[8px] text-paper"
              style={{ background: "var(--teal)" }}
              aria-hidden
            >
              <span className="font-display text-[15px] font-bold leading-none">S</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
                {site.wordmark}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-light mt-0.5">
                Zifankrah Ltd
              </span>
            </span>
          </a>

          {/* Desktop nav — flat 7 links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[13px] font-display text-ink-2 hover:text-teal transition-colors rounded-md hover:bg-paper-2/60"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenPanel(true)}
              className="hidden sm:grid h-9 w-9 place-items-center rounded-md text-ink-2 hover:text-teal hover:bg-paper-2/60 transition-colors"
              aria-label={t("header.accessibility")}
              title={t("header.accessibility")}
            >
              <Accessibility className="h-[18px] w-[18px]" />
            </button>
            <LanguageSwitcher className="hidden sm:block" />
            <a href="/pricing" className="btn-primary hidden sm:inline-flex text-[13.5px] !py-2 !px-4">
              {t("header.startFree")}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-md text-ink hover:bg-paper-2/60"
              aria-label={t("header.menu")}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-paper-3 bg-paper/95 backdrop-blur-md">
          <nav className="mx-auto max-w-[1180px] px-5 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-[15px] font-display text-ink-2 hover:text-teal hover:bg-paper-2/60 rounded-md"
              >
                {t(item.key)}
              </a>
            ))}

            <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-paper-3">
              <span className="flex items-center gap-2 px-3 text-[13px] font-display text-ink-2">
                <Globe className="h-4 w-4" /> {t("header.languages")}
              </span>
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => {
                setOpen(false);
                setOpenPanel(true);
              }}
              className="btn-ghost justify-center text-sm !py-2.5 mt-2"
            >
              <Accessibility className="h-4 w-4" /> {t("header.accessibility")}
            </button>
            <a
              href="/pricing"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center text-sm !py-2.5 mt-2"
            >
              {t("header.startFree")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
