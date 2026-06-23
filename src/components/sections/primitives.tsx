import * as React from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1160px] px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand",
        className
      )}
      {...props}
    />
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", centered && "text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mb-3.5 font-display text-[clamp(30px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-text [&_span]:text-brand">
        {title}
      </h2>
      {desc ? (
        <p
          className={cn(
            "max-w-[540px] text-base font-light leading-[1.7] text-dim",
            centered && "mx-auto"
          )}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}
