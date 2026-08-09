"use client";

import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { glossary } from "@/lib/site-content";
import { Search, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function GlossarySection() {
  const { ref, visible } = useReveal();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return glossary.terms.filter((t) => {
      const matchesCat = category === "All" || t.category === category;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.full.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="glossary" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{glossary.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {glossary.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {glossary.body}
            </p>
          </div>

          {/* Search + filters */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2.5 px-4 py-3 rounded-lg border border-paper-3 bg-paper-card focus-within:border-teal transition-colors">
              <Search className="h-4 w-4 text-ink-light" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a term, definition, or acronym…"
                className="flex-1 bg-transparent font-serif text-[14px] text-ink placeholder:text-ink-faint focus:outline-none"
                aria-label="Search glossary"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="font-mono text-[10px] uppercase tracking-wider text-ink-light hover:text-teal"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {glossary.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.12em] transition-all border",
                  category === cat
                    ? "bg-teal text-paper border-teal"
                    : "bg-paper-card text-ink-light border-paper-3 hover:border-teal hover:text-teal"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
            {filtered.length} {filtered.length === 1 ? "term" : "terms"} found
          </p>

          {/* Term list */}
          <div className="mt-4 card-paper divide-y divide-paper-3 overflow-hidden">
            {filtered.length === 0 ? (
              <div className="p-10 text-center">
                <BookOpen className="h-8 w-8 text-ink-faint mx-auto mb-3" />
                <p className="font-serif text-[14px] text-ink-mid">
                  No terms match &ldquo;{query}&rdquo; in this category.
                </p>
                <button
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                  }}
                  className="mt-3 font-mono text-[11px] uppercase tracking-wider text-teal hover:text-teal-deep"
                >
                  Reset search
                </button>
              </div>
            ) : (
              filtered.map((t) => {
                const isExpanded = expanded === t.term;
                return (
                  <div key={t.term}>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : t.term)}
                      className="w-full flex items-center justify-between gap-4 p-4 lg:p-5 text-left hover:bg-paper-2/30 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-display text-[15px] font-semibold text-ink shrink-0">
                          {t.term}
                        </span>
                        <span className="font-serif text-[13px] text-ink-light truncate hidden sm:block">
                          {t.full}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={cn(
                            "tag",
                            t.category === "Legal" ? "tag-cat" :
                            t.category === "Education" ? "tag-positive" :
                            t.category === "Health" ? "tag-neutral" :
                            "tag-concern"
                          )}
                          style={{ fontSize: "8px" }}
                        >
                          {t.category}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-ink-light" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-ink-light" />
                        )}
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-4 lg:px-5 pb-5 pt-1 bg-paper-2/20">
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-clay mb-2 sm:hidden">
                          {t.full}
                        </p>
                        <p className="font-serif text-[14px] leading-[1.65] text-ink-2">
                          {t.definition}
                        </p>
                        {t.related && (
                          <p className="mt-3 flex items-center gap-2">
                            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">
                              Related:
                            </span>
                            <span className="font-mono text-[10px] text-teal">{t.related}</span>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Note */}
          <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-light leading-relaxed">
            Sample glossary · {glossary.terms.length} of hundreds of terms · full version covers all sixteen languages · validated by Zifankrah Ltd
          </p>
        </div>
      </div>
    </section>
  );
}
