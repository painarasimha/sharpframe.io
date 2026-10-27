"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  items: readonly string[];
}

/**
 * Minimal accessible tabs: roving focus with arrow keys, Home and End,
 * correct ARIA wiring. Hand-rolled rather than pulling in another dependency
 * for one section.
 */
export function Tabs({ tabs }: { tabs: readonly TabItem[] }) {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: React.KeyboardEvent) {
    const last = tabs.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Business function"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(node) => {
              tabRefs.current[i] = node;
            }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${tab.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-[2px] border px-4 py-2.5 text-[14px] font-medium transition-colors",
              i === active
                ? "border-ink bg-ink text-bg"
                : "border-line bg-surface text-muted hover:border-ink/35 hover:text-ink"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={i !== active}
          className="mt-8"
        >
          <ul className="grid list-none gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {tab.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-surface p-6 text-[15px] leading-[1.6] text-ink"
              >
                <span aria-hidden className="mt-[9px] size-1.5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
