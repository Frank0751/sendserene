"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { onboarding } from "@/lib/site-content";
import { Mic, FileSearch, LayoutDashboard, ArrowRight, ArrowLeft, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const stepIcons = [Mic, FileSearch, LayoutDashboard];

export function OnboardingSection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);
  const step = onboarding.steps[active];
  const Icon = stepIcons[active];

  return (
    <section id="onboarding" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{onboarding.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {onboarding.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {onboarding.body}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-10 items-start">
            {/* Step nav */}
            <div className="flex lg:flex-col gap-2">
              {onboarding.steps.map((s, i) => {
                const StepIcon = stepIcons[i];
                return (
                  <button
                    key={s.num}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all shrink-0 lg:w-full",
                      active === i
                        ? "border-teal bg-teal-pale/50"
                        : "border-paper-3 bg-paper-card hover:border-ink-light/40"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-lg shrink-0 font-mono text-[12px] font-semibold",
                        active === i ? "bg-teal text-paper" : "bg-paper-2 text-ink-light"
                      )}
                    >
                      {s.num}
                    </span>
                    <div className="min-w-0 hidden lg:block">
                      <p className="font-mono text-[8.5px] uppercase tracking-wider text-ink-light">
                        {s.subtitle}
                      </p>
                      <p className="font-display text-[13px] font-medium text-ink leading-tight mt-0.5">
                        {s.title}
                      </p>
                    </div>
                    <StepIcon className={cn("h-4 w-4 lg:hidden", active === i ? "text-teal" : "text-ink-light")} />
                  </button>
                );
              })}
              <div className="hidden lg:flex items-center gap-2 p-3.5 mt-2">
                <X className="h-3.5 w-3.5 text-ink-faint" />
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light leading-relaxed">
                  {onboarding.skip}
                </p>
              </div>
            </div>

            {/* Step content, phone mockup style */}
            <div className="card-paper overflow-hidden">
              <div className="window-chrome">
                <span className="window-dot" style={{ background: "#e0896a" }} />
                <span className="window-dot" style={{ background: "#d4b06a" }} />
                <span className="window-dot" style={{ background: "#7fae9a" }} />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">
                  sendserene · welcome · step {active + 1} of {onboarding.steps.length}
                </span>
              </div>

              <div className="p-6 lg:p-10">
                {/* Progress dots */}
                <div className="flex items-center gap-1.5 mb-8">
                  {onboarding.steps.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all",
                        i === active ? "w-10 bg-teal" : i < active ? "w-6 bg-teal-light" : "w-6 bg-paper-3"
                      )}
                    />
                  ))}
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <span
                    className="grid h-14 w-14 place-items-center rounded-2xl shrink-0"
                    style={{ background: "var(--teal-pale)" }}
                  >
                    <Icon className="h-7 w-7 text-teal" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay">
                      {step.subtitle}
                    </p>
                    <h3 className="display mt-1 text-[1.5rem] lg:text-[1.75rem] text-ink leading-[1.15]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="font-serif text-[1.05rem] leading-[1.7] text-ink-2 mb-5">
                  {step.body}
                </p>

                {/* Tip box */}
                <div className="p-4 rounded-lg border border-clay/20 bg-clay-pale/20 flex items-start gap-3 mb-7">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-clay shrink-0 mt-0.5">
                    Tip
                  </span>
                  <p className="font-serif text-[13.5px] leading-[1.6] text-ink-2 italic">
                    {step.tip}
                  </p>
                </div>

                {/* Nav buttons */}
                <div className="flex items-center justify-between pt-5 border-t border-paper-3">
                  <button
                    onClick={() => setActive(Math.max(0, active - 1))}
                    disabled={active === 0}
                    className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-light hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Back
                  </button>

                  <span className="font-mono text-[11px] tnum text-ink-light">
                    {active + 1} / {onboarding.steps.length}
                  </span>

                  {active < onboarding.steps.length - 1 ? (
                    <button
                      onClick={() => setActive(Math.min(onboarding.steps.length - 1, active + 1))}
                      className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-teal hover:text-teal-deep transition-colors"
                    >
                      Next <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-sage">
                      <Check className="h-3.5 w-3.5" /> Done
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
