import Link from "next/link";

import { site } from "@content/site";
import { cn } from "@/lib/utils";

/**
 * Wordmark + a small lime square-frame icon (four corner brackets).
 * Placeholder until a designed logo exists — kept as inline SVG so the mark
 * can be swapped without touching layout.
 */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string | null;
}) {
  const content = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="text-[19px] font-bold lowercase tracking-[-0.03em]">
        {site.wordmark}
      </span>
      <FrameMark />
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} className="inline-flex" aria-label={`${site.name} home`}>
      {content}
    </Link>
  );
}

export function FrameMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn("size-[14px] shrink-0", className)}
      fill="none"
      stroke="var(--accent-ink)"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M1 5V1h4M11 1h4v4M15 11v4h-4M5 15H1v-4" />
    </svg>
  );
}
