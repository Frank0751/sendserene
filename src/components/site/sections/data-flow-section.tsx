"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { dataFlow } from "@/lib/site-content";
import { Upload, ScanLine, ShieldCheck, Sparkles, Archive, Check, X, MapPin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = { upload: Upload, scan: ScanLine, shield: ShieldCheck, sparkles: Sparkles, archive: Archive };

export function DataFlowSection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);
  const step = dataFlow.steps[active];
  const Icon = iconMap[step.icon as keyof typeof iconMap];

  return (
    <section id="data-flow" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{dataFlow.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {dataFlow.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {dataFlow.body}
            </p>
          </div>

          {/* Pipeline, horizontal on desktop, stacked on mobile */}
          <div className="mt-12">
            {/* Desktop pipeline */}
            <div className="hidden lg:flex items-stretch gap-0">
              {dataFlow.steps.map((s, i) => {
                const SIcon = iconMap[s.icon as keyof typeof iconMap];
                const isActive = active === i;
                return (
                  <div key={s.num} className="flex items-stretch flex-1">
                    <button
                      onClick={() => setActive(i)}
                      className={cn(
                        "flex-1 flex flex-col items-center text-center p-4 rounded-xl border-2 transition-all relative group",
                        isActive
                          ? "border-teal bg-teal-pale/50"
                          : "border-paper-3 bg-paper-card hover:border-ink-light/40"
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-12 w-12 place-items-center rounded-xl mb-3 transition-colors",
                          isActive ? "bg-teal text-paper" : "bg-paper-2 text-ink-light group-hover:text-teal"
                        )}
                      >
                        <SIcon className="h-6 w-6" />
                      </span>
                      <span className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.14em]",
                        isActive ? "text-teal" : "text-ink-light"
                      )}>
                        {s.num}
                      </span>
                      <span className="font-display text-[13.5px] font-semibold text-ink mt-1">{s.title}</span>
                      <span className="font-mono text-[8.5px] uppercase tracking-wider text-ink-light mt-1 flex items-center gap-1">
                        <MapPin className="h-2.5 w-2.5" /> {s.region}
                      </span>
                    </button>
                    {i < dataFlow.steps.length - 1 && (
                      <div className="flex items-center px-1">
                        <ChevronRight className={cn("h-5 w-5 transition-colors", active >= i ? "text-teal" : "text-paper-3")} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile pipeline, horizontal scroll */}
            <div className="lg:hidden flex gap-2 overflow-x-auto scroll-soft pb-2 -mx-5 px-5">
              {dataFlow.steps.map((s, i) => {
                const SIcon = iconMap[s.icon as keyof typeof iconMap];
                const isActive = active === i;
                return (
                  <button
                    key={s.num}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all shrink-0 w-24",
                      isActive ? "border-teal bg-teal-pale/50" : "border-paper-3 bg-paper-card"
                    )}
                  >
                    <span className={cn("grid h-9 w-9 place-items-center rounded-lg mb-2", isActive ? "bg-teal text-paper" : "bg-paper-2 text-ink-light")}>
                      <SIcon className="h-4 w-4" />
                    </span>
                    <span className={cn("font-mono text-[9px] uppercase tracking-wider", isActive ? "text-teal" : "text-ink-light")}>{s.num}</span>
                    <span className="font-display text-[11px] font-semibold text-ink mt-0.5 leading-tight">{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active step detail */}
            <div className="mt-6 card-paper p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-5">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal text-paper shrink-0">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay">Step {step.num}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light border border-paper-3 rounded px-1.5 py-0.5">
                      {step.region}
                    </span>
                  </div>
                  <h3 className="display mt-1 text-[1.5rem] text-ink">{step.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mt-1">{step.location}</p>
                </div>
              </div>
              <p className="font-serif text-[1.05rem] leading-[1.7] text-ink-2 mb-4">{step.body}</p>
              <div className="p-4 rounded-lg border border-paper-3 bg-paper-2/40">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-teal mb-1.5">Security detail</p>
                <p className="font-serif text-[13px] leading-[1.6] text-ink-mid">{step.detail}</p>
              </div>
            </div>
          </div>

          {/* Guarantees strip */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {dataFlow.guarantees.map((g) => (
              <div key={g.label} className="card-paper p-4 text-center card-hover">
                <p className="display text-[1.5rem] text-teal tnum leading-none">{g.value}</p>
                <p className="mt-2 font-display text-[12.5px] font-semibold text-ink leading-tight">{g.label}</p>
                <p className="mt-1 font-mono text-[8.5px] uppercase tracking-wider text-ink-light leading-snug">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
