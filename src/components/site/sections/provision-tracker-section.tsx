"use client";

import { useReveal } from "@/hooks/use-reveal";
import { provisionTracker } from "@/lib/site-content";
import { Check, AlertTriangle, X, Clock, FileWarning } from "lucide-react";
import { cn } from "@/lib/utils";

const statusConfig: Record<string, { icon: typeof Check; label: string; tag: string; color: string }> = {
  delivered: { icon: Check, label: "Delivered", tag: "tag-positive", color: "#5a7548" },
  partial: { icon: Clock, label: "Partial", tag: "tag-neutral", color: "#c0852a" },
  missing: { icon: X, label: "Not seen", tag: "tag-concern", color: "#5a7a8c" },
  contradicted: { icon: FileWarning, label: "Contradicted", tag: "tag-urgent", color: "#8a3527" },
};

export function ProvisionTrackerSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="provision-tracker" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[9.5px] uppercase tracking-[0.14em] border border-paper-3 bg-paper-card text-ink-light mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              {provisionTracker.eyebrow}
            </span>
            <h2 className="display text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {provisionTracker.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {provisionTracker.body}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
            {/* Left, how it works */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light mb-5">
                How it will work
              </p>
              <ol className="space-y-4">
                {provisionTracker.how.map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-pale text-teal font-mono text-[12px] font-semibold shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-display text-[14.5px] font-semibold text-ink">{step.title}</p>
                      <p className="mt-1 font-serif text-[13px] leading-[1.6] text-ink-mid">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-light leading-relaxed flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-clay mt-1.5 shrink-0" />
                {provisionTracker.note}
              </p>
            </div>

            {/* Right, mock provision tracker */}
            <div className="card-paper overflow-hidden">
              <div className="px-5 py-3.5 border-b border-paper-3 bg-paper-2/40 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                  Section F · provision tracker
                </p>
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink-light tnum">
                  5 items
                </span>
              </div>
              <div className="divide-y divide-paper-3">
                {provisionTracker.mock.map((item, i) => {
                  const cfg = statusConfig[item.status];
                  const StatusIcon = cfg.icon;
                  return (
                    <div key={i} className="p-4 lg:p-5 hover:bg-paper-2/20 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="font-serif text-[13.5px] text-ink-2 leading-snug flex-1">
                          {item.provision}
                        </p>
                        <span
                          className={cn("tag shrink-0", cfg.tag)}
                          style={{ fontSize: "8.5px" }}
                        >
                          <StatusIcon className="h-2.5 w-2.5" />
                          {cfg.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light tnum">
                          {item.entries} {item.entries === 1 ? "entry" : "entries"}
                        </span>
                        <span className="font-serif text-[12px] italic text-ink-mid">
                          {item.note}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-5 py-3.5 border-t border-paper-3 bg-paper-2/40 flex items-center justify-between">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light">
                  Illustrative mock · Phase 2 feature
                </p>
                <button className="font-mono text-[10px] uppercase tracking-wider text-teal hover:text-teal-deep">
                  Export gap report →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
