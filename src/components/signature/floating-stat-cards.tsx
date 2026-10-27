import * as Icons from "lucide-react";

import { cn } from "@/lib/utils";

export interface StatCard {
  icon: string;
  stat: string;
  label: string;
}

/** Tilts, in source order: two down the left, two down the right. */
const TILT = [-4, 3, 4, -3];
/** Pulled out past the copy column so nothing ever sits over the headline. */
const PLACEMENT = [
  "-left-6 top-[8%]",
  "left-2 top-[56%]",
  "-right-6 top-[16%]",
  "right-2 top-[64%]",
];

function Face({ card, tilt }: { card: StatCard; tilt: number }) {
  const Icon =
    (Icons as unknown as Record<string, Icons.LucideIcon>)[card.icon] ??
    Icons.Circle;

  return (
    <>
      <Icon className="mb-3 size-4 text-ink" strokeWidth={1.75} aria-hidden />
      <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
        {card.stat}
      </p>
      <p className="mt-1 text-[12px] leading-[1.45] text-muted">{card.label}</p>
      <span className="sr-only">{tilt}</span>
    </>
  );
}

/**
 * 1 — Floating stat cards. Four small white cards, slightly rotated, two each
 * side of the hero headline, drifting 5px over 6s.
 *
 * Hidden below xl; `StatCardGrid` renders the same data as a 2×2 grid there.
 */
export function FloatingStatCards({ cards }: { cards: readonly StatCard[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
      {cards.slice(0, 4).map((card, i) => (
        <div
          key={card.stat}
          className={cn(
            "animate-float absolute w-[186px] border border-line bg-surface px-4 py-3.5 shadow-[0_10px_30px_-18px_rgba(11,11,12,0.35)]",
            PLACEMENT[i]
          )}
          style={
            {
              "--tilt": `rotate(${TILT[i]}deg)`,
              transform: `rotate(${TILT[i]}deg)`,
              animationDelay: `${i * 1.3}s`,
            } as React.CSSProperties
          }
        >
          <Face card={card} tilt={TILT[i]} />
        </div>
      ))}
    </div>
  );
}

/** The mobile and tablet form: a plain 2×2 grid below the hero buttons. */
export function StatCardGrid({ cards }: { cards: readonly StatCard[] }) {
  return (
    <ul className="mt-12 grid list-none grid-cols-2 gap-px border border-line bg-line xl:hidden">
      {cards.map((card) => {
        const Icon =
          (Icons as unknown as Record<string, Icons.LucideIcon>)[card.icon] ??
          Icons.Circle;
        return (
          <li key={card.stat} className="bg-surface px-4 py-5">
            <Icon className="mb-3 size-4 text-ink" strokeWidth={1.75} aria-hidden />
            <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
              {card.stat}
            </p>
            <p className="mt-1 text-[12px] leading-[1.45] text-muted">
              {card.label}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
