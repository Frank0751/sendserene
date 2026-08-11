"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { voiceFeature } from "@/lib/site-content";
import { Mic, Square, Check, Pin, Search, Languages, Clock, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function VoiceSection() {
  const { ref, visible } = useReveal();
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const MAX = 300; // 5 min
  const WARN = 270;

  useEffect(() => {
    if (recording) {
      timerRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s + 1 >= MAX) {
            setRecording(false);
            return MAX;
          }
          return s + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [recording]);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const pct = (seconds / MAX) * 100;
  const warn = seconds >= WARN;

  const reset = () => {
    setRecording(false);
    setSeconds(0);
  };

  return (
    <section id="capture" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Left copy */}
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">{voiceFeature.eyebrow}</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                Say it out loud while it's fresh.{" "}
                <em className="accent">We'll do the rest.</em>
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {voiceFeature.body}
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {voiceFeature.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-ink-2 font-serif">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-clay shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-7 p-3.5 rounded-lg border border-paper-3 bg-paper-2/40 font-serif text-[13px] italic text-ink-mid leading-relaxed">
                {voiceFeature.note}
              </p>
            </div>

            {/* Right, recorder + transcript */}
            <div className="space-y-5">
              {/* Recorder */}
              <div className="card-paper p-6 lg:p-7">
                <div className="flex items-center justify-between mb-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light">
                    Voice log · new entry
                  </p>
                  <span className={cn("tag", recording ? "tag-urgent" : "tag-neutral")}>
                    {recording ? "● Recording" : "Ready"}
                  </span>
                </div>

                {/* Timer + waveform */}
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <svg width="84" height="84" viewBox="0 0 84 84" className="-rotate-90">
                      <circle cx="42" cy="42" r="36" fill="none" stroke="var(--paper-2)" strokeWidth="6" />
                      <circle
                        cx="42"
                        cy="42"
                        r="36"
                        fill="none"
                        stroke={warn ? "var(--signal)" : "var(--teal)"}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 36}`}
                        strokeDashoffset={`${2 * Math.PI * 36 * (1 - pct / 100)}`}
                        style={{ transition: "stroke-dashoffset 1s linear" }}
                      />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <Mic className={cn("h-7 w-7", recording ? "text-signal" : "text-teal")} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-[2rem] font-semibold tnum text-ink leading-none">
                      {fmt(seconds)}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-light mt-1">
                      of 05:00 {warn && "· 30s warning"}
                    </p>
                    {/* Faux waveform */}
                    <div className="mt-3 flex items-end gap-[3px] h-8">
                      {Array.from({ length: 36 }).map((_, i) => {
                        const h = recording ? 20 + Math.abs(Math.sin((i + seconds) * 0.7)) * 60 : 14;
                        return (
                          <span
                            key={i}
                            className="flex-1 rounded-full"
                            style={{
                              height: `${h}%`,
                              background: recording
                                ? warn
                                  ? "var(--signal)"
                                  : "var(--teal-light)"
                                : "var(--paper-3)",
                              transition: "height 0.3s ease",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  {!recording ? (
                    <button
                      onClick={() => setRecording(true)}
                      className="btn-primary flex-1 justify-center text-sm"
                    >
                      <Mic className="h-4 w-4" /> Start recording
                    </button>
                  ) : (
                    <button
                      onClick={() => setRecording(false)}
                      className="btn-clay flex-1 justify-center text-sm"
                    >
                      <Square className="h-4 w-4" /> Stop
                    </button>
                  )}
                  <button onClick={reset} className="btn-ghost text-sm !px-4" aria-label="Reset">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Transcript example */}
              <div className="card-paper overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-paper-3 bg-paper-2/30">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                    {voiceFeature.transcript.date}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="tag tag-cat" style={{ fontSize: "8.5px" }}>
                      {voiceFeature.transcript.category}
                    </span>
                    <span className={cn("tag", `tag-${voiceFeature.transcript.flag}`)} style={{ fontSize: "8.5px" }}>
                      {voiceFeature.transcript.flag}
                    </span>
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <p className="font-serif text-[1.05rem] leading-[1.7] text-ink-2">
                    {voiceFeature.transcript.original}
                  </p>

                  {/* Purpose-based tags (item 2 from Additional Items) */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink-light mr-1">
                      Relevant for:
                    </span>
                    {["SENCO meeting", "Annual review", "DLA application"].map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
                        style={{ background: "#f0e4c8", color: "#944a2c" }}
                      >
                        <span className="h-1 w-1 rounded-full bg-clay" />
                        {p}
                      </span>
                    ))}
                    <button className="font-mono text-[10px] uppercase tracking-wider text-teal hover:text-teal-deep ml-1">
                      + Add
                    </button>
                  </div>

                  <div className="mt-5 p-4 rounded-lg border border-paper-3 bg-paper-2/30">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-clay mb-1.5">
                      AI follow-up
                    </p>
                    <p className="font-serif text-[14px] italic text-ink-2">{voiceFeature.transcript.followup.q}</p>
                    <p className="mt-2 font-serif text-[14px] text-ink">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-light mr-2">
                        {voiceFeature.transcript.loggedBy}:
                      </span>
                      {voiceFeature.transcript.followup.a}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-paper-3">
                    <button className="flex items-center gap-1.5 text-[12px] font-display text-ink-2 hover:text-teal">
                      <Pin className="h-3.5 w-3.5" /> Pin
                    </button>
                    <button className="flex items-center gap-1.5 text-[12px] font-display text-ink-2 hover:text-teal ml-auto">
                      <Languages className="h-3.5 w-3.5" /> Translate
                    </button>
                    <button className="flex items-center gap-1.5 text-[12px] font-display text-sage">
                      <Check className="h-3.5 w-3.5" /> Saved
                    </button>
                  </div>
                  <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light">
                    Logged by {voiceFeature.transcript.loggedBy} · source audio deleted
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
