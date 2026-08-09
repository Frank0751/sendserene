"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { pricing } from "@/lib/site-content";
import { Check, Minus, Users, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const { ref, visible } = useReveal();
  const [children, setChildren] = useState(2);
  const [cycle, setCycle] = useState<"month" | "year">("month");

  // Premium: £5/mo covers 2 children, +£2/mo each additional. £48/yr covers 2, +£20/yr each additional.
  const extra = Math.max(0, children - pricing.premium.baseChildren);
  const monthly = pricing.premium.basePrice + extra * pricing.premium.extraChildMonthly;
  const yearly = pricing.premium.yearlyPrice + extra * pricing.premium.extraChildYearly;
  const display = cycle === "month" ? monthly : yearly;
  const period = cycle === "month" ? "month" : "year";
  const savings = monthly * 12 - yearly;

  return (
    <section id="pricing" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{pricing.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              Free to start.{" "}
              <em className="accent">£5 a month when it matters.</em>
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">{pricing.body}</p>
          </div>

          {/* Plans */}
          <div className="mt-12 grid lg:grid-cols-[1fr_1.15fr] gap-5 lg:gap-6 items-start">
            {/* Free */}
            <article className="card-paper p-7 lg:p-8 flex flex-col">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[1.4rem] font-semibold text-ink">{pricing.free.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                  {pricing.free.period}
                </span>
              </div>
              <p className="mt-2 font-serif text-[14px] text-ink-mid">{pricing.free.blurb}</p>
              <p className="mt-5 display text-[3.25rem] text-ink tnum leading-none">
                {pricing.free.price}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {pricing.free.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] font-serif text-ink-2">
                    <Check className="h-[15px] w-[15px] text-teal mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/faq" className="btn-ghost mt-7 justify-center text-sm">
                {pricing.free.cta}
              </a>
            </article>

            {/* Premium, with calculator */}
            <article
              className="relative rounded-[14px] overflow-hidden border-2 flex flex-col"
              style={{ borderColor: "var(--teal)", background: "var(--paper-card)" }}
            >
              <div className="px-7 lg:px-8 pt-7 lg:pt-8 pb-5 border-b border-paper-3" style={{ background: "var(--teal-pale)" }}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-[1.4rem] font-semibold text-teal-deep">{pricing.premium.name}</h3>
                  <span className="tag tag-cat" style={{ fontSize: "9px" }}>Most chosen</span>
                </div>
                <p className="mt-2 font-serif text-[14px] text-teal-deep/80">{pricing.premium.blurb}</p>

                {/* Calculator */}
                <div className="mt-6 p-4 rounded-xl bg-paper-card border border-paper-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                      <Users className="h-3.5 w-3.5" /> Children on the account
                    </span>
                    <span className="font-display text-[1.5rem] font-semibold text-ink tnum leading-none">{children}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setChildren(Math.max(1, children - 1))}
                      className="grid h-8 w-8 place-items-center rounded-md border border-paper-3 bg-paper-2 text-ink hover:border-ink-light/40"
                      aria-label="Fewer children"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="range"
                      min={1}
                      max={6}
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="flex-1 accent-[var(--teal)]"
                      aria-label="Number of children"
                    />
                    <button
                      onClick={() => setChildren(Math.min(6, children + 1))}
                      className="grid h-8 w-8 place-items-center rounded-md border border-paper-3 bg-paper-2 text-ink hover:border-ink-light/40"
                      aria-label="More children"
                    >
                      <span className="text-lg leading-none">+</span>
                    </button>
                  </div>

                  {/* Cycle toggle */}
                  <div className="mt-4 flex gap-1 p-1 rounded-lg bg-paper-2 border border-paper-3">
                    <button
                      onClick={() => setCycle("month")}
                      className={cn(
                        "flex-1 px-3 py-1.5 rounded-md text-[12px] font-display transition-colors flex items-center justify-center gap-1.5",
                        cycle === "month" ? "bg-paper-card text-ink shadow-sm" : "text-ink-mid"
                      )}
                    >
                      <Calendar className="h-3 w-3" /> Monthly
                    </button>
                    <button
                      onClick={() => setCycle("year")}
                      className={cn(
                        "flex-1 px-3 py-1.5 rounded-md text-[12px] font-display transition-colors flex items-center justify-center gap-1.5",
                        cycle === "year" ? "bg-paper-card text-ink shadow-sm" : "text-ink-mid"
                      )}
                    >
                      <Calendar className="h-3 w-3" /> Yearly
                      {savings > 0 && (
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-sage">save £{savings}</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="display text-[3.25rem] text-teal tnum leading-none">£{display}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-teal-deep/70">/ {period}</span>
                </div>
                <p className="mt-1.5 font-serif text-[12.5px] text-teal-deep/80">
                  {children <= 2
                    ? "Covers up to 2 children."
                    : `Covers ${children} children (${extra} additional @ £${cycle === "month" ? pricing.premium.extraChildMonthly : pricing.premium.extraChildYearly}/${period}).`}
                </p>
              </div>

              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {pricing.premium.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] font-serif text-ink-2">
                      <Check className="h-[15px] w-[15px] text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/faq" className="btn-primary mt-7 justify-center text-sm">
                  {pricing.premium.cta} <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light text-center">
                  {pricing.premium.note}
                </p>
              </div>
            </article>
          </div>

          {/* Comparison strip */}
          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-center">
            {[
              { label: "Cancel anytime", sub: "From the billing portal. No calls." },
              { label: "UK VAT via Stripe Tax", sub: "Handled at checkout." },
              { label: "Your data, your call", sub: "Export or delete anytime, any plan." },
            ].map((x) => (
              <div key={x.label} className="p-4 rounded-lg border border-paper-3 bg-paper-card">
                <p className="font-display text-[13.5px] font-medium text-ink">{x.label}</p>
                <p className="font-serif text-[12px] text-ink-light mt-1">{x.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
