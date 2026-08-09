"use client";

import { useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { hero } from "@/lib/site-content";
import { useLocale } from "@/hooks/use-locale";
import { ArrowRight, Mic, FileText, ShieldCheck, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { ref, visible } = useReveal();
  const { locale, tp, hydrate } = useLocale();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // The English headline is set as three lines with an italic accent on the
  // last. That typographic structure does not survive translation, word
  // order differs, so other languages get the title as a single string.
  const isEnglish = locale === "en";

  return (
    <section id="top" className="relative overflow-hidden paper-grain min-h-screen flex flex-col justify-center">
      {/* Ambient warm radial, terracotta not purple */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, rgba(184,92,56,0.22), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-20 -left-40 h-[460px] w-[460px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, rgba(31,81,88,0.20), transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-24 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div ref={ref} className={cn("reveal", visible && "is-visible")}>
            <p className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              {tp("hero.eyebrow")}
            </p>

            <h1 className="display mt-5 text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] text-ink">
              {isEnglish ? (
                <>
                  {hero.titleLines[0]}
                  <br />
                  {hero.titleLines[1]}{" "}
                  <span className="inline-block">
                    <em className="accent">{hero.titleLines[2].replace(".", "")}</em>
                    <span className="text-ink">.</span>
                  </span>
                </>
              ) : (
                tp("hero.title")
              )}
            </h1>

            <p className="mt-6 text-[1.075rem] sm:text-[1.15rem] leading-[1.65] text-ink-mid font-serif max-w-[34rem]">
              {tp("hero.lede")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/pricing" className="btn-primary text-[15px]">
                {tp("hero.cta1")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/evidence" className="btn-ghost text-[15px]">
                <FileText className="h-4 w-4" />
                {tp("hero.cta2")}
              </a>
            </div>

            <ul className="mt-9 space-y-2.5">
              {hero.trust.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-ink-2 font-serif">
                  <ShieldCheck className="h-[15px] w-[15px] text-teal mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right, device mockup */}
          <div className={cn("reveal", visible && "is-visible")} style={{ transitionDelay: "120ms" }}>
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      {/* Generated editorial illustration, sits behind the mockup */}
      <div
        className="hidden lg:block absolute -top-10 -right-10 w-[280px] h-[280px] rounded-full overflow-hidden opacity-60 pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
        }}
        aria-hidden
      >
        <img
          src="/img/hero-desk.png"
          alt="A calm desk scene with a notebook, tea, and reading glasses"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating accent cards */}
      <div
        className="hidden md:block absolute -left-6 top-16 z-20 card-paper px-3.5 py-2.5 shadow-lg rotate-[-4deg]"
        style={{ boxShadow: "0 8px 24px -8px rgba(18,58,64,0.18)" }}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-sage-pale">
            <Mic className="h-3.5 w-3.5 text-sage" />
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Recording</p>
            <p className="font-display text-[12px] font-semibold text-ink tnum">02:14 / 05:00</p>
          </div>
        </div>
      </div>

      <div
        className="hidden md:block absolute -right-4 bottom-24 z-20 card-paper px-3.5 py-2.5 shadow-lg rotate-[3deg]"
        style={{ boxShadow: "0 8px 24px -8px rgba(148,74,44,0.18)" }}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-clay-pale">
            <Languages className="h-3.5 w-3.5 text-clay" />
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Decoded in</p>
            <p className="font-display text-[12px] font-semibold text-ink">Soomaali</p>
          </div>
        </div>
      </div>

      {/* Window */}
      <div className="relative rounded-[16px] overflow-hidden border border-paper-3 shadow-2xl" style={{ boxShadow: "0 30px 60px -20px rgba(18,58,64,0.22), 0 10px 24px -10px rgba(18,58,64,0.14)" }}>
        <div className="window-chrome">
          <span className="window-dot" style={{ background: "#e0896a" }} />
          <span className="window-dot" style={{ background: "#d4b06a" }} />
          <span className="window-dot" style={{ background: "#7fae9a" }} />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">
            sendserene, jack's record
          </span>
        </div>

        <div className="bg-paper-card p-5 sm:p-6">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">Evidence readiness</p>
              <p className="font-display text-[15px] font-semibold text-ink mt-0.5">Toward annual review</p>
            </div>
            <span className="tag tag-cat">Premium</span>
          </div>

          {/* Category bars */}
          <div className="space-y-3 mb-6">
            {[
              { cat: "Communication & Interaction", pct: 72, flag: "concern" },
              { cat: "Cognition & Learning", pct: 48, flag: "concern" },
              { cat: "Social, Emotional & MH", pct: 64, flag: "positive" },
              { cat: "Sensory & Physical", pct: 55, flag: "neutral" },
            ].map((row) => (
              <div key={row.cat}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif text-[11.5px] text-ink-2">{row.cat}</span>
                  <span className="font-mono text-[10px] tnum text-ink-light">{row.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-paper-2 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${row.pct}%`,
                      background:
                        row.flag === "concern"
                          ? "var(--slate-tag)"
                          : row.flag === "positive"
                          ? "var(--sage)"
                          : "var(--amber)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Deadline card */}
          <div
            className="rounded-[10px] p-3.5 border"
            style={{ background: "var(--teal-deep)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-paper/50">
                  Final EHC plan due
                </p>
                <p className="font-display text-[17px] font-semibold text-paper mt-0.5 tnum">4 June 2026</p>
              </div>
              <div className="text-right">
                <p className="font-display text-[22px] font-bold text-clay-pale tnum leading-none">4</p>
                <p className="font-mono text-[8.5px] uppercase tracking-wider text-paper/50 mt-1">weeks left</p>
              </div>
            </div>
          </div>

          {/* Recent entries */}
          <div className="mt-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light mb-2.5">Recent entries</p>
            <div className="space-y-2">
              {[
                { d: "3 Mar", t: "School shoes rubbing again despite the new pair…", f: "concern" },
                { d: "14 Feb", t: "Reading homework took over an hour again…", f: "concern" },
                { d: "2 Feb", t: "Jack asked another boy to sit with him at lunch…", f: "positive" },
              ].map((e) => (
                <div key={e.d} className="flex items-start gap-2.5 py-1.5">
                  <span className="font-mono text-[10px] text-ink-light tnum mt-0.5 w-12 shrink-0">{e.d}</span>
                  <span
                    className={cn("tag mt-0.5", e.f === "concern" ? "tag-concern" : "tag-positive")}
                    style={{ fontSize: "8px", padding: "1px 4px" }}
                  >
                    {e.f}
                  </span>
                  <span className="font-serif text-[11.5px] text-ink-2 leading-snug line-clamp-1">{e.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
