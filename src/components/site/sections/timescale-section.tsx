"use client";

import { useReveal } from "@/hooks/use-reveal";
import { timescaleTable } from "@/lib/site-content";
import { Clock, AlertCircle, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function TimescaleSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="timescales" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{timescaleTable.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {timescaleTable.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {timescaleTable.body}
            </p>
          </div>

          {/* Table */}
          <div className="mt-12 card-paper overflow-hidden">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-[80px_1fr_140px_1.4fr] gap-4 px-5 py-3.5 border-b-2 border-paper-3 bg-paper-2/40">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">Week</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">Event</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">Who</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">Legal duty</p>
            </div>

            {timescaleTable.rows.map((row, i) => {
              const isFinal = row.week === 20;
              return (
                <div
                  key={row.week}
                  className={cn(
                    "sm:grid sm:grid-cols-[80px_1fr_140px_1.4fr] sm:gap-4 px-5 py-4 border-b border-paper-3 last:border-0",
                    isFinal && "bg-clay-pale/20",
                    i % 2 === 1 && !isFinal && "bg-paper-2/20"
                  )}
                >
                  {/* Week, mobile inline, desktop column */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-lg font-mono text-[13px] font-semibold tnum shrink-0",
                        isFinal ? "bg-clay text-paper" : "bg-teal-pale text-teal-deep"
                      )}
                    >
                      {row.week}
                    </span>
                    <span className="sm:hidden font-mono text-[9px] uppercase tracking-wider text-ink-light">
                      {row.who}
                    </span>
                  </div>

                  <div className="sm:py-0.5">
                    <p className="font-display text-[14px] font-semibold text-ink leading-snug">
                      {row.event}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-clay mt-1 sm:hidden">
                      {row.source}
                    </p>
                  </div>

                  <p className="hidden sm:block font-serif text-[12.5px] text-ink-mid py-0.5">
                    {row.who}
                  </p>

                  <div className="sm:py-0.5 mt-1 sm:mt-0">
                    <p className="font-serif text-[13px] leading-[1.55] text-ink-2">{row.duty}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light mt-1.5 hidden sm:block">
                      Source: {row.source}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Appeal window callout */}
          <div className="mt-6 p-5 lg:p-6 rounded-xl border border-paper-3 bg-paper-2/30 flex flex-col sm:flex-row gap-4 sm:items-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay-pale shrink-0">
              <Scale className="h-6 w-6 text-clay" />
            </span>
            <div className="flex-1">
              <p className="font-display text-[15px] font-semibold text-ink">{timescaleTable.appealWindow.title}</p>
              <p className="mt-1.5 font-serif text-[13.5px] leading-[1.6] text-ink-mid">
                {timescaleTable.appealWindow.body}
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <p className="font-display text-[1.75rem] font-semibold text-clay tnum leading-none">
                {timescaleTable.appealWindow.period}
              </p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light mt-1">
                from {timescaleTable.appealWindow.from}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-5 flex items-start gap-2 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-light leading-relaxed">
            <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-clay" />
            {timescaleTable.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
