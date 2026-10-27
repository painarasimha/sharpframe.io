import Link from "next/link";
import { ChecklistSignup } from "@/components/checklist-signup";
import { Frame } from "@/components/primitives";
import { FrameMark } from "@/components/logo";
import { footer, site } from "@content/site";

/** lucide-react no longer ships brand marks, so the glyph lives here. */
function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.74 2.5 4.74 5.75V21h-4v-5.65c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.19 1.46-2.19 2.98V21h-4V9Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="section-dark">
      <Frame>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-ink">
              <span className="text-[19px] font-bold lowercase tracking-[-0.03em]">
                {site.wordmark}
              </span>
              <FrameMark />
            </Link>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.65] text-muted">
              {footer.line}
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex size-9 items-center justify-center border border-line text-muted transition-colors hover:border-ink hover:text-ink"
            >
              <LinkedInMark />
            </a>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                {column.title}
              </p>
              <ul className="flex list-none flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              Contact
            </p>
            <ul className="flex list-none flex-col gap-2.5 text-[14px] text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li>{site.reach}</li>
            </ul>
            {site.showChecklistSignup ? <ChecklistSignup /> : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-7 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <nav aria-label="Legal">
            <ul className="flex list-none gap-5">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Frame>
    </footer>
  );
}
