import type { Metadata } from "next";

import { BookingEmbed } from "@/components/booking-embed";
import { Eyebrow, Frame, Section } from "@/components/primitives";
import { book, seo, site } from "@content/site";

export const metadata: Metadata = {
  title: seo.book.title,
  description: seo.book.description,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <Section className="pt-4">
      <Frame>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
          {/* ── Left: what to expect ─────────────────────────── */}
          <div>
            <Eyebrow>{book.eyebrow}</Eyebrow>
            <h1 className="text-[clamp(32px,4.4vw,48px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
              {book.headline}
            </h1>
            <p className="mt-6 text-[17px] leading-[1.7] text-muted">
              {book.intro}
            </p>

            <section className="mt-10">
              <h2 className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                {book.cover.heading}
              </h2>
              <ol className="mt-5 list-none space-y-4">
                {book.cover.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-line font-mono text-[11px] text-ink">
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-[1.7] text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-10 border-t border-line pt-8">
              <h2 className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                {book.goodToKnow.heading}
              </h2>
              <ul className="mt-5 list-none space-y-3">
                {book.goodToKnow.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.7] text-muted"
                  >
                    <span aria-hidden className="mt-[10px] size-1.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-10 border-t border-line pt-8 text-[15px] text-muted">
              {book.emailFallback}{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-accent-ink underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>

          {/* ── Right: the calendar ──────────────────────────── */}
          <div>
            <h2 className="sr-only">Choose a time</h2>
            <BookingEmbed />
          </div>
        </div>
      </Frame>
    </Section>
  );
}
