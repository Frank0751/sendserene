"use client";

import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { deadlineCalc } from "@/lib/site-content";
import { CalendarClock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function addWeeks(date: Date, weeks: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + weeks * 7);
  return d;
}

function fmt(d: Date): string {
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function todayISO(): string {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

export function DeadlineCalcSection() {
  const { ref, visible } = useReveal();
  const [trigger, setTrigger] = useState(todayISO());

  const triggerDate = useMemo(() => {
    const d = new Date(trigger + "T00:00:00");
    return isNaN(d.getTime()) ? null : d;
  }, [trigger]);

  const steps = useMemo(() => {
    if (!triggerDate) return [];
    return deadlineCalc.steps.map((s) => ({
      ...s,
      date: addWeeks(triggerDate, s.weeks),
    }));
  }, [triggerDate]);

  return (
    <section id="deadlines" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="">
              <p className="eyebrow">{deadlineCalc.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                One date in.{" "}
                <em className="accent">Every legal deadline out.</em>
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {deadlineCalc.body}
              </p>

              <div className="mt-7 p-5 rounded-xl border border-paper-3 bg-paper-card">
                <label htmlFor="trigger-date" className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light flex items-center gap-2 mb-2.5">
                  <CalendarClock className="h-3.5 w-3.5" /> Trigger date
                </label>
                <input
                  id="trigger-date"
                  type="date"
                  value={trigger}
                  onChange={(e) => setTrigger(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-paper-3 bg-paper-2/40 font-display text-[15px] text-ink focus:outline-none focus:border-teal"
                />
                <p className="mt-2.5 font-serif text-[12px] text-ink-light leading-relaxed">
                  Usually the date on the council's letter agreeing to assess. Pick the date the statutory clock started.
                </p>
              </div>

              <p className="mt-4 flex items-start gap-2 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-light leading-relaxed">
                <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-clay" />
                {deadlineCalc.disclaimer}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 border-l-2 border-dashed border-paper-3" aria-hidden />
              <ol className="space-y-4">
                {steps.map((s, i) => {
                  const isLast = i === steps.length - 1;
                  return (
                    <li key={s.label} className="relative pl-12">
                      <span
                        className={cn(
                          "absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-2 z-10",
                          isLast ? "bg-clay border-clay text-paper" : "bg-paper-card border-teal text-teal"
                        )}
                      >
                        <span className="font-mono text-[12px] font-semibold tnum">{s.weeks}</span>
                      </span>
                      <div
                        className={cn(
                          "rounded-xl border p-4 lg:p-5",
                          isLast ? "border-clay/30 bg-clay-pale/30" : "border-paper-3 bg-paper-card"
                        )}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-display text-[14.5px] font-semibold text-ink">{s.label}</p>
                          <p
                            className={cn(
                              "font-display text-[1.05rem] font-semibold tnum",
                              isLast ? "text-clay-deep" : "text-teal"
                            )}
                          >
                            {fmt(s.date)}
                          </p>
                        </div>
                        <p className="mt-1.5 font-serif text-[12.5px] leading-[1.55] text-ink-mid">{s.note}</p>
                        <p className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-light">
                          Week {s.weeks} from trigger
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
