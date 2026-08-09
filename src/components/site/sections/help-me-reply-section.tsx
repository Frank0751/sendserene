"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { helpMeReply } from "@/lib/site-content";
import { Mail, Copy, Check, FileText, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function HelpMeReplySection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const preset = helpMeReply.presets[active];

  const handleCopy = () => {
    const text = `To: ${preset.recipient}\nSubject: ${preset.subject}\n\n${preset.body}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <section id="help-reply" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{helpMeReply.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {helpMeReply.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {helpMeReply.body}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-5 lg:gap-6 items-start">
            {/* Left, preset selector */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto scroll-soft lg:overflow-visible">
              {helpMeReply.presets.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all shrink-0 lg:w-full",
                    active === i
                      ? "border-teal bg-teal-pale/50"
                      : "border-paper-3 bg-paper-card hover:border-ink-light/40"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-8 w-8 place-items-center rounded-lg shrink-0",
                      active === i ? "bg-teal text-paper" : "bg-paper-2 text-ink-light"
                    )}
                  >
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className={cn(
                      "font-display text-[13px] font-medium leading-tight",
                      active === i ? "text-teal-deep" : "text-ink-2"
                    )}>
                      {p.label}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right, draft viewer */}
            <div className="card-paper overflow-hidden">
              {/* Window chrome */}
              <div className="window-chrome">
                <span className="window-dot" style={{ background: "#e0896a" }} />
                <span className="window-dot" style={{ background: "#d4b06a" }} />
                <span className="window-dot" style={{ background: "#7fae9a" }} />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">
                  draft · {preset.id}
                </span>
                <button
                  onClick={handleCopy}
                  className="ml-auto flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider text-paper/70 hover:text-paper transition-colors"
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="p-5 lg:p-7">
                {/* Email metadata */}
                <div className="space-y-2.5 pb-5 mb-5 border-b border-paper-3">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light w-16 shrink-0 mt-0.5">To</span>
                    <p className="font-serif text-[13.5px] text-ink-2 flex-1">{preset.recipient}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light w-16 shrink-0 mt-0.5">Subject</span>
                    <p className="font-display text-[13.5px] font-medium text-ink flex-1">{preset.subject}</p>
                  </div>
                </div>

                {/* Email body */}
                <div className="max-h-[320px] overflow-y-auto scroll-soft pr-2">
                  <pre className="font-serif text-[13.5px] leading-[1.65] text-ink-2 whitespace-pre-wrap">
                    {preset.body}
                  </pre>
                </div>

                {/* Note */}
                <div className="mt-5 p-3.5 rounded-lg border border-clay/20 bg-clay-pale/20 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-clay mt-0.5 shrink-0" />
                  <p className="font-serif text-[12.5px] leading-[1.55] text-ink-2 italic">
                    {preset.note}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap gap-2 pt-5 border-t border-paper-3">
                  <button className="btn-primary text-[13px] !py-2 !px-4">
                    <FileText className="h-3.5 w-3.5" /> Save to vault
                  </button>
                  <button className="btn-ghost text-[13px] !py-2 !px-4">
                    Edit draft
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 flex items-start gap-2 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-light leading-relaxed">
            <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-clay" />
            {helpMeReply.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
