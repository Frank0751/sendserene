"use client";

import { useReveal } from "@/hooks/use-reveal";
import { notIncluded } from "@/lib/site-content";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NotIncludedSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="not-included" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{notIncluded.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {notIncluded.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {notIncluded.body}
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {notIncluded.items.map((item, i) => (
              <article
                key={i}
                className="card-paper p-5 lg:p-6 flex flex-col card-hover"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-clay-pale shrink-0">
                    <X className="h-4 w-4 text-clay" />
                  </span>
                  <h3 className="font-display text-[14.5px] font-semibold text-ink leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="font-serif text-[13px] leading-[1.6] text-ink-mid flex-1">
                  {item.body}
                </p>
                <div className="mt-4 pt-4 border-t border-paper-3">
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink-light mb-1">
                    Use instead
                  </p>
                  <p className="font-serif text-[12.5px] text-teal flex items-center gap-1.5">
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    {item.instead}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Closing note */}
          <div className="mt-10 p-6 rounded-2xl border border-paper-3 bg-paper-card text-center max-w-2xl mx-auto">
            <p className="font-serif text-[1.05rem] leading-[1.6] text-ink-2 italic">
              &ldquo;If any of the above is what you actually need, we'd rather you spent your money there than here. SENDSerene will still be here when you need to organise what comes next.&rdquo;
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
             , The SENDSerene team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
