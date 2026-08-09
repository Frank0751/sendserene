"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { patternDashboard } from "@/lib/site-content";
import { TrendingUp, Minus, BarChart3, Target, List } from "lucide-react";
import { cn } from "@/lib/utils";

const colorMap = {
  teal: "#1f5158",
  clay: "#b85c38",
  sage: "#5a7548",
  slate: "#5a7a8c",
};

const catShortMap: Record<string, keyof typeof colorMap> = {
  Sensory: "slate",
  Communication: "teal",
  Cognition: "clay",
  Social: "sage",
};

const flagColorMap = {
  concern: { bg: "#e0e6ea", color: "#5a7a8c" },
  positive: { bg: "#e6ecdc", color: "#5a7548" },
  neutral: { bg: "#f0e4c8", color: "#c0852a" },
};

export function PatternDashboardSection() {
  const { ref, visible } = useReveal();
  const [activeCat, setActiveCat] = useState(0);
  const [view, setView] = useState<"chart" | "timeline">("chart");
  const cat = patternDashboard.categories[activeCat];
  const maxVal = Math.max(...patternDashboard.categories.flatMap((c) => c.data));

  return (
    <section id="dashboard" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{patternDashboard.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {patternDashboard.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {patternDashboard.body}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-5 lg:gap-6 items-start">
            {/* Left, bar chart */}
            <div className="card-paper overflow-hidden">
              <div className="px-5 py-3.5 border-b border-paper-3 bg-paper-2/40 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light flex items-center gap-1.5">
                  {view === "chart" ? <BarChart3 className="h-3.5 w-3.5" /> : <List className="h-3.5 w-3.5" />}
                  {view === "chart" ? "Entries by month" : "Recent entries"}
                </p>
                <div className="flex gap-1 p-0.5 rounded-md bg-paper-card border border-paper-3">
                  <button
                    onClick={() => setView("chart")}
                    className={cn(
                      "px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider transition-colors",
                      view === "chart" ? "bg-teal text-paper" : "text-ink-light hover:text-ink"
                    )}
                  >
                    Chart
                  </button>
                  <button
                    onClick={() => setView("timeline")}
                    className={cn(
                      "px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider transition-colors",
                      view === "timeline" ? "bg-teal text-paper" : "text-ink-light hover:text-ink"
                    )}
                  >
                    Timeline
                  </button>
                </div>
              </div>

              {/* Category selector */}
              <div className="p-4 flex flex-wrap gap-1.5 border-b border-paper-3">
                {patternDashboard.categories.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveCat(i)}
                    className={cn(
                      "px-2.5 py-1 rounded-full font-mono text-[9.5px] uppercase tracking-[0.12em] border transition-all",
                      activeCat === i
                        ? "text-paper border-transparent"
                        : "bg-paper-card text-ink-light border-paper-3 hover:text-ink"
                    )}
                    style={activeCat === i ? { background: colorMap[c.color] } : undefined}
                  >
                    {c.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Chart OR Timeline */}
              <div className="p-5 lg:p-6">
                {view === "chart" ? (
                  <>
                    <div className="flex items-end justify-between gap-2 h-[160px] mb-3">
                      {cat.data.map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <span className="font-mono text-[9px] tnum text-ink-light">{val}</span>
                          <div
                            className="w-full rounded-t-md transition-all duration-300 hover:opacity-80"
                            style={{
                              height: `${(val / maxVal) * 100}%`,
                              background: colorMap[cat.color],
                              minHeight: "4px",
                            }}
                          />
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-ink-light">
                            {patternDashboard.months[i]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Trend + insight */}
                    <div className="mt-4 pt-4 border-t border-paper-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display text-[13.5px] font-semibold text-ink">{cat.name}</span>
                        <span
                          className="flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-wider"
                          style={{ color: colorMap[cat.color] }}
                        >
                          {cat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                          {cat.trendLabel}
                        </span>
                      </div>
                      <p className="font-serif text-[13px] leading-[1.6] text-ink-mid italic">
                        {cat.insight}
                      </p>
                    </div>
                  </>
                ) : (
                  /* Timeline view */
                  <div>
                    <div className="max-h-[260px] overflow-y-auto scroll-soft -mr-2 pr-2">
                      <div className="relative">
                        <div className="absolute left-[44px] top-2 bottom-2 w-px bg-paper-3" aria-hidden />
                        <div className="space-y-3">
                          {patternDashboard.timeline.entries.map((e, i) => {
                            const catColor = colorMap[catShortMap[e.cat] || "teal"];
                            const flagCfg = flagColorMap[e.flag as keyof typeof flagColorMap];
                            return (
                              <div key={i} className="flex items-start gap-3 group">
                                <div className="flex flex-col items-end w-10 shrink-0 pt-1">
                                  <span className="font-mono text-[9px] tnum text-ink-light">{e.date}</span>
                                  <span className="font-mono text-[8px] tnum text-ink-faint">{e.time}</span>
                                </div>
                                <span
                                  className="grid h-3 w-3 rounded-full shrink-0 mt-1.5 ring-2 ring-paper-card z-10 transition-transform group-hover:scale-125"
                                  style={{ background: catColor }}
                                />
                                <div className="flex-1 min-w-0 pb-1">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="font-mono text-[8.5px] uppercase tracking-wider" style={{ color: catColor }}>
                                      {e.cat}
                                    </span>
                                    <span
                                      className="tag"
                                      style={{ fontSize: "7px", padding: "1px 4px", background: flagCfg.bg, color: flagCfg.color }}
                                    >
                                      {e.flag}
                                    </span>
                                  </div>
                                  <p className="font-serif text-[12.5px] leading-[1.5] text-ink-2">{e.text}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 pt-4 border-t border-paper-3 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light">
                      {patternDashboard.timeline.entries.length} recent entries · scroll for more
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right, evidence readiness */}
            <div className="card-paper overflow-hidden">
              <div className="px-5 py-3.5 border-b border-paper-3 bg-paper-2/40 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5" /> {patternDashboard.readiness.title}
                </p>
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink-light">
                  Target: {patternDashboard.readiness.target} entries
                </span>
              </div>

              <div className="p-5 lg:p-6">
                <p className="font-serif text-[13px] leading-[1.6] text-ink-mid mb-5">
                  {patternDashboard.readiness.body}
                </p>

                <div className="space-y-4">
                  {patternDashboard.readiness.items.map((item, i) => {
                    const c = patternDashboard.categories[i];
                    const color = colorMap[c.color];
                    return (
                      <div key={item.cat}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-serif text-[12.5px] text-ink-2">{item.cat}</span>
                          <span className="font-mono text-[10px] tnum text-ink-light">
                            {item.count}/{patternDashboard.readiness.target}
                          </span>
                        </div>
                        <div className="h-2.5 rounded-full bg-paper-2 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${item.pct}%`,
                              background: color,
                            }}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-ink-light">
                            {item.pct}% ready
                          </span>
                          {item.pct >= 50 && (
                            <span className="font-mono text-[8.5px] uppercase tracking-wider text-sage">
                              On track
                            </span>
                          )}
                          {item.pct < 50 && (
                            <span className="font-mono text-[8.5px] uppercase tracking-wider text-clay">
                              Needs more
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-5 border-t border-paper-3 p-3.5 rounded-lg" style={{ background: "var(--teal-deep)" }}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-clay-pale mb-1.5">
                    Overall readiness
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="display text-[1.75rem] text-paper tnum leading-none">42%</p>
                    <p className="font-serif text-[12px] text-paper/70">toward annual review</p>
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-paper/50 mt-2">
                    20 entries logged · 28 needed for strong case
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
