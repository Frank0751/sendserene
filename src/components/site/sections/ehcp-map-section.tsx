"use client";

import { useReveal } from "@/hooks/use-reveal";
import { ehcpMap } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function EhcpMapSection() {
  const { ref, visible } = useReveal();

  const colorMap = {
    teal: { bg: "#e4ecec", text: "#1f5158", border: "#1f5158" },
    clay: { bg: "#f3e2d6", text: "#b85c38", border: "#b85c38" },
    sage: { bg: "#e6ecdc", text: "#5a7548", border: "#5a7548" },
  };

  return (
    <section id="ehcp-map" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{ehcpMap.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {ehcpMap.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {ehcpMap.body}
            </p>
          </div>

          {/* Connection cards */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {ehcpMap.connections.map((conn, i) => {
              const c = colorMap[conn.color];
              return (
                <article
                  key={i}
                  className="card-paper p-5 lg:p-6 card-hover flex flex-col min-h-[200px]"
                >
                  {/* From → To visual */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* From */}
                    <div className="flex flex-col items-center shrink-0">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-xl font-display text-[1.4rem] font-bold"
                        style={{ background: c.bg, color: c.text, border: `2px solid ${c.border}` }}
                      >
                        {conn.from}
                      </span>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-ink-light mt-1.5 text-center max-w-[80px] leading-tight">
                        {conn.fromTitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-1 flex flex-col items-center pt-3">
                      <ArrowRight className="h-5 w-5" style={{ color: c.text }} />
                      <div
                        className="h-px w-full mt-1"
                        style={{ background: `linear-gradient(to right, ${c.border}, ${c.border}40, ${c.border})` }}
                      />
                    </div>

                    {/* To */}
                    <div className="flex flex-col items-center shrink-0">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-xl font-display text-[1.4rem] font-bold"
                        style={{ background: c.bg, color: c.text, border: `2px solid ${c.border}` }}
                      >
                        {conn.to}
                      </span>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-ink-light mt-1.5 text-center max-w-[80px] leading-tight">
                        {conn.toTitle}
                      </p>
                    </div>
                  </div>

                  {/* Principle */}
                  <p className="font-serif text-[13.5px] leading-[1.6] text-ink-2 pt-4 border-t border-paper-3 mt-auto">
                    {conn.principle}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-8 p-5 rounded-xl border border-paper-3 bg-paper-card flex items-start gap-3">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-clay shrink-0 mt-0.5">
              Check
            </span>
            <p className="font-serif text-[14px] leading-[1.6] text-ink-2">
              When SENDSerene decodes an EHCP, it maps every need to its provision and every outcome to its need. Gaps are flagged in the decode result, so you walk into a review knowing exactly where the plan is thin, before anyone else in the room does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
