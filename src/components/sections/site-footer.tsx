import Link from "next/link";

import { Container } from "@/components/sections/primitives";
import { footer, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule pb-8 pt-14">
      <Container>
        <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="mb-3 block font-display text-lg font-extrabold tracking-[-0.02em] text-text"
            >
              {site.logo.lead}
              <span className="text-brand">{site.logo.accent}</span>
            </Link>
            <p className="max-w-[220px] text-[13px] leading-[1.6] text-dim">
              {footer.brand}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-mute">
                {col.title}
              </div>
              <ul className="flex list-none flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <Link
                        href={link.href}
                        className="text-[13px] text-dim transition-colors hover:text-text"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noreferrer" : undefined}
                        className="text-[13px] text-dim transition-colors hover:text-text"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-rule pt-7">
          <span className="font-mono text-[11px] text-mute">
            © 2026 SharpFrame Studio. All rights reserved.
          </span>
          <span className="font-mono text-[11px] text-mute">{site.domain}</span>
        </div>
      </Container>
    </footer>
  );
}
