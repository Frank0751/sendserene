"use client";

import { useReveal } from "@/hooks/use-reveal";
import { whereYouAre } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * "Where are you on the clock?"
 *
 * A stage-based entry point. Laid out as a single vertical spine with the
 * stage markers on a rail, rather than a row of equal cards, so it reads as
 * a timeline you are somewhere along, which is the actual mental model a
 * parent has. Each stage routes into the part of the product that helps at
 * that point.
 */
export function WhereYouAreSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="where-you-are" className="border-y border-paper-3 bg-paper-2/40 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          {/* Intro sits left, deliberately not centred */}
          <div className="max-w-2xl">
            <p className="eyebrow">{whereYouAre.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              The clock is already running.{" "}
              <em className="accent">Where are you on it?</em>
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {whereYouAre.body}
            </p>
          </div>

          {/* Spine */}
          <ol className="mt-12 relative">
            {/* The rail itself, hidden on small screens where it would crowd */}
            <span
              className="hidden sm:block absolute left-[7.25rem] top-2 bottom-2 w-px bg-paper-3"
              aria-hidden
            />

            {whereYouAre.stages.map((s, i) => (
              <li
                key={s.href}
                className="relative sm:grid sm:grid-cols-[7.25rem_1fr] sm:gap-8 py-6 first:pt-0 last:pb-0 border-b border-paper-3/70 last:border-b-0"
              >
                {/* Marker column */}
                <div className="sm:text-right sm:pr-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                    {s.marker}
                  </span>
                </div>

                {/* Node on the rail */}
                <span
                  className="hidden sm:block absolute left-[7.25rem] top-[1.95rem] -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-clay ring-4 ring-paper-2"
                  aria-hidden
                />

                <div className="mt-2 sm:mt-0">
                  <h3 className="font-display text-[1.15rem] sm:text-[1.25rem] font-semibold text-ink leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-serif text-[0.98rem] leading-[1.65] text-ink-mid max-w-[46rem]">
                    {s.body}
                  </p>
                  <a
                    href={s.href}
                    className="mt-3 inline-flex items-center gap-1.5 min-h-6 py-1 font-display text-[13.5px] font-medium text-teal hover:text-teal-deep transition-colors group"
                  >
                    {s.action}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 font-mono text-[10.5px] leading-[1.6] text-ink-light max-w-2xl">
            {whereYouAre.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
