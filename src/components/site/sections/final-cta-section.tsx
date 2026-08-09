"use client";

import { useReveal } from "@/hooks/use-reveal";
import { finalCta } from "@/lib/site-content";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, var(--teal-deep), var(--teal))" }}
        aria-hidden
      />
      {/* Ambient warm glows, terracotta on teal, not purple on blue */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, rgba(184,92,56,0.45), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, rgba(214,155,88,0.35), transparent 70%)" }}
        aria-hidden
      />
      <div className="paper-grain relative">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-clay-pale flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-pale" />
              Start the record
            </p>
            <h2 className="display mt-5 text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] text-paper max-w-[16ch] mx-auto leading-[1.05]">
              {finalCta.title}
            </h2>
            <p className="mt-6 font-serif text-[1.1rem] leading-[1.65] text-paper/80 max-w-[42rem] mx-auto">
              {finalCta.body}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 bg-paper text-teal-deep font-display font-medium text-[15px] px-6 py-3.5 rounded-lg transition-transform hover:scale-[1.02]"
                style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.25)" }}
              >
                {finalCta.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 border border-paper/30 text-paper font-display font-medium text-[15px] px-6 py-3.5 rounded-lg transition-colors hover:bg-paper/10"
              >
                <MessageCircle className="h-4 w-4" />
                {finalCta.secondaryCta}
              </a>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/50">
              Free to start · No card · Cancel anytime · Sixteen languages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
