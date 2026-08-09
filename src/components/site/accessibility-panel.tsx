"use client";

import { useEffect } from "react";
import { X, Type, Eye, Zap, Volume2, Sun, Moon, RotateCcw } from "lucide-react";
import { useA11y, type TextSize } from "@/hooks/use-a11y";
import { cn } from "@/lib/utils";

export function AccessibilityPanel() {
  const s = useA11y();

  // Lock scroll when open
  useEffect(() => {
    if (s.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [s.open]);

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") s.setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [s]);

  if (!s.open) return null;

  const textSizes: { id: TextSize; label: string }[] = [
    { id: "default", label: "A" },
    { id: "large", label: "A" },
    { id: "xlarge", label: "A" },
  ];

  const reset = () => {
    s.setTextSize("default");
    if (s.dyslexiaFont) s.toggleDyslexia();
    if (s.highContrast) s.toggleContrast();
    if (s.reducedMotion) s.toggleMotion();
    if (s.easyRead) s.toggleEasyRead();
    if (s.theme === "dark") s.toggleTheme();
  };

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Accessibility settings">
      <div
        className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
        onClick={() => s.setOpen(false)}
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-[400px] bg-paper border-l border-paper-3 shadow-2xl overflow-y-auto scroll-soft animate-in slide-in-from-right duration-300">
        <div className="sticky top-0 bg-paper/95 backdrop-blur-sm border-b border-paper-3 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <p className="eyebrow">Accessibility</p>
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink mt-0.5">
              Make this work for you
            </h2>
          </div>
          <button
            onClick={() => s.setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-md text-ink-2 hover:bg-paper-2"
            aria-label="Close accessibility settings"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-7">
          {/* Text size */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Type className="h-4 w-4 text-teal" />
              <h3 className="font-display text-[13px] font-semibold uppercase tracking-wider text-ink-2">
                Text size
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {textSizes.map((ts, i) => (
                <button
                  key={ts.id}
                  onClick={() => s.setTextSize(ts.id)}
                  className={cn(
                    "h-14 rounded-lg border font-display font-semibold transition-all",
                    s.textSize === ts.id
                      ? "border-teal bg-teal-pale text-teal-deep"
                      : "border-paper-3 bg-paper-card text-ink-2 hover:border-ink-light",
                    i === 0 && "text-base",
                    i === 1 && "text-lg",
                    i === 2 && "text-xl"
                  )}
                  aria-pressed={s.textSize === ts.id}
                >
                  {ts.label}
                </button>
              ))}
            </div>
          </section>

          {/* Toggles */}
          <section className="space-y-2.5">
            <ToggleRow
              icon={<Eye className="h-4 w-4 text-teal" />}
              label="Dyslexia-friendly font"
              desc="Wider spacing, even line height."
              on={s.dyslexiaFont}
              onClick={s.toggleDyslexia}
            />
            <ToggleRow
              icon={<div className="h-4 w-4 rounded-sm border-2 border-teal" />}
              label="High contrast"
              desc="Stronger text and borders."
              on={s.highContrast}
              onClick={s.toggleContrast}
            />
            <ToggleRow
              icon={<Zap className="h-4 w-4 text-teal" />}
              label="Reduce motion"
              desc="No transitions or animations."
              on={s.reducedMotion}
              onClick={s.toggleMotion}
            />
            <ToggleRow
              icon={<Volume2 className="h-4 w-4 text-teal" />}
              label="Read-aloud hint"
              desc="Show a listen button on body text."
              on={s.readAloud}
              onClick={s.toggleReadAloud}
            />
            <ToggleRow
              icon={<Type className="h-4 w-4 text-teal" />}
              label="Easy Read mode"
              desc="Shorter lines, larger spacing, simpler layout."
              on={s.easyRead}
              onClick={s.toggleEasyRead}
            />
          </section>

          {/* Theme */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              {s.theme === "light" ? <Sun className="h-4 w-4 text-clay" /> : <Moon className="h-4 w-4 text-teal-light" />}
              <h3 className="font-display text-[13px] font-semibold uppercase tracking-wider text-ink-2">
                Appearance
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => s.theme !== "light" && s.toggleTheme()}
                className={cn(
                  "h-12 rounded-lg border font-display text-sm transition-all flex items-center justify-center gap-2",
                  s.theme === "light"
                    ? "border-teal bg-teal-pale text-teal-deep"
                    : "border-paper-3 bg-paper-card text-ink-2 hover:border-ink-light"
                )}
                aria-pressed={s.theme === "light"}
              >
                <Sun className="h-4 w-4" /> Light
              </button>
              <button
                onClick={() => s.theme !== "dark" && s.toggleTheme()}
                className={cn(
                  "h-12 rounded-lg border font-display text-sm transition-all flex items-center justify-center gap-2",
                  s.theme === "dark"
                    ? "border-teal bg-teal-pale text-teal-deep"
                    : "border-paper-3 bg-paper-card text-ink-2 hover:border-ink-light"
                )}
                aria-pressed={s.theme === "dark"}
              >
                <Moon className="h-4 w-4" /> Dark
              </button>
            </div>
          </section>

          {/* Reset */}
          <button
            onClick={reset}
            className="w-full btn-ghost justify-center text-sm !py-2.5"
          >
            <RotateCcw className="h-4 w-4" /> Reset to defaults
          </button>

          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-light leading-relaxed text-center pt-2 border-t border-paper-3">
            WCAG 2.2 Level AA. Your settings are kept on this device.
          </p>
        </div>
      </aside>
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  desc,
  on,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      role="switch"
      aria-checked={on}
      className={cn(
        "w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all",
        on ? "border-teal bg-teal-pale/60" : "border-paper-3 bg-paper-card hover:border-ink-light"
      )}
    >
      <span className="grid h-8 w-8 place-items-center rounded-md bg-paper-2 shrink-0">{icon}</span>
      <span className="flex-1 min-w-0">
        <span className="block font-display text-[13.5px] font-medium text-ink">{label}</span>
        <span className="block text-[12px] text-ink-light font-serif">{desc}</span>
      </span>
      <span
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors shrink-0",
          on ? "bg-teal" : "bg-paper-3"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-paper shadow transition-transform",
            on ? "translate-x-[22px]" : "translate-x-0.5"
          )}
        />
      </span>
    </button>
  );
}
