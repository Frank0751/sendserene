"use client";

import { useReveal } from "@/hooks/use-reveal";
import { stats, problem } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function StatBand() {
  const { ref, visible } = useReveal();
  return (
    <section className="border-y border-paper-3 bg-paper-2/40">
      <div ref={ref} className={cn("reveal", visible && "is-visible")}>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-3 gap-px bg-paper-3 rounded-xl overflow-hidden border border-paper-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper-card p-6 lg:p-8">
                <p className="display text-[2.75rem] lg:text-[3.25rem] text-teal tnum leading-none">
                  {s.figure}
                  <span className="text-[1.5rem] lg:text-[1.75rem] text-teal-light">{s.suffix}</span>
                </p>
                <p className="mt-3 font-serif text-[14px] leading-snug text-ink-2">{s.label}</p>
                <p className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light">
                  {s.source} · {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="problem" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <p className="eyebrow">{problem.eyebrow}</p>
          <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink max-w-[20ch]">
            {problem.title}
          </h2>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="space-y-5">
              {problem.body.map((p, i) => (
                <p key={i} className="font-serif text-[1.05rem] leading-[1.7] text-ink-2">
                  {p}
                </p>
              ))}
            </div>

            <figure className="relative">
              <div
                className="absolute -inset-3 rounded-2xl opacity-90"
                style={{ background: "linear-gradient(135deg, var(--teal-deep), var(--teal))" }}
                aria-hidden
              />
              <blockquote className="relative p-7 lg:p-9">
                <span
                  className="font-display text-[5rem] leading-none text-clay-pale/40 absolute top-2 left-4"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="relative font-serif text-[1.25rem] lg:text-[1.4rem] leading-[1.5] text-paper italic">
                  {problem.pullquote.text}
                </p>
                <figcaption className="relative mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60">
                 , {problem.pullquote.cite}
                </figcaption>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
