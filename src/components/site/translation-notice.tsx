"use client";

import { useEffect } from "react";
import { Languages } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

/**
 * Shown when the chosen language does not yet cover the whole page.
 *
 * Being explicit matters here. A parent who switches to Somali and still
 * sees English paragraphs should be told the translation is unfinished,
 * not left wondering whether the site is broken or whether they mis-tapped.
 * Per the brief, the remaining wording is supplied and signed off by
 * Zifankrah Ltd.
 */
export function TranslationNotice() {
  const { t, isPartial, hydrate, locale, hydrated } = useLocale();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // Render nothing until the stored preference is read, so the server and
  // the first client render agree.
  if (!hydrated || locale === "en" || !isPartial()) return null;

  return (
    <div className="border-b border-paper-3 bg-paper-2/60">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-2.5 flex items-start gap-2.5">
        <Languages className="h-4 w-4 shrink-0 mt-0.5 text-ink-light" aria-hidden />
        <p className="font-serif text-[13px] leading-[1.55] text-ink-mid">
          {t("common.partialNotice")}
        </p>
      </div>
    </div>
  );
}
