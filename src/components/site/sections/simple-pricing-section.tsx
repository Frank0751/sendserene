"use client";

import { useReveal } from "@/hooks/use-reveal";
import { pricing } from "@/lib/site-content";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SimplePricingSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="pricing" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">{pricing.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {pricing.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl">
            {/* Free */}
            <article className="card-paper p-7 lg:p-8 flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-2">
                {pricing.free.name}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="display text-[3rem] text-ink tnum leading-none">
                  {pricing.free.price}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-light">
                  / {pricing.free.period}
                </span>
              </div>
              <ul className="space-y-3 flex-1">
                {pricing.free.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] font-serif text-ink-2">
                    <Check className="h-[15px] w-[15px] text-teal mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/faq" className="btn-ghost mt-8 justify-center text-sm">
                {pricing.free.cta}
              </a>
            </article>

            {/* Premium */}
            <article
              className="relative rounded-[14px] overflow-hidden border-2 flex flex-col p-7 lg:p-8"
              style={{ borderColor: "var(--clay)", background: "var(--paper-card)" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-2">
                {pricing.premium.name}
              </p>
              <div className="flex items-baseline gap-2 flex-wrap mb-6">
                <span className="display text-[3rem] text-ink tnum leading-none">
                  £{pricing.premium.basePrice}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-light">
                  / month
                </span>
                <span className="font-mono text-[11px] text-ink-light">
                  — £{pricing.premium.yearlyPrice} / year
                </span>
              </div>
              <ul className="space-y-3 flex-1">
                {pricing.premium.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] font-serif text-ink-2">
                    <Check className="h-[15px] w-[15px] text-clay mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/faq" className="btn-primary mt-8 justify-center text-sm">
                {pricing.premium.cta}
              </a>
            </article>
          </div>

          <p className="mt-8 font-serif text-[14px] text-ink-mid max-w-xl">
            {pricing.body}
          </p>
        </div>
      </div>
    </section>
  );
}
