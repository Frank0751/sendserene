"use client";

import { useReveal } from "@/hooks/use-reveal";
import { builtBy } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function BuiltBySection() {
  const { ref, visible } = useReveal();
  return (
    <section id="built-by" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow">{builtBy.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                {builtBy.title}
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {builtBy.body}
              </p>

              <dl className="mt-8 grid sm:grid-cols-2 gap-5">
                <div className="p-4 rounded-lg border border-paper-3 bg-paper-card">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light">Product owner</dt>
                  <dd className="font-display text-[15px] font-medium text-ink mt-1">Zifankrah Ltd</dd>
                  <dd className="font-serif text-[12px] text-ink-mid mt-0.5">Data Controller · UK</dd>
                </div>
                <div className="p-4 rounded-lg border border-paper-3 bg-paper-card">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light">Built by</dt>
                  <dd className="font-display text-[15px] font-medium text-ink mt-1">KoomBei Digital Limited</dd>
                  <dd className="font-serif text-[12px] text-ink-mid mt-0.5">Data Processor · Accra, Ghana</dd>
                </div>
                <div className="p-4 rounded-lg border border-paper-3 bg-paper-card">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light">Project reference</dt>
                  <dd className="font-display text-[15px] font-medium text-ink mt-1 tnum">{builtBy.ref}</dd>
                </div>
                <div className="p-4 rounded-lg border border-paper-3 bg-paper-card">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light">Engagement</dt>
                  <dd className="font-display text-[15px] font-medium text-ink mt-1">Founding-client rate</dd>
                  <dd className="font-serif text-[12px] text-ink-mid mt-0.5">Reflecting social purpose</dd>
                </div>
              </dl>
            </div>

            <figure className="relative">
              <div
                className="absolute -inset-3 rounded-2xl opacity-90 rotate-1"
                style={{ background: "linear-gradient(135deg, var(--teal-deep), var(--teal))" }}
                aria-hidden
              />
              <blockquote className="relative p-8 lg:p-10 text-center">
                <p className="font-display text-[1.75rem] sm:text-[2rem] font-semibold leading-[1.2] text-paper italic">
                  &ldquo;{builtBy.quote}&rdquo;
                </p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-clay-pale">
                 , {builtBy.quoteBy}
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
