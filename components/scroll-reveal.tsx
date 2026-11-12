"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const THRESHOLD = 0.12;
const ROOT_MARGIN = "0px 0px -6% 0px";

function isBelowFold(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top >= window.innerHeight * 0.92;
}

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let observer: IntersectionObserver | null = null;
    let initialized = false;
    let fallbackTimer: number | null = null;

    function initReveal() {
      if (initialized) return;
      initialized = true;
      cleanupListeners();

      const container = mainRef.current ?? document;
      const targets = Array.from(
        container.querySelectorAll<HTMLElement>("[data-reveal]")
      );

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            el.removeAttribute("data-reveal-pending");
            observer?.unobserve(el);
          }
        },
        { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
      );

      targets.forEach((el) => {
        if (isBelowFold(el)) {
          el.setAttribute("data-reveal-pending", "");
          observer!.observe(el);
        }
      });
    }

    function cleanupListeners() {
      window.removeEventListener("scroll", initReveal);
      window.removeEventListener("wheel", initReveal);
      window.removeEventListener("touchmove", initReveal);
      window.removeEventListener("pointerdown", initReveal);
      if (fallbackTimer !== null) {
        window.clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
    }

    // Attach interaction listeners so DOM mutation only occurs after the user starts scrolling/interacting
    // (guaranteeing that initial SSR hydration of the page is 100% finished).
    window.addEventListener("scroll", initReveal, { passive: true, once: true });
    window.addEventListener("wheel", initReveal, { passive: true, once: true });
    window.addEventListener("touchmove", initReveal, { passive: true, once: true });
    window.addEventListener("pointerdown", initReveal, { passive: true, once: true });

    // Fallback: If the user stays idle at the top of the page, initialize after hydration has settled.
    fallbackTimer = window.setTimeout(initReveal, 1800);

    return () => {
      cleanupListeners();
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <main id="main-content" ref={mainRef}>
      {children}
    </main>
  );
}
