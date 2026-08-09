"use client";

import { footer, site } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-paper-3 bg-paper-2/50">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-[8px] text-paper"
                style={{ background: "var(--teal)" }}
                aria-hidden
              >
                <span className="font-display text-[15px] font-bold leading-none">S</span>
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
                {site.wordmark}
              </span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-mid font-serif">
              {site.tagline} {footer.blurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["UK data residency", "WCAG 2.2 AA", "Sixteen languages"].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light border border-paper-3 rounded px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-light mb-3.5">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="inline-flex items-center min-h-6 py-0.5 text-[13.5px] font-serif text-ink-2 hover:text-teal transition-colors"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <span className="ml-1 text-ink-faint" aria-hidden>↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-12 pt-6 border-t border-paper-3">
          <div className="space-y-1.5">
            {footer.legal.map((line) => (
              <p key={line} className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-light leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
