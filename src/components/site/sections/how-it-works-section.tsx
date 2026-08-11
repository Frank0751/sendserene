"use client";

import { useReveal } from "@/hooks/use-reveal";
import { howItWorks } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HowItWorksSection({ showTeaser = false }: { showTeaser?: boolean }) {
  const { ref, visible } = useReveal();

  return (
    <section id="how" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">{howItWorks.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {howItWorks.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {howItWorks.body}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {howItWorks.steps.map((step) => (
              <article key={step.num} className="card-paper p-7 lg:p-8 card-hover">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-4">
                  {step.num} — {step.label}
                </p>
                <h3 className="font-display text-[1.2rem] font-semibold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="font-serif text-[14px] leading-[1.65] text-ink-mid">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          {showTeaser && (
            <div className="mt-10">
              <a
                href="/how-it-works"
                className="btn-ghost inline-flex items-center gap-2 text-[14px]"
              >
                See how it works in detail
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
