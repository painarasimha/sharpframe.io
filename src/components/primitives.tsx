import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The 1100px frame. Content sits inside 1px side borders; the gutters outside
 * carry the diagonal hatching (see `Rails`).
 */
export function Frame({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1100px] px-4 sm:px-8", className)}
      {...props}
    />
  );
}

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** `dark` renders the ink → #17171A gradient band. */
  tone?: "light" | "dark";
  /** Faint dot grid behind the content. */
  dots?: boolean;
  /** Hatched gutters either side of the 1100px frame. */
  rails?: boolean;
  /** Hairline divider above the section. */
  divided?: boolean;
};

export function Section({
  tone = "light",
  dots = false,
  rails = false,
  divided = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-28",
        tone === "dark" && "section-dark",
        rails && "rails",
        divided && "border-t border-line",
        className
      )}
      {...props}
    >
      {dots ? (
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute inset-0"
        />
      ) : null}

      {rails ? (
        // The frame paints over the hatching and draws its own side rules.
        <div className="relative mx-auto min-h-full w-full max-w-[1100px] border-x border-line bg-bg">
          <div className="px-4 py-20 sm:px-8 sm:py-28">{children}</div>
        </div>
      ) : (
        <div className="relative py-20 sm:py-28">{children}</div>
      )}
    </section>
  );
}

/** Geist Mono, uppercase, wide-tracked — the section label. */
export function Eyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mb-5 font-mono text-[13px] uppercase tracking-[0.12em] text-muted",
        className
      )}
      {...props}
    />
  );
}

/** Ink text with a lime highlighter stroke behind it. */
export function Marker({ children }: { children: React.ReactNode }) {
  return <span className="marker">{children}</span>;
}

interface HeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  centered?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function Heading({
  eyebrow,
  title,
  intro,
  centered = false,
  as: Tag = "h2",
  className,
}: HeadingProps) {
  return (
    <div className={cn("mb-12 sm:mb-16", centered && "text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "balance font-semibold tracking-[-0.02em] text-ink",
          Tag === "h1"
            ? "text-[clamp(40px,6vw,68px)] leading-[1.02]"
            : "text-[clamp(28px,4vw,46px)] leading-[1.08]"
        )}
      >
        {title}
      </Tag>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-[620px] text-[17px] leading-[1.7] text-muted",
            centered && "mx-auto"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/** Square-cornered bordered card. */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("border border-line bg-surface p-6 sm:p-7", className)}
      {...props}
    />
  );
}

/** Line icon in ink with a small lime dot beside it. */
export function IconMark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("mb-5 flex items-center gap-2", className)}>
      <span className="text-ink">{children}</span>
      <span aria-hidden className="size-1.5 bg-accent" />
    </span>
  );
}

/** Big tabular number, used for stats and the 5x guarantee. */
export function Stat({
  value,
  label,
  className,
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="tabular text-[clamp(32px,4vw,48px)] font-semibold leading-none tracking-[-0.02em] text-ink">
        {value}
      </p>
      <p className="mt-2.5 text-[14px] leading-[1.5] text-muted">{label}</p>
    </div>
  );
}
