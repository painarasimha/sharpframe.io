"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: "div" | "li";
}

/**
 * Fades + lifts its children into view the first time they intersect
 * the viewport — the React replacement for the original `.fade-up`
 * IntersectionObserver script.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  style,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = as;

  return (
    <Comp
      // @ts-expect-error — ref typing differs between div and li, both accept it.
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </Comp>
  );
}
