"use client";

import { useReveal } from "@/hooks/use-reveal";
import { emailIngestion } from "@/lib/site-content";
import { Mail, ArrowRight, ScanLine, Sparkles, FolderArchive } from "lucide-react";
import { cn } from "@/lib/utils";

const flowIcons = [Mail, ScanLine, Sparkles, FolderArchive];

export function EmailIngestionSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="email-ingestion" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Left, copy */}
            <div className="">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[9.5px] uppercase tracking-[0.14em] border border-paper-3 bg-paper-card text-ink-light mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                {emailIngestion.eyebrow}
              </span>
              <h2 className="display text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                {emailIngestion.title}
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                {emailIngestion.body}
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-light leading-relaxed flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-clay mt-1.5 shrink-0" />
                {emailIngestion.note}
              </p>
            </div>

            {/* Right, flow visual */}
            <div>
              {/* Email address mockup */}
              <div className="card-paper p-5 mb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-pale shrink-0">
                    <Mail className="h-5 w-5 text-teal" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">
                      Your dedicated address
                    </p>
                    <p className="font-mono text-[14px] text-teal-deep truncate">
                      sarah.bennett@inbound.sendserene.co.uk
                    </p>
                  </div>
                  <button className="font-mono text-[9px] uppercase tracking-wider text-ink-light hover:text-teal border border-paper-3 rounded px-2 py-1">
                    Copy
                  </button>
                </div>
              </div>

              {/* Flow steps */}
              <div className="space-y-2">
                {emailIngestion.flow.map((step, i) => {
                  const Icon = flowIcons[i];
                  return (
                    <div key={step.step}>
                      <div className="card-paper p-4 lg:p-5 flex items-center gap-4 card-hover">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-pale shrink-0">
                          <Icon className="h-5 w-5 text-teal" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] tnum text-ink-light">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="font-display text-[14.5px] font-semibold text-ink">
                              {step.step}
                            </p>
                          </div>
                          <p className="font-serif text-[13px] leading-[1.55] text-ink-mid mt-0.5">
                            {step.body}
                          </p>
                        </div>
                      </div>
                      {i < emailIngestion.flow.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowRight className="h-4 w-4 text-paper-3 rotate-90" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
