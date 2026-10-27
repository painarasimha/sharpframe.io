import type { Metadata } from "next";
import Link from "next/link";

import { Frame, Section } from "@/components/primitives";
import { TrackBooking } from "@/components/track-booking";
import { thankYou } from "@content/site";

export const metadata: Metadata = {
  title: "You're booked",
  description: "Your 20-minute ops call is confirmed.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <TrackBooking />
      <Section>
        <Frame>
          <div className="max-w-[660px]">
            <h1 className="text-[clamp(34px,4.8vw,54px)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              {thankYou.headline}
            </h1>
            <p className="mt-6 text-[17px] leading-[1.75] text-muted">
              {thankYou.body}
            </p>

            <section className="mt-12 border-t border-line pt-8">
              <h2 className="text-[15px] font-semibold text-ink">
                {thankYou.prepHeading}
              </h2>
              <ul className="mt-5 list-none space-y-3">
                {thankYou.prep.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] leading-[1.7] text-muted"
                  >
                    <span aria-hidden className="mt-[11px] size-1.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <nav
              aria-label="While you wait"
              className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:gap-8"
            >
              {thankYou.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/link inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
                  >
                    →
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </Frame>
      </Section>
    </>
  );
}
