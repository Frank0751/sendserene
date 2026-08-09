"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { evidenceFeature } from "@/lib/site-content";
import { FileText, Download, Hash, Printer, ListOrdered, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function EvidenceSection() {
  const { ref, visible } = useReveal();
  const [view, setView] = useState<"pack" | "brief">("pack");
  const [showAttribution, setShowAttribution] = useState(true);
  const meta = evidenceFeature.meta;

  return (
    <section id="evidence" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{evidenceFeature.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              When the meeting lands, your case{" "}
              <em className="accent">is already made.</em>
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {evidenceFeature.body}
            </p>
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex gap-1 p-1 rounded-lg bg-paper-2 border border-paper-3">
              <button
                onClick={() => setView("pack")}
                className={cn(
                  "px-3.5 py-1.5 rounded-md text-[12.5px] font-display transition-colors",
                  view === "pack" ? "bg-paper-card text-ink shadow-sm" : "text-ink-mid hover:text-ink"
                )}
              >
                Evidence pack
              </button>
              <button
                onClick={() => setView("brief")}
                className={cn(
                  "px-3.5 py-1.5 rounded-md text-[12.5px] font-display transition-colors",
                  view === "brief" ? "bg-paper-card text-ink shadow-sm" : "text-ink-mid hover:text-ink"
                )}
              >
                Quick brief
              </button>
            </div>
            <button
              onClick={() => setShowAttribution(!showAttribution)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-paper-3 bg-paper-card text-[12.5px] font-display text-ink-2 hover:border-ink-light/40 transition-colors"
            >
              {showAttribution ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              Attribution {showAttribution ? "shown" : "hidden"}
            </button>
            <button className="ml-auto btn-ghost text-sm !py-2">
              <Download className="h-4 w-4" /> Download PDF
            </button>
          </div>

          {/* The document */}
          <div className="mt-6 rounded-[14px] border border-paper-3 overflow-hidden shadow-xl" style={{ boxShadow: "0 24px 50px -20px rgba(18,58,64,0.18)" }}>
            {/* Running header (page header) */}
            <div className="px-5 sm:px-7 py-3 border-b border-paper-3 bg-paper-2/50 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                {meta.child} · {meta.range}
              </p>
              <p className="font-mono text-[10px] tnum text-ink-light">
                {view === "pack" ? "Page 3 of 14" : "Page 14 of 14"}
              </p>
            </div>

            <div className="bg-paper-card p-5 sm:p-7 lg:p-9">
              {view === "pack" ? <PackView showAttribution={showAttribution} /> : <BriefView />}
            </div>

            {/* Footer */}
            <div className="px-5 sm:px-7 py-3 border-t border-paper-3 bg-paper-2/50 flex flex-wrap items-center gap-3 justify-between">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light">
                Generated {meta.generated} · {meta.filters}
              </p>
              <div className="flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-wider text-ink-light">
                <span className="flex items-center gap-1"><Hash className="h-3 w-3" /> Sequential</span>
                <span className="flex items-center gap-1"><ListOrdered className="h-3 w-3" /> Indexed</span>
                <span className="flex items-center gap-1"><Printer className="h-3 w-3" /> Print-safe</span>
              </div>
            </div>
          </div>

          {/* Pagination note */}
          <div className="mt-6 grid sm:grid-cols-[auto_1fr] gap-4 p-5 rounded-xl border border-paper-3 bg-paper-2/30">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-pale shrink-0">
              <ListOrdered className="h-5 w-5 text-teal" />
            </span>
            <div>
              <p className="font-display text-[14px] font-medium text-ink">
                Built for packs that run to hundreds of entries
              </p>
              <p className="mt-1.5 font-serif text-[13.5px] leading-[1.6] text-ink-mid">
                {evidenceFeature.pagination.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackView({ showAttribution }: { showAttribution: boolean }) {
  const meta = evidenceFeature.meta;
  return (
    <div>
      {/* Cover block */}
      <div className="mb-7 pb-6 border-b border-paper-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay">{evidenceFeature.meta.holder} · Evidence Pack</p>
        <h3 className="display mt-2 text-[1.75rem] text-ink">{meta.child}</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-[12.5px]">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Account holder</p>
            <p className="font-serif text-ink-2">{meta.holder}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Generated</p>
            <p className="font-serif text-ink-2">{meta.generated}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Date range</p>
            <p className="font-serif text-ink-2">{meta.range}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light">Entries</p>
            <p className="font-serif text-ink-2">{meta.count}</p>
          </div>
        </div>
      </div>

      {/* Index */}
      <div className="mb-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-3">
          Index · voice log entries
        </p>
        <ol className="space-y-1.5">
          {evidenceFeature.entries.map((e) => (
            <li key={e.n} className="flex items-baseline gap-3 text-[12.5px]">
              <span className="font-mono text-[11px] text-teal tnum w-7 shrink-0">#{e.n}</span>
              <span className="font-mono text-[11px] text-ink-light tnum w-28 shrink-0">{e.date.split(" · ")[0]}</span>
              <span className="font-serif text-ink-2 line-clamp-1">{e.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Entries */}
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-3">
        Voice log entries · chronological
      </p>
      <div className="space-y-4">
        {evidenceFeature.entries.map((e) => (
          <article key={e.n} className="rounded-xl border border-paper-3 p-4 lg:p-5 bg-paper/40">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-[11px] font-semibold text-teal tnum">Entry {e.n}</span>
              <span className="font-mono text-[10px] text-ink-light tnum">· {e.date}</span>
              <span className="tag tag-cat" style={{ fontSize: "8.5px" }}>{e.category}</span>
              <span className={cn("tag", `tag-${e.flag}`)} style={{ fontSize: "8.5px" }}>{e.flag}</span>
            </div>
            <p className="font-serif text-[1rem] leading-[1.65] text-ink-2">{e.text}</p>
            {e.followup && (
              <div className="mt-3 pl-4 border-l-2 border-paper-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-clay mb-1">AI follow-up</p>
                <p className="font-serif text-[13px] italic text-ink-mid">{e.followup.q}</p>
                <p className="mt-1 font-serif text-[13px] text-ink-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light mr-1.5">A:</span>
                  {e.followup.a}
                </p>
              </div>
            )}
            {showAttribution && (
              <p className="mt-3 pt-3 border-t border-paper-3 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light">
                Logged by {e.loggedBy}
              </p>
            )}
          </article>
        ))}
      </div>

      {/* Document excerpt */}
      <div className="mt-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-3">
          Document excerpt & jargon decoder
        </p>
        <div className="rounded-xl border border-paper-3 overflow-hidden">
          <div className="px-4 py-2.5 bg-paper-2/50 border-b border-paper-3">
            <p className="font-display text-[13px] font-medium text-ink">{evidenceFeature.excerpt.doc}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light mt-0.5">{evidenceFeature.excerpt.uploaded}</p>
          </div>
          <div className="p-4 lg:p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light mb-1.5">Original (OCR extract)</p>
            <p className="font-serif text-[13px] italic leading-[1.6] text-ink-mid mb-4">&ldquo;{evidenceFeature.excerpt.original}&rdquo;</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-teal mb-1.5">Plain-English decode</p>
            <p className="font-serif text-[13.5px] leading-[1.6] text-ink-2">{evidenceFeature.excerpt.decode}</p>
            <div className="mt-4 p-3 rounded-lg border border-clay/20 bg-clay-pale/30 flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-clay-deep">{evidenceFeature.excerpt.deadlineLabel}</p>
                <p className="font-display text-[1.1rem] font-semibold text-clay-deep tnum mt-0.5">{evidenceFeature.excerpt.deadline}</p>
              </div>
              <span className="tag tag-urgent" style={{ fontSize: "8px" }}>Reminder set</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefView() {
  const b = evidenceFeature.quickBrief;
  return (
    <div>
      <div className="mb-6 pb-5 border-b border-paper-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay">Quick brief · printable one-pager</p>
        <h3 className="display mt-2 text-[1.5rem] text-ink">{evidenceFeature.meta.child}</h3>
        <p className="font-serif text-[13px] text-ink-mid mt-1">{evidenceFeature.meta.range}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-3">Open deadlines & actions</p>
          <ul className="space-y-2.5">
            {b.openDeadlines.map((d) => (
              <li key={d.label} className="flex items-baseline justify-between gap-3 pb-2 border-b border-paper-3">
                <span className="font-serif text-[13px] text-ink-2">{d.label}</span>
                <span className="font-display text-[13px] font-medium text-teal tnum text-right">{d.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light mb-3">Key observations by category</p>
          <ul className="space-y-2.5">
            {b.byCategory.map((d) => (
              <li key={d.cat} className="pb-2 border-b border-paper-3">
                <p className="font-serif text-[13px] text-ink-2">{d.cat}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-light mt-0.5">{d.count}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg border border-paper-3 bg-paper-2/40">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light mb-1">Diagnosis labels on file</p>
        <p className="font-serif text-[13px] text-ink-2">{b.diagnosis}</p>
      </div>

      <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light leading-relaxed">
        SENDSerene is an organisation and evidence tool. It does not provide legal, medical, or educational advice. Generated by Sarah Bennett's account on 8 August 2026.
      </p>
    </div>
  );
}
