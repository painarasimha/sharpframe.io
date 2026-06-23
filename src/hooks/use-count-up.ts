"use client";

import * as React from "react";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  /** Wait this long after the element enters view before counting. */
  startDelay?: number;
  /** When false, the value renders immediately without animating. */
  enabled?: boolean;
}

/**
 * Eased count-up animation that fires once the returned ref enters the
 * viewport — the React replacement for the original `animateCounter`.
 */
export function useCountUp<T extends HTMLElement>({
  target,
  duration = 1200,
  startDelay = 0,
  enabled = true,
}: UseCountUpOptions) {
  const ref = React.useRef<T>(null);
  const [value, setValue] = React.useState(enabled ? 0 : target);

  React.useEffect(() => {
    // Disabled tickers render their final value via initial state — no animation.
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(run, startDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [target, duration, startDelay, enabled]);

  return { ref, value };
}
