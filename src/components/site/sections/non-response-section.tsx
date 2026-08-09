"use client";

import { useReveal } from "@/hooks/use-reveal";
import { nonResponse } from "@/lib/site-content";
import { Clock, Bell, FileWarning, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const statusConfig = {
  overdue: { label: "Overdue", color: "#8a3527", bg: "#f3e2d6", tag: "tag-urgent" },
  pending: { label: "Pending", color: "#c0852a", bg: "#f0e4c8", tag: "tag-neutral" },
  replied: { label: "Replied", color: "#5a7548", bg: "#e6ecdc", tag: "tag-positive" },
};

export function NonResponseSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="non-response" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
            {/* Left, copy + how it works */}
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">{nonResponse.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                {nonResponse.title}
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {nonResponse.body}
              </p>

              <ol className="mt-8 space-y-4">
                {nonResponse.how.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-pale text-teal font-mono text-[11px] font-semibold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-[14px] font-semibold text-ink">{step.step}</p>
                      <p className="mt-1 font-serif text-[13px] leading-[1.6] text-ink-mid">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-light leading-relaxed flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-clay mt-1.5 shrink-0" />
                {nonResponse.note}
              </p>
            </div>

            {/* Right, mock tracker */}
            <div>
              <div className="card-paper overflow-hidden">
                <div className="px-5 py-3.5 border-b border-paper-3 bg-paper-2/40 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                    Non-response tracker
                  </p>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink-light tnum">
                    2 overdue · 1 pending
                  </span>
                </div>

                <div className="divide-y divide-paper-3">
                  {nonResponse.mock.map((item, i) => {
                    const cfg = statusConfig[item.status as keyof typeof statusConfig];
                    return (
                      <div key={i} className="p-4 lg:p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-[13.5px] text-ink-2 leading-snug">
                              {item.sent}
                            </p>
                            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light mt-1">
                              To: {item.recipient} · Sent {item.date}
                            </p>
                          </div>
                          <span
                            className={cn("tag shrink-0", cfg.tag)}
                            style={{ fontSize: "8.5px" }}
                          >
                            {cfg.label}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-paper-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-ink-light" />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-light">
                              Expected: {item.expected}
                            </span>
                          </div>
                          {item.daysOverdue > 0 ? (
                            <span className="font-display text-[13px] font-semibold text-signal tnum">
                              {item.daysOverdue} days overdue
                            </span>
                          ) : (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-amber">
                              Awaiting reply
                            </span>
                          )}
                        </div>

                        {item.daysOverdue > 0 && (
                          <div className="mt-3 flex gap-2">
                            <button className="btn-clay text-[11px] !py-1.5 !px-3 flex-1 justify-center">
                              <FileWarning className="h-3 w-3" /> Log as non-response
                            </button>
                            <button className="btn-ghost text-[11px] !py-1.5 !px-3 flex-1 justify-center">
                              <ArrowRight className="h-3 w-3" /> Chase now
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Reminder schedule */}
                <div className="px-5 py-4 border-t border-paper-3 bg-paper-2/40">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light mb-3 flex items-center gap-1.5">
                    <Bell className="h-3 w-3" /> Reminder schedule
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <span className="px-2 py-1 rounded bg-paper-card border border-paper-3 text-ink-light">3 days before</span>
                    <ArrowRight className="h-3 w-3 text-paper-3" />
                    <span className="px-2 py-1 rounded bg-paper-card border border-paper-3 text-ink-light">On the day</span>
                    <ArrowRight className="h-3 w-3 text-paper-3" />
                    <span className="px-2 py-1 rounded border border-clay/20 text-clay" style={{ background: "var(--clay-pale)" }}>7 days after → entry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
