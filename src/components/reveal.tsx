"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
  as?: "div" | "li";
}

/** Fades in once on first scroll into view. Disabled by reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  style,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement>(null);
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = as as React.ElementType;

  return (
    <Comp
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Comp>
  );
}
