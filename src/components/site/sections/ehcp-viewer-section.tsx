"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ehcpViewer } from "@/lib/site-content";
import { ChevronDown, ChevronUp, BookOpen, CheckCircle2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function EhcpViewerSection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState<string | null>("F"); // Start with Section F open, it's the most important

  return (
    <section id="ehcp" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{ehcpViewer.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {ehcpViewer.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {ehcpViewer.body}
            </p>
            <p className="mt-4 font-serif text-[14px] leading-[1.6] text-ink-2 italic">
              {ehcpViewer.intro}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-8 items-start">
            {/* Left, section letter grid */}
            <div className="grid grid-cols-6 sm:grid-cols-4 lg:grid-cols-3 gap-2 ">
              {ehcpViewer.sections.map((s) => {
                const isActive = active === s.letter;
                return (
                  <button
                    key={s.letter}
                    onClick={() => setActive(isActive ? null : s.letter)}
                    className={cn(
                      "aspect-square grid place-items-center rounded-xl border font-display text-[1.5rem] font-semibold transition-all",
                      isActive
                        ? "border-teal bg-teal text-paper shadow-md"
                        : "border-paper-3 bg-paper-card text-ink-2 hover:border-teal hover:text-teal"
                    )}
                    aria-pressed={isActive}
                    aria-label={`Section ${s.letter}: ${s.title}`}
                  >
                    {s.letter}
                  </button>
                );
              })}
            </div>

            {/* Right, active section detail */}
            <div className="min-h-[300px]">
              {active ? (
                <ActiveSection
                  section={ehcpViewer.sections.find((s) => s.letter === active)!}
                  onPrev={() => {
                    const idx = ehcpViewer.sections.findIndex((s) => s.letter === active);
                    if (idx > 0) setActive(ehcpViewer.sections[idx - 1].letter);
                  }}
                  onNext={() => {
                    const idx = ehcpViewer.sections.findIndex((s) => s.letter === active);
                    if (idx < ehcpViewer.sections.length - 1) setActive(ehcpViewer.sections[idx + 1].letter);
                  }}
                  isFirst={active === "A"}
                  isLast={active === "K"}
                />
              ) : (
                <div className="card-paper p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                  <BookOpen className="h-10 w-10 text-ink-faint mb-3" />
                  <p className="font-serif text-[14px] text-ink-mid">
                    Click a section letter to see what it covers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveSection({
  section,
  onPrev,
  onNext,
  isFirst,
  isLast,
}: {
  section: { letter: string; title: string; who: string; what: string; check: string };
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="card-paper overflow-hidden">
      {/* Header */}
      <div className="p-5 lg:p-6 border-b border-paper-3" style={{ background: "var(--teal-pale)" }}>
        <div className="flex items-start gap-4">
          <span
            className="grid h-14 w-14 place-items-center rounded-2xl bg-teal text-paper font-display text-[1.75rem] font-bold shrink-0"
          >
            {section.letter}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-[1.25rem] lg:text-[1.5rem] font-semibold text-teal-deep leading-tight">
              {section.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-teal">
              <Users className="h-3 w-3" />
              Written by: {section.who}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 lg:p-6 space-y-5">
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-light mb-2">
            What it covers
          </p>
          <p className="font-serif text-[14.5px] leading-[1.65] text-ink-2">
            {section.what}
          </p>
        </div>

        <div className="p-4 rounded-lg border border-clay/20 bg-clay-pale/20">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-clay mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            What to check
          </p>
          <p className="font-serif text-[13.5px] leading-[1.6] text-ink-2">
            {section.check}
          </p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-paper-3">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className="font-mono text-[11px] uppercase tracking-wider text-ink-light hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Section {String.fromCharCode(section.letter.charCodeAt(0) - 1)}
          </button>
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-light">
            Section {section.letter} of K
          </span>
          <button
            onClick={onNext}
            disabled={isLast}
            className="font-mono text-[11px] uppercase tracking-wider text-teal hover:text-teal-deep disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Section {String.fromCharCode(section.letter.charCodeAt(0) + 1)} →
          </button>
        </div>
      </div>
    </div>
  );
}
