"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  num: string;
  name: string;
}

/**
 * Sticky side navigation for the services page. Highlights whichever block is
 * currently in view. Hidden below `lg`, where the page simply reads top to
 * bottom.
 */
export function ServicesNav({ items }: { items: readonly NavItem[] }) {
  const [activeId, setActiveId] = React.useState(items[0]?.id);

  React.useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Services" className="hidden lg:block">
      <ul className="sticky top-28 list-none space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
              className={cn(
                "block border-l-2 py-2 pl-4 text-[14px] transition-colors",
                activeId === item.id
                  ? "border-accent font-medium text-ink"
                  : "border-line text-muted hover:text-ink"
              )}
            >
              <span className="font-mono text-[11px] text-muted">{item.num}</span>{" "}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
