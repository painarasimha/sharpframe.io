"use client";

import { industries } from "@content/site";

/**
 * Filter chips that jump to an industry card. Plain anchors, so they work
 * without JS and are shareable as deep links; the click handler only adds
 * smooth scrolling with the sticky header's height accounted for.
 */
export function IndustryFilter() {
  return (
    <nav aria-label="Jump to industry" className="mt-10">
      <ul className="flex list-none flex-wrap gap-2">
        {industries.map((industry) => (
          <li key={industry.slug}>
            <a
              href={`#${industry.slug}`}
              className="inline-block rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] text-muted transition-colors hover:border-ink/35 hover:text-ink"
            >
              {industry.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
