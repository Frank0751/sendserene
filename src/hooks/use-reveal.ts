"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll. Returns a ref to attach and a boolean for whether
 * it has entered the viewport.
 *
 * Respects prefers-reduced-motion by starting visible.
 * Uses IntersectionObserver with a fallback timeout to ensure content
 * is never permanently hidden.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);

  // SSR-safe lazy init: reduced-motion users start visible.
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    // Fallback: reveal after 2.5s regardless, so content is never stuck hidden.
    const fallback = setTimeout(() => setVisible(true), 2500);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            clearTimeout(fallback);
            break;
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px", ...options }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [visible, options]);

  return { ref, visible };
}
