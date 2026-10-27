"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * 6 — Question chips marquee. Three rows of bordered pills, each with a small
 * "?" badge, scrolling sideways in alternating directions, faded at both
 * edges, paused on hover.
 *
 * The questions are decorative repetition of copy already stated in the
 * section heading, so the duplicated track is hidden from assistive tech and
 * the whole strip is exposed once as a plain list.
 */
export function QuestionChips({ questions }: { questions: readonly string[] }) {
  const [paused, setPaused] = React.useState(false);

  // Three roughly equal rows, order preserved.
  const perRow = Math.ceil(questions.length / 3);
  const rows = [
    questions.slice(0, perRow),
    questions.slice(perRow, perRow * 2),
    questions.slice(perRow * 2),
  ];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="flex flex-col gap-3"
    >
      {/* The real content, for screen readers and for no-JS. */}
      <ul className="sr-only">
        {questions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} aria-hidden className="fade-x relative overflow-hidden">
          <div
            className={cn(
              "flex w-max gap-3",
              rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-rev"
            )}
            style={{
              animationPlayState: paused ? "paused" : "running",
              animationDuration: `${44 + rowIndex * 9}s`,
            }}
          >
            {[...row, ...row].map((question, i) => (
              <span
                key={`${question}-${i}`}
                className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-surface py-2 pl-2 pr-4"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-on-accent">
                  ?
                </span>
                <span className="text-[14px] text-ink">{question}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
