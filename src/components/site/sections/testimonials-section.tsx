"use client";

import { useReveal } from "@/hooks/use-reveal";
import { testimonials } from "@/lib/site-content";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="scenarios" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {testimonials.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {testimonials.body}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:gap-6">
            {testimonials.items.map((item, i) => {
              const accentVar = item.accent === "teal" ? "#1f5158" : item.accent === "clay" ? "#b85c38" : "#5a7548";
              const accentPale = item.accent === "teal" ? "#e4ecec" : item.accent === "clay" ? "#f3e2d6" : "#e6ecdc";
              return (
                <article
                  key={i}
                  className="card-paper p-6 lg:p-8 card-hover"
                >
                  <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10 items-start">
                    {/* Left, scenario label */}
                    <div>
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-[0.14em]"
                        style={{ background: accentPale, color: accentVar }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accentVar }} />
                        Scenario {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="display mt-4 text-[1.5rem] lg:text-[1.75rem] text-ink leading-[1.15]">
                        {item.scenario}
                      </h3>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                        {item.persona}
                      </p>
                    </div>

                    {/* Right, quote + detail */}
                    <div className="relative">
                      <Quote
                        className="h-8 w-8 mb-3"
                        style={{ color: accentVar, opacity: 0.3 }}
                        aria-hidden
                      />
                      <blockquote className="font-serif text-[1.1rem] lg:text-[1.25rem] leading-[1.55] text-ink-2 italic">
                        {item.quote}
                      </blockquote>
                      <div
                        className="mt-5 pt-5 border-t border-paper-3 flex items-start gap-2.5"
                      >
                        <span
                          className="grid h-6 w-6 place-items-center rounded-full shrink-0 mt-0.5"
                          style={{ background: accentPale }}
                        >
                          <span className="font-mono text-[10px] font-semibold" style={{ color: accentVar }}>→</span>
                        </span>
                        <p className="font-serif text-[14px] leading-[1.6] text-ink-mid">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
