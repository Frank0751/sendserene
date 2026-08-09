"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Mic, FileSearch, FileText, BarChart3, BookOpen, Clock, FileCheck, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    href: "/voice-log",
    icon: Mic,
    label: "Voice logging",
    desc: "Speak for five minutes. We transcribe, categorise, and file it.",
    accent: "#1f5158",
  },
  {
    href: "/decoder",
    icon: FileSearch,
    desc: "Council letters, decoded. Deadlines, surfaced.",
    label: "Jargon decoder",
    accent: "#b85c38",
  },
  {
    href: "/evidence",
    icon: FileText,
    desc: "A paginated, numbered evidence pack. Ready when you need it.",
    label: "Evidence pack",
    accent: "#5a7548",
  },
  {
    href: "/dashboard",
    icon: BarChart3,
    desc: "Patterns by category and over time. The trends you're too tired to see.",
    label: "Pattern dashboard",
    accent: "#5a7a8c",
  },
];

const resources = [
  {
    href: "/glossary",
    icon: BookOpen,
    label: "SEND glossary",
    desc: "The words that keep parents out. Defined.",
    accent: "#1f5158",
  },
  {
    href: "/timescales",
    icon: Clock,
    label: "Statutory timescales",
    desc: "The legal clock. Every week, on the record.",
    accent: "#b85c38",
  },
  {
    href: "/ehcp",
    icon: FileCheck,
    label: "Inside an EHCP",
    desc: "Eleven sections. What each one is for.",
    accent: "#5a7548",
  },
  {
    href: "/security",
    icon: ShieldCheck,
    label: "Security & data",
    desc: "Where your data goes. How it's protected.",
    accent: "#5a7a8c",
  },
];

export function HomeFeatureGrid() {
  const { ref, visible } = useReveal();

  return (
    <section id="features" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">Explore SENDSerene</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              Every part of the system.{" "}
              <em className="accent">In detail.</em>
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              The home page gives you the shape. These pages give you the substance, how each feature works, what it does, and what it doesn't.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light mb-4">
              Features
            </p>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <a
                    key={f.href}
                    href={f.href}
                    className="card-paper p-5 lg:p-6 card-hover group flex items-start gap-4"
                  >
                    <span
                      className="grid h-12 w-12 place-items-center rounded-xl shrink-0"
                      style={{ background: `${f.accent}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: f.accent }} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-[16px] font-semibold text-ink">{f.label}</h3>
                        <ArrowRight className="h-4 w-4 text-ink-faint group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                      <p className="mt-1.5 font-serif text-[13.5px] leading-[1.6] text-ink-mid">
                        {f.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resource cards */}
          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light mb-4">
              Resources
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {resources.map((r) => {
                const Icon = r.icon;
                return (
                  <a
                    key={r.href}
                    href={r.href}
                    className="card-paper p-5 card-hover group"
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-lg mb-3"
                      style={{ background: `${r.accent}15` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: r.accent }} />
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-[14px] font-semibold text-ink">{r.label}</h3>
                      <ArrowRight className="h-3.5 w-3.5 text-ink-faint group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    <p className="mt-1.5 font-serif text-[12.5px] leading-[1.55] text-ink-mid">
                      {r.desc}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/pricing" className="btn-primary text-[14px]">
              See pricing
            </a>
            <a href="/faq" className="btn-ghost text-[14px]">
              <HelpCircle className="h-4 w-4" /> Read the FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
