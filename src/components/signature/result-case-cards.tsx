"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import type { CaseCard } from "@content/site";

/**
 * 7 — Result case cards in a carousel. Large dark cards: client type in mono,
 * one big result headline, a one-line description, and a screenshot row.
 *
 * Scroll-snap does the moving; the arrows just nudge it, so touch and
 * keyboard scrolling work without any JS state.
 */
export function ResultCaseCards({
  cards,
  ctaCard,
}: {
  cards: readonly CaseCard[];
  ctaCard?: { heading: string; line: string } | null;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);

  function nudge(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * (track.clientWidth * 0.85),
      behavior: "smooth",
    });
  }

  const showArrows = cards.length + (ctaCard ? 1 : 0) > 1;

  return (
    <div>
      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <article
            key={card.slug}
            className="section-dark flex w-[86vw] shrink-0 snap-start flex-col p-7 sm:w-[560px] sm:p-9"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              {card.label}
            </p>
            <h3 className="balance mt-7 text-[clamp(24px,3vw,34px)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              {card.headline}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-muted">
              {card.line}
            </p>

            {/* [Replace with 3 anonymized screenshots] */}
            <div className="mt-8 grid flex-1 grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex aspect-[3/4] items-center justify-center border border-dashed border-line px-2 text-center font-mono text-[10px] leading-[1.4] text-muted"
                >
                  [screenshot]
                </div>
              ))}
            </div>

            <Link
              href={card.href}
              className="group/link mt-8 inline-flex w-fit items-center gap-1.5 text-[15px] font-medium text-accent"
            >
              Read the case
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
              >
                →
              </span>
            </Link>
          </article>
        ))}

        {ctaCard ? (
          <article className="flex w-[86vw] shrink-0 snap-start flex-col justify-center border-2 border-accent bg-surface p-7 sm:w-[420px] sm:p-9">
            <h3 className="text-[clamp(22px,2.6vw,30px)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
              {ctaCard.heading}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-muted">
              {ctaCard.line}
            </p>
            <div className="mt-8">
              <CtaButton short location="case_carousel_cta" />
            </div>
          </article>
        ) : null}
      </div>

      {showArrows ? (
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous case study"
            className="flex size-10 items-center justify-center rounded-[2px] border border-line text-ink transition-colors hover:border-ink"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next case study"
            className="flex size-10 items-center justify-center rounded-[2px] border border-line text-ink transition-colors hover:border-ink"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
