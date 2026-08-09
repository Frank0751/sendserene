"use client";

import { useReveal } from "@/hooks/use-reveal";
import { dayInLife } from "@/lib/site-content";
import { Mic, FileText, LayoutDashboard, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const tagIcons: Record<string, typeof Mic> = {
  "Voice log": Mic,
  "Document decode": FileText,
  Dashboard: LayoutDashboard,
};

export function DayInLifeSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="day-in-life" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start mb-12">
            <div>
              <p className="eyebrow">{dayInLife.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                {dayInLife.title}
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {dayInLife.body}
              </p>
            </div>
            {/* Generated timeline illustration */}
            <div className="hidden lg:block relative h-[200px] rounded-2xl overflow-hidden border border-paper-3">
              <img
                src="/img/timeline-art.png"
                alt="An illustrated vertical timeline on warm paper"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, var(--paper) 0%, transparent 40%)" }}
                aria-hidden
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 relative">
            {/* Vertical line */}
            <div
              className="absolute left-[27px] sm:left-[39px] top-4 bottom-4 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, #ddd2b8 10%, #ddd2b8 90%, transparent)" }}
              aria-hidden
            />

            <ol className="space-y-6">
              {dayInLife.moments.map((m, i) => {
                const Icon = tagIcons[m.tag] || Mic;
                const isEven = i % 2 === 0;
                return (
                  <li key={i} className="relative pl-16 sm:pl-24">
                    {/* Time node */}
                    <div className="absolute left-0 top-0 flex flex-col items-center">
                      <div
                        className={cn(
                          "relative grid h-14 w-14 sm:h-20 sm:w-20 place-items-center rounded-full border-2 z-10",
                          m.flag === "concern" ? "border-slate-tag bg-slate-pale" :
                          m.flag === "positive" ? "border-sage bg-sage-pale" :
                          "border-amber bg-amber-pale"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5 sm:h-6 sm:w-6",
                            m.flag === "concern" ? "text-slate-tag" :
                            m.flag === "positive" ? "text-sage" :
                            "text-amber"
                          )}
                        />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={cn(
                      "card-paper p-5 lg:p-6 transition-all hover:border-ink-light/40",
                      isEven ? "sm:ml-0" : "sm:ml-0"
                    )}>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-display text-[1.25rem] sm:text-[1.5rem] font-semibold tnum text-ink leading-none">
                          {m.time}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-light">
                          {m.ampm}
                        </span>
                        <span className="tag tag-cat" style={{ fontSize: "8.5px" }}>{m.tag}</span>
                        <span
                          className={cn("tag", `tag-${m.flag}`)}
                          style={{ fontSize: "8.5px" }}
                        >
                          {m.flag}
                        </span>
                      </div>
                      <p className="font-display text-[14.5px] font-semibold text-ink mb-1.5">{m.title}</p>
                      <p className="font-serif text-[14px] leading-[1.65] text-ink-mid">{m.action}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Closing note */}
            <div className="mt-8 pl-16 sm:pl-24">
              <div
                className="inline-flex items-center gap-3 p-4 rounded-xl border border-paper-3"
                style={{ background: "var(--teal-deep)" }}
              >
                <Moon className="h-5 w-5 text-clay-pale" />
                <p className="font-serif text-[14px] text-paper italic">
                  Six entries. Two flagged for the OT. The evidence pack is building itself.
                </p>
                <Sun className="h-5 w-5 text-clay-pale" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
