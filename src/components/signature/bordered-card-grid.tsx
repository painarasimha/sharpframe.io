import Link from "next/link";
import * as Icons from "lucide-react";

import { cn } from "@/lib/utils";

export interface GridCard {
  icon: string;
  title: string;
  body: string;
  link?: { label: string; href: string } | null;
}

/**
 * 5 — Bordered card grid. Cards share 1px borders: no gaps, no rounded
 * corners. Achieved with a 1px `--line` background showing through a
 * `gap-px` grid.
 */
export function BorderedCardGrid({
  cards,
  columns = 4,
  className,
}: {
  cards: readonly GridCard[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid list-none gap-px border border-line bg-line",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 2 && "sm:grid-cols-2",
        className
      )}
    >
      {cards.map((card) => {
        const Icon =
          (Icons as unknown as Record<string, Icons.LucideIcon>)[card.icon] ??
          Icons.Circle;
        return (
          <li
            key={card.title}
            className="flex flex-col bg-surface p-6 transition-colors hover:bg-bg sm:p-7"
          >
            <span className="mb-5 flex items-center gap-2">
              <Icon className="size-5 text-ink" strokeWidth={1.5} aria-hidden />
              <span aria-hidden className="size-1.5 bg-accent" />
            </span>
            <h3 className="mb-2.5 text-[17px] font-semibold tracking-[-0.01em] text-ink">
              {card.title}
            </h3>
            <p className="flex-1 text-[14.5px] leading-[1.65] text-muted">
              {card.body}
            </p>
            {card.link ? (
              <Link
                href={card.link.href}
                className="group/link mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent-ink"
              >
                {card.link.label}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
                >
                  →
                </span>
              </Link>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
