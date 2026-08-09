"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { faqs } from "@/lib/site-content";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-paper-3 bg-paper-2/30 paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">FAQ</p>
              <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
                The questions parents actually ask.
              </h2>
              <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
                Short answers. If you need more, the footer lists IPSEA, SENDIASS and the Council for Disabled Children. They give free, independent advice.
              </p>
            </div>

            <div className="divide-y divide-paper-3 border-y border-paper-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className={cn(
                        "font-display text-[15.5px] font-medium transition-colors",
                        isOpen ? "text-teal" : "text-ink group-hover:text-teal"
                      )}>
                        {f.q}
                      </span>
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-paper-3 bg-paper-card shrink-0">
                        {isOpen ? <Minus className="h-3.5 w-3.5 text-teal" /> : <Plus className="h-3.5 w-3.5 text-ink-mid" />}
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300",
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="font-serif text-[14px] leading-[1.7] text-ink-mid pr-11">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
