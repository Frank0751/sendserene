"use client";

import { useReveal } from "@/hooks/use-reveal";
import { exportComparison } from "@/lib/site-content";
import { Check, X, FileText, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExportComparisonSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="export-comparison" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{exportComparison.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {exportComparison.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {exportComparison.body}
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-12 card-paper overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] border-b-2 border-paper-3">
              <div className="p-4 lg:p-5 bg-paper-2/40">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                  Export capability
                </p>
              </div>
              <div className="p-4 lg:p-5 bg-paper-2/40 border-l border-paper-3 text-center">
                <div className="flex flex-col items-center gap-1">
                  <FileText className="h-4 w-4 text-ink-light" />
                  <span className="font-display text-[13px] font-semibold text-ink-2">Free</span>
                </div>
              </div>
              <div className="p-4 lg:p-5 border-l-2 border-clay/40 text-center" style={{ background: "var(--teal-pale)" }}>
                <div className="flex flex-col items-center gap-1">
                  <Crown className="h-4 w-4 text-clay" />
                  <span className="font-display text-[13px] font-semibold text-teal-deep">Premium</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {exportComparison.rows.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] border-b border-paper-3 last:border-0",
                  i % 2 === 1 && "bg-paper-2/20"
                )}
              >
                <div className="p-4 lg:p-5 flex items-center">
                  <p className="font-serif text-[13.5px] text-ink-2 leading-snug">{row.feature}</p>
                </div>
                <div className="p-4 lg:p-5 border-l border-paper-3 grid place-items-center">
                  {typeof row.free === "boolean" ? (
                    row.free ? (
                      <Check className="h-4 w-4 text-sage" />
                    ) : (
                      <X className="h-4 w-4 text-ink-faint" />
                    )
                  ) : (
                    <span className="font-serif text-[12.5px] text-ink-mid text-center">{row.free}</span>
                  )}
                </div>
                <div className="p-4 lg:p-5 border-l border-paper-3 grid place-items-center" style={{ background: "var(--teal-pale)" }}>
                  {typeof row.premium === "boolean" ? (
                    row.premium ? (
                      <Check className="h-4 w-4 text-teal" />
                    ) : (
                      <X className="h-4 w-4 text-ink-faint" />
                    )
                  ) : (
                    <span className="font-display text-[12.5px] font-semibold text-teal-deep text-center">{row.premium}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="card-paper p-5 lg:p-6 flex items-center justify-between">
              <div>
                <p className="font-display text-[15px] font-semibold text-ink">Start with Free</p>
                <p className="font-serif text-[13px] text-ink-mid mt-0.5">6-month export, no card needed</p>
              </div>
              <a href="/faq" className="btn-ghost text-[13px] !py-2 !px-4 shrink-0">Start free</a>
            </div>
            <div className="card-paper p-5 lg:p-6 flex items-center justify-between" style={{ borderColor: "var(--teal)", borderWidth: "2px" }}>
              <div>
                <p className="font-display text-[15px] font-semibold text-teal-deep">Go Premium</p>
                <p className="font-serif text-[13px] text-ink-mid mt-0.5">Full history, filtered, formatted</p>
              </div>
              <a href="#pricing" className="btn-primary text-[13px] !py-2 !px-4 shrink-0">£5/mo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
