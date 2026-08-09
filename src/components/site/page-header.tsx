"use client";

import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  body?: string;
  bgImage?: string;
}

/**
 * Shared full-height page header for sub-pages.
 * Includes a back-to-home link, eyebrow, title, body.
 * Optionally blends a background image into the hero.
 */
export function PageHeader({ eyebrow, title, body, bgImage }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden paper-grain min-h-[70vh] flex flex-col justify-center border-b border-paper-3">
      {/* Optional background image, blended */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--color-paper) 0%, var(--color-paper) 30%, transparent 70%), linear-gradient(to bottom, transparent 0%, var(--color-paper) 90%)",
            }}
          />
        </div>
      )}

      {/* Ambient warm radial */}
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, rgba(184,92,56,0.18), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 py-16 lg:py-20 w-full">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 min-h-6 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light hover:text-teal transition-colors mb-5"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </a>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-ink max-w-[18ch]">
          {title}
        </h1>
        {body && (
          <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid max-w-2xl">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
