import Link from "next/link";

/** 2 — Announcement pill: text · divider · link with an arrow. */
export function AnnouncementPill({
  text,
  link,
  href,
}: {
  text: string;
  link: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex max-w-full items-center gap-3 rounded-full border border-line bg-surface py-1.5 pl-4 pr-3 text-left transition-colors hover:border-ink/35"
    >
      <span className="truncate text-[13px] text-muted">{text}</span>
      <span aria-hidden className="h-4 w-px shrink-0 bg-line" />
      <span className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-ink">
        {link}
        <span className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
          ↗
        </span>
      </span>
    </Link>
  );
}
