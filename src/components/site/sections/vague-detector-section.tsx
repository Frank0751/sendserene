"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { vagueDetector } from "@/lib/site-content";
import { AlertTriangle, ArrowRight, X, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function VagueDetectorSection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);
  const sample = vagueDetector.samples[active];

  return (
    <section id="vague-detector" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{vagueDetector.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {vagueDetector.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {vagueDetector.body}
            </p>
          </div>

          {/* Interactive sample viewer */}
          <div className="mt-12 card-paper overflow-hidden">
            {/* Header / nav */}
            <div className="px-5 py-3.5 border-b border-paper-3 bg-paper-2/40 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                Sample {active + 1} of {vagueDetector.samples.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="grid h-7 w-7 place-items-center rounded-md border border-paper-3 bg-paper-card text-ink-light hover:text-teal disabled:opacity-30"
                  aria-label="Previous sample"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActive(Math.min(vagueDetector.samples.length - 1, active + 1))}
                  disabled={active === vagueDetector.samples.length - 1}
                  className="grid h-7 w-7 place-items-center rounded-md border border-paper-3 bg-paper-card text-ink-light hover:text-teal disabled:opacity-30"
                  aria-label="Next sample"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-5 lg:p-7 space-y-5">
              {/* Vague wording */}
              <div className="p-4 rounded-lg border border-signal/30" style={{ background: "rgba(138, 53, 39, 0.04)" }}>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-signal mb-2 flex items-center gap-1.5">
                  <X className="h-3.5 w-3.5" />
                  As written · {sample.severity} severity
                </p>
                <p className="font-serif text-[1rem] leading-[1.6] text-ink-2 italic">
                  &ldquo;{sample.vague}&rdquo;
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-clay">
                  <span className="h-px w-12 bg-paper-3" />
                  Push for this instead
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Enforceable wording */}
              <div className="p-4 rounded-lg border border-sage/30 bg-sage-pale/20">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-sage mb-2 flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5" />
                  Enforceable
                </p>
                <p className="font-serif text-[1rem] leading-[1.6] text-ink-2">
                  {sample.enforceable}
                </p>
              </div>

              {/* Why */}
              <div className="p-4 rounded-lg bg-paper-2/40 border border-paper-3">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-light mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-clay" />
                  Why the original won't hold up
                </p>
                <p className="font-serif text-[13.5px] leading-[1.6] text-ink-2">
                  {sample.why}
                </p>
              </div>
            </div>

            {/* Dot nav */}
            <div className="px-5 py-3.5 border-t border-paper-3 bg-paper-2/40 flex items-center justify-center gap-1.5">
              {vagueDetector.samples.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active ? "w-6 bg-clay" : "w-1.5 bg-paper-3 hover:bg-ink-light"
                  )}
                  aria-label={`Sample ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Summary stats */}
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { stat: vagueDetector.samples.length, label: "Common vague phrases flagged", sub: "in the detector library" },
              { stat: "4", label: "Statutory categories covered", sub: "Communication, Cognition, SEMH, Sensory" },
              { stat: "100%", label: "Of decodes checked", sub: "for unenforceable wording" },
            ].map((s) => (
              <div key={s.label} className="card-paper p-5 text-center">
                <p className="display text-[2rem] text-teal tnum leading-none">{s.stat}</p>
                <p className="mt-2 font-serif text-[13px] text-ink-2 leading-snug">{s.label}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink-light">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
