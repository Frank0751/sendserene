"use client";

import { useReveal } from "@/hooks/use-reveal";
import { pillars } from "@/lib/site-content";
import { Mic, FileSearch, FileText, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [Mic, FileSearch, FileText];

export function PillarsSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="how" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              Three things, in order.{" "}
              <em className="accent">Capture. Understand. Prove.</em>
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.65] text-ink-mid">
              SENDSerene is not a chatbot and not a filing cabinet. It's the bit in between, the thing that turns a pile of paper into a case you can make.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
            {pillars.map((p, i) => {
              const Icon = icons[i];
              const accentVar = p.accent === "teal" ? "var(--teal)" : p.accent === "clay" ? "var(--clay)" : "var(--sage)";
              const accentPale =
                p.accent === "teal" ? "var(--teal-pale)" : p.accent === "clay" ? "var(--clay-pale)" : "var(--sage-pale)";
              return (
                <article
                  key={p.num}
                  className="card-paper p-6 lg:p-7 flex flex-col card-hover"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-[10px]"
                      style={{ background: accentPale }}
                    >
                      <Icon className="h-5 w-5" style={{ color: accentVar }} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.14em] text-ink-light">
                      {p.num} ·
                    </span>
                  </div>
                  <h3 className="font-display text-[1.5rem] font-semibold text-ink tracking-tight">{p.title}</h3>
                  <p className="mt-3 font-serif text-[14.5px] leading-[1.65] text-ink-mid">{p.body}</p>
                  <ul className="mt-5 pt-5 border-t border-paper-3 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[13px] text-ink-2 font-serif">
                        <Check className="h-[15px] w-[15px] mt-0.5 shrink-0" style={{ color: accentVar }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
