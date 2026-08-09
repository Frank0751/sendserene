"use client";

import { useReveal } from "@/hooks/use-reveal";
import { personas } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PersonasSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">Wherever you are</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              No point in the process is too early.{" "}
              <em className="accent">None is too late.</em>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
            {personas.map((p) => {
              const accentVar =
                p.accent === "teal" ? "var(--teal)" : p.accent === "clay" ? "var(--clay)" : "var(--sage)";
              const accentPale =
                p.accent === "teal" ? "var(--teal-pale)" : p.accent === "clay" ? "var(--clay-pale)" : "var(--sage-pale)";
              return (
                <article
                  key={p.stage}
                  className="card-paper p-6 lg:p-7 flex flex-col card-hover group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-2 w-2 rounded-full" style={{ background: accentVar }} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light">
                      {p.stage}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.4rem] font-semibold text-ink tracking-tight">{p.title}</h3>
                  <p className="mt-3 font-serif text-[14px] leading-[1.65] text-ink-mid flex-1">{p.body}</p>
                  <a
                    href="/pricing"
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-[13.5px] font-medium transition-colors group-hover:gap-2.5"
                    style={{ color: accentVar }}
                  >
                    {p.cta} <ArrowRight className="h-4 w-4 transition-all" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
