"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { comparison } from "@/lib/site-content";
import { Check, X, Minus, FolderOpen, FileSpreadsheet, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ComparisonSection() {
  const { ref, visible } = useReveal();
  const [mobileRow, setMobileRow] = useState(0);

  return (
    <section id="comparison" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{comparison.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {comparison.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {comparison.body}
            </p>
          </div>

          {/* Desktop: full table */}
          <div className="hidden lg:block mt-12">
            <div className="card-paper overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1.2fr_1fr_1fr_1.15fr] border-b-2 border-paper-3">
                <div className="p-5 bg-paper-2/40">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light">
                    The task
                  </p>
                </div>
                <div className="p-5 bg-paper-2/40 border-l border-paper-3">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-ink-light" />
                    <span className="font-display text-[13px] font-semibold text-ink-2">Folders & email</span>
                  </div>
                </div>
                <div className="p-5 bg-paper-2/40 border-l border-paper-3">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="h-4 w-4 text-ink-light" />
                    <span className="font-display text-[13px] font-semibold text-ink-2">Spreadsheet</span>
                  </div>
                </div>
                <div className="p-5 border-l-2 border-clay/40" style={{ background: "var(--teal-pale)" }}>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-clay" />
                    <span className="font-display text-[13px] font-semibold text-teal-deep">SENDSerene</span>
                  </div>
                </div>
              </div>

              {/* Rows */}
              {comparison.rows.map((row, i) => (
                <div
                  key={row.feature}
                  className={cn(
                    "grid grid-cols-[1.2fr_1fr_1fr_1.15fr] border-b border-paper-3 last:border-0",
                    i % 2 === 1 && "bg-paper-2/20"
                  )}
                >
                  <div className="p-5 flex items-center">
                    <p className="font-display text-[13.5px] font-medium text-ink">{row.feature}</p>
                  </div>
                  <div className="p-5 border-l border-paper-3">
                    <p className="font-serif text-[13px] leading-[1.55] text-ink-light">{row.folder}</p>
                  </div>
                  <div className="p-5 border-l border-paper-3">
                    <p className="font-serif text-[13px] leading-[1.55] text-ink-light">{row.sheet}</p>
                  </div>
                  <div className="p-5 border-l-2 border-clay/30 bg-teal-pale/30">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                      <p className="font-serif text-[13px] leading-[1.55] text-ink-2">{row.sendserene}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: swipeable cards */}
          <div className="lg:hidden mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light mb-3">
              Swipe through · {mobileRow + 1} of {comparison.rows.length}
            </p>
            <div className="card-paper p-5">
              <p className="font-display text-[15px] font-semibold text-ink mb-4">
                {comparison.rows[mobileRow].feature}
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-paper-2/40 border border-paper-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FolderOpen className="h-3.5 w-3.5 text-ink-light" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Folders & email</span>
                  </div>
                  <p className="font-serif text-[13px] leading-[1.5] text-ink-mid">{comparison.rows[mobileRow].folder}</p>
                </div>
                <div className="p-3 rounded-lg bg-paper-2/40 border border-paper-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FileSpreadsheet className="h-3.5 w-3.5 text-ink-light" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Spreadsheet</span>
                  </div>
                  <p className="font-serif text-[13px] leading-[1.5] text-ink-mid">{comparison.rows[mobileRow].sheet}</p>
                </div>
                <div className="p-3 rounded-lg bg-teal-pale/40 border border-clay/20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-clay" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-teal-deep">SENDSerene</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-teal mt-0.5 shrink-0" />
                    <p className="font-serif text-[13px] leading-[1.5] text-ink-2">{comparison.rows[mobileRow].sendserene}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile dots + nav */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setMobileRow(Math.max(0, mobileRow - 1))}
                disabled={mobileRow === 0}
                className="font-mono text-[11px] uppercase tracking-wider text-teal disabled:opacity-30"
              >
                ← Prev
              </button>
              <div className="flex gap-1.5">
                {comparison.rows.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMobileRow(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === mobileRow ? "w-6 bg-teal" : "w-1.5 bg-paper-3"
                    )}
                    aria-label={`Row ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setMobileRow(Math.min(comparison.rows.length - 1, mobileRow + 1))}
                disabled={mobileRow === comparison.rows.length - 1}
                className="font-mono text-[11px] uppercase tracking-wider text-teal disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
