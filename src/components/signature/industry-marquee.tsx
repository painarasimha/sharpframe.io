import Link from "next/link";
import * as Icons from "lucide-react";

import { industries } from "@content/site";

/**
 * 2 (home section) — the "built for" strip. Industry names styled like a grey
 * logo row, scrolling slowly. Stands in for client logos until we have any.
 */
export function IndustryMarquee() {
  const items = [...industries, ...industries];

  return (
    <div className="fade-x relative overflow-hidden">
      <ul className="animate-marquee flex w-max list-none items-center">
        {items.map((industry, i) => {
          const Icon =
            (Icons as unknown as Record<string, Icons.LucideIcon>)[
              industry.icon
            ] ?? Icons.Circle;
          return (
            <li key={`${industry.slug}-${i}`} className="px-6">
              <Link
                href={`/industries#${industry.slug}`}
                tabIndex={i < industries.length ? 0 : -1}
                aria-hidden={i >= industries.length}
                className="flex items-center gap-2.5 whitespace-nowrap text-muted transition-colors hover:text-ink"
              >
                <Icon className="size-4" strokeWidth={1.5} aria-hidden />
                <span className="text-[15px] font-medium">{industry.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
