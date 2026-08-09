"use client";

import { useReveal } from "@/hooks/use-reveal";
import { security } from "@/lib/site-content";
import { ShieldCheck, Lock, FileLock, ScrollText, Cloud, AudioLines, KeyRound, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [ShieldCheck, Lock, ScrollText, Cloud, FileLock, AudioLines, KeyRound, Fingerprint];

export function SecuritySection() {
  const { ref, visible } = useReveal();
  return (
    <section id="security" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">{security.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                Special category data,{" "}
                <em className="accent">treated like it.</em>
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {security.body}
              </p>

              <div className="mt-7 p-5 rounded-xl border border-paper-3 bg-paper-2/40">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light mb-2">
                  Data classification
                </p>
                <p className="font-serif text-[13.5px] leading-[1.6] text-ink-2">
                  Health and disability information about children. Under UK GDPR this is{" "}
                  <strong className="accent">special category data concerning vulnerable data subjects</strong>, the highest-protection tier in UK data protection law.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {security.points.map((p, i) => {
                const Icon = icons[i];
                return (
                  <article key={p.title} className="card-paper p-5 lg:p-6 card-hover">
                    <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-teal-pale mb-4">
                      <Icon className="h-5 w-5 text-teal" />
                    </span>
                    <h3 className="font-display text-[15px] font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 font-serif text-[13px] leading-[1.6] text-ink-mid">{p.body}</p>
                  </article>
                );
              })}
            </div>

            {/* International transfer protocol */}
            <div className="mt-10 p-6 lg:p-8 rounded-2xl border border-paper-3 bg-paper-card">
              <p className="eyebrow">{security.internationalTransfer.title}</p>
              <p className="mt-4 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {security.internationalTransfer.body}
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {security.internationalTransfer.points.map((p, i) => (
                  <div key={i} className="p-4 rounded-lg border border-paper-3 bg-paper-2/30">
                    <p className="font-display text-[14px] font-semibold text-teal-deep mb-1.5">{p.title}</p>
                    <p className="font-serif text-[13px] leading-[1.6] text-ink-mid">{p.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light leading-relaxed">
                This protocol is attached as an annex to the Data Processing Agreement between Zifankrah Ltd (Data Controller) and KoomBei Digital Limited (Data Processor).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
