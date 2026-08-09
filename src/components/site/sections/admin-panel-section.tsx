"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { adminPanel } from "@/lib/site-content";
import { Settings, BookOpen, FileText, Check, Lock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const tabIcons = [Settings, BookOpen, FileText];

export function AdminPanelSection() {
  const { ref, visible } = useReveal();
  const [activeTab, setActiveTab] = useState(0);
  const tab = adminPanel.tabs[activeTab];
  const Icon = tabIcons[activeTab];

  return (
    <section id="admin" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{adminPanel.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {adminPanel.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {adminPanel.body}
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-[260px_1fr] gap-5 lg:gap-6 items-start">
            {/* Tab nav */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto scroll-soft lg:overflow-visible">
              {adminPanel.tabs.map((t, i) => {
                const TabIcon = tabIcons[i];
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(i)}
                    className={cn(
                      "flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all shrink-0 lg:w-full",
                      activeTab === i
                        ? "border-teal bg-teal-pale/50 text-teal-deep"
                        : "border-paper-3 bg-paper-card text-ink-2 hover:border-ink-light/40"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-lg shrink-0",
                        activeTab === i ? "bg-teal text-paper" : "bg-paper-2 text-ink-light"
                      )}
                    >
                      <TabIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-[13.5px] font-medium">{t.label}</p>
                      <p className="font-mono text-[8.5px] uppercase tracking-wider text-ink-light mt-0.5 hidden lg:block">
                        {t.id}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="card-paper overflow-hidden">
              {/* Window chrome */}
              <div className="window-chrome">
                <span className="window-dot" style={{ background: "#e0896a" }} />
                <span className="window-dot" style={{ background: "#d4b06a" }} />
                <span className="window-dot" style={{ background: "#7fae9a" }} />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">
                  sendserene · admin · {tab.id}
                </span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-paper/50">
                  <Lock className="h-3 w-3" /> Admin only
                </span>
              </div>

              <div className="p-5 lg:p-7">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5 text-teal" />
                  <h3 className="font-display text-[1.4rem] font-semibold text-ink tracking-tight">
                    {tab.title}
                  </h3>
                </div>
                <p className="font-serif text-[14px] leading-[1.65] text-ink-mid mb-6">
                  {tab.body}
                </p>

                {/* Quotas tab */}
                {tab.id === "quotas" && (
                  <div className="space-y-2">
                    {tab.rows?.map((row) => (
                      <div
                        key={row.setting}
                        className="flex items-center justify-between gap-4 p-3.5 rounded-lg border border-paper-3 bg-paper-2/30 hover:border-ink-light/30 transition-colors"
                      >
                        <span className="font-serif text-[13.5px] text-ink-2">{row.setting}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[15px] font-semibold text-teal tnum">
                            {row.type === "currency" ? "£" : ""}{row.value}
                          </span>
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-ink-light border border-paper-3 rounded px-1.5 py-0.5">
                            {row.type}
                          </span>
                        </div>
                      </div>
                    ))}
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light pt-2 flex items-center gap-1.5">
                      <Shield className="h-3 w-3" /> Changes audit-logged · requires admin MFA
                    </p>
                  </div>
                )}

                {/* Glossary tab */}
                {tab.id === "glossary" && (
                  <div className="space-y-3">
                    {tab.entries?.map((entry) => (
                      <div
                        key={entry.term}
                        className="p-4 rounded-lg border border-paper-3 bg-paper-2/30 hover:border-ink-light/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="font-display text-[13.5px] font-semibold text-ink leading-snug">
                            {entry.term}
                          </p>
                          <span className="tag tag-cat shrink-0" style={{ fontSize: "8px" }}>
                            {entry.langs}
                          </span>
                        </div>
                        <p className="font-serif text-[13px] leading-[1.55] text-ink-mid">
                          {entry.definition}
                        </p>
                      </div>
                    ))}
                    <button className="w-full mt-2 p-3 rounded-lg border border-dashed border-paper-3 text-ink-light hover:border-teal hover:text-teal transition-colors font-mono text-[11px] uppercase tracking-wider">
                      + Add glossary entry
                    </button>
                  </div>
                )}

                {/* Disclaimer tab */}
                {tab.id === "disclaimer" && (
                  <div className="space-y-3">
                    {tab.blocks?.map((block) => (
                      <div
                        key={block.location}
                        className="p-4 rounded-lg border border-paper-3 bg-paper-2/30"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-clay">
                            {block.location}
                          </p>
                          {block.editable && (
                            <span className="flex items-center gap-1 font-mono text-[8.5px] uppercase tracking-wider text-sage">
                              <Check className="h-2.5 w-2.5" /> Editable
                            </span>
                          )}
                        </div>
                        <p className="font-serif text-[13px] leading-[1.55] text-ink-2 italic">
                          &ldquo;{block.text}&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
