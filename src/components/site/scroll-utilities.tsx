"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating back-to-top button + reading progress bar.
 * Appears after scrolling past the hero. Progress bar sits at the very top.
 */
export function ScrollUtilities() {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      setShowButton(scrollTop > 800);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar, top of viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
        style={{ background: "transparent" }}
        aria-hidden
      >
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, var(--teal), var(--clay))",
          }}
        />
      </div>

      {/* Back-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 z-[60] grid h-12 w-12 place-items-center rounded-full shadow-lg transition-all duration-300",
          "bg-teal text-paper hover:bg-teal-deep",
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Back to top"
        style={{ boxShadow: "0 8px 24px -6px rgba(18,58,64,0.3)" }}
      >
        <ArrowUp className="h-5 w-5" />
        <span
          className="absolute -top-1 -right-1 h-3 w-3 rounded-full"
          style={{ background: "var(--clay)" }}
          aria-hidden
        />
      </button>
    </>
  );
}
