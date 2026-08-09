"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { decoderFeature, expertHelp } from "@/lib/site-content";
import { FileText, Sparkles, AlertTriangle, CalendarClock, BookOpen, Loader2, RotateCcw, LifeBuoy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type DecodeShape = {
  summary: string;
  jargon: { term: string; meaning: string }[];
  deadlines: { label: string; date: string; note: string }[];
  flags: { type: string; text: string }[];
};

export function DecoderSection() {
  const { ref, visible } = useReveal();
  const [activeSample, setActiveSample] = useState(0);
  const [customText, setCustomText] = useState("");
  const [mode, setMode] = useState<"sample" | "custom">("sample");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [liveResult, setLiveResult] = useState<DecodeShape | null>(null);

  const sample = decoderFeature.samples[activeSample];
  const result: DecodeShape | null = mode === "sample" ? sample.decode : liveResult;

  const runDecode = async () => {
    if (customText.trim().length < 12) {
      setError("Paste at least a sentence of text to decode.");
      return;
    }
    setLoading(true);
    setError(null);
    setLiveResult(null);
    try {
      const res = await fetch("/api/decode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: customText }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setLiveResult(data.result);
      }
    } catch {
      setError("Couldn't reach the decoder. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="decoder" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{decoderFeature.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              Council letters, decoded.{" "}
              <em className="accent">Deadlines, surfaced.</em>
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {decoderFeature.body}
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1fr_1.15fr] gap-5 lg:gap-6 items-start">
            {/* Left, input */}
            <div className="space-y-4">
              {/* Mode tabs */}
              <div className="flex gap-1 p-1 rounded-lg bg-paper-2 border border-paper-3 w-fit">
                <button
                  onClick={() => setMode("sample")}
                  className={cn(
                    "px-3.5 py-1.5 rounded-md text-[12.5px] font-display transition-colors",
                    mode === "sample" ? "bg-paper-card text-ink shadow-sm" : "text-ink-mid hover:text-ink"
                  )}
                >
                  Try a sample
                </button>
                <button
                  onClick={() => setMode("custom")}
                  className={cn(
                    "px-3.5 py-1.5 rounded-md text-[12.5px] font-display transition-colors",
                    mode === "custom" ? "bg-paper-card text-ink shadow-sm" : "text-ink-mid hover:text-ink"
                  )}
                >
                  Paste your own
                </button>
              </div>

              {mode === "sample" ? (
                <div className="space-y-2.5">
                  {decoderFeature.samples.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSample(i)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3",
                        activeSample === i
                          ? "border-teal bg-teal-pale/50"
                          : "border-paper-3 bg-paper-card hover:border-ink-light/40"
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-7 w-7 place-items-center rounded-md shrink-0 font-mono text-[11px] font-semibold",
                          activeSample === i ? "bg-teal text-paper" : "bg-paper-2 text-ink-light"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-[13.5px] font-medium text-ink">{s.label}</p>
                        <p className="font-serif text-[12px] text-ink-light mt-0.5 line-clamp-2 leading-snug">
                          {s.source.slice(0, 90)}…
                        </p>
                      </div>
                    </button>
                  ))}
                  <div className="rounded-xl border border-paper-3 bg-paper-card p-4 mt-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light mb-2">
                      Original text
                    </p>
                    <p className="font-serif text-[13px] leading-[1.6] text-ink-2 italic">
                      &ldquo;{sample.source}&rdquo;
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="rounded-xl border border-paper-3 bg-paper-card overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-paper-3 flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">
                        Paste letter or email text
                      </p>
                      <span className="font-mono text-[9.5px] text-ink-light tnum">
                        {customText.length}/4000
                      </span>
                    </div>
                    <textarea
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value.slice(0, 4000))}
                      placeholder="Paste the text of a council letter, school email, or EHCP section here. The decoder runs on the text only, no file, no names needed."
                      className="w-full min-h-[180px] resize-y bg-transparent p-4 font-serif text-[13.5px] leading-[1.6] text-ink-2 placeholder:text-ink-faint focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={runDecode}
                      disabled={loading}
                      className="btn-clay text-sm flex-1 justify-center disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Decoding…
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4" /> Decode this text
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setCustomText("");
                        setLiveResult(null);
                        setError(null);
                      }}
                      className="btn-ghost text-sm !px-4"
                      aria-label="Clear"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                  {error && (
                    <p className="text-[12.5px] font-serif text-signal flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      {error}
                    </p>
                  )}
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light leading-relaxed">
                    Demo only · PII redacted before AI · Not legal advice
                  </p>
                </div>
              )}
            </div>

            {/* Right, decode output */}
            <DecodeOutput result={result} loading={loading} isSample={mode === "sample"} />
          </div>
        </div>

        {/* 5-category document tagging taxonomy */}
        <div className="mt-10 grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-8 items-start">
          <div>
            <p className="eyebrow">Document tagging</p>
            <h3 className="display mt-3 text-[1.5rem] text-ink">
              Every upload, auto-categorised.
            </h3>
            <p className="mt-3 font-serif text-[14px] leading-[1.65] text-ink-mid">
              SENDSerene tags every document across five categories, AI-suggested and parent-correctable. So your vault organises itself, and your evidence pack filters by type.
            </p>
            <p className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light">
              Supports {decoderFeature.fileFormats.join(", ")} · drag, select, or camera capture
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {decoderFeature.docCategories.map((cat, i) => (
              <div key={cat.name} className="card-paper p-4 card-hover">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[10px] tnum text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-display text-[13.5px] font-semibold text-ink">{cat.name}</p>
                </div>
                <p className="font-serif text-[12.5px] leading-[1.5] text-ink-mid">{cat.desc}</p>
              </div>
            ))}
            <div className="card-paper p-4 flex items-center justify-center text-center" style={{ background: "var(--teal-pale)" }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal-deep">
                AI-suggested, parent-correctable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecodeOutput({
  result,
  loading,
  isSample,
}: {
  result: DecodeShape | null;
  loading: boolean;
  isSample: boolean;
}) {
  if (loading) {
    return (
      <div className="card-paper p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
        <Loader2 className="h-7 w-7 text-clay animate-spin" />
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light">
          Reading the letter
        </p>
        <p className="mt-1 font-serif text-[13px] text-ink-mid">
          Pulling out the jargon and the deadlines…
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="card-paper p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
        <FileText className="h-8 w-8 text-ink-faint" />
        <p className="mt-4 font-serif text-[14px] text-ink-mid">
          The decoded plain-English summary, jargon glossary and deadlines will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div
        className="rounded-xl p-5 lg:p-6 border"
        style={{ background: "var(--teal-deep)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-clay-pale/70 mb-2.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-pale" /> Plain-English decode
        </p>
        <p className="font-serif text-[1.05rem] leading-[1.65] text-paper">{result.summary}</p>
      </div>

      {/* Flags */}
      {result.flags.length > 0 && (
        <div className="rounded-xl border border-signal/30 bg-[var(--signal)]/5 p-4">
          {result.flags.map((f, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-signal mt-0.5 shrink-0" />
              <p className="font-serif text-[13px] leading-[1.55] text-ink-2">{f.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Jargon */}
      {result.jargon.length > 0 && (
        <div className="card-paper p-5 lg:p-6">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-teal mb-4 flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5" /> Jargon glossary
          </p>
          <dl className="space-y-4">
            {result.jargon.map((j, i) => (
              <div key={i} className="grid sm:grid-cols-[1fr_1.6fr] gap-2 sm:gap-4 pb-4 border-b border-paper-3 last:border-0 last:pb-0">
                <dt className="font-display text-[13.5px] font-medium text-ink leading-snug">
                  {j.term}
                </dt>
                <dd className="font-serif text-[13px] leading-[1.6] text-ink-mid">{j.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Deadlines */}
      {result.deadlines.length > 0 && (
        <div className="card-paper p-5 lg:p-6">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-clay mb-4 flex items-center gap-2">
            <CalendarClock className="h-3.5 w-3.5" /> Deadlines extracted
          </p>
          <div className="space-y-3">
            {result.deadlines.map((d, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2.5 border-b border-paper-3 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <p className="font-serif text-[13px] text-ink-2">{d.label}</p>
                  {d.note && <p className="font-mono text-[10px] uppercase tracking-wider text-ink-light mt-0.5">{d.note}</p>}
                </div>
                {d.date && (
                  <p className="font-display text-[1.1rem] font-semibold text-teal tnum">{d.date}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light">
            {isSample ? "Illustrative example · not legal advice" : "AI-generated · always verify against the source · not legal advice"}
          </p>
        </div>
      )}

      {/* Get Expert Help panel, appears after every decode */}
      <ExpertHelpPanel />
    </div>
  );
}

function ExpertHelpPanel() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-xl border border-paper-3 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-3 p-4 bg-clay-pale/30 hover:bg-clay-pale/50 transition-colors text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-clay/10 shrink-0">
            <LifeBuoy className="h-4 w-4 text-clay" />
          </span>
          <div>
            <p className="font-display text-[14px] font-semibold text-ink">Need more than a decode?</p>
            <p className="font-serif text-[12px] text-ink-mid">Free, independent support for UK SEND families</p>
          </div>
        </div>
        <span className={cn("font-mono text-[10px] uppercase tracking-wider text-clay shrink-0 transition-transform", expanded && "rotate-180")}>
          ▾
        </span>
      </button>
      {expanded && (
        <div className="p-4 bg-paper-card border-t border-paper-3">
          <p className="font-serif text-[13px] leading-[1.6] text-ink-mid mb-4">
            {expertHelp.body}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {expertHelp.resources.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block p-3.5 rounded-lg border border-paper-3 bg-paper/40 hover:border-clay/30 hover:bg-clay-pale/20 transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-display text-[14px] font-semibold text-ink">{r.name}</p>
                  <ExternalLink className="h-3.5 w-3.5 text-ink-faint group-hover:text-clay transition-colors" />
                </div>
                <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-clay mb-2">{r.tag}</p>
                <p className="font-serif text-[12px] leading-[1.5] text-ink-mid">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
