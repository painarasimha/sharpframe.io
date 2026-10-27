import type { Metadata } from "next";

import { Frame, Heading, Section } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { rentalCase, seo } from "@content/site";

export const metadata: Metadata = {
  title: seo.rentalCase.title,
  description: seo.rentalCase.description,
  alternates: { canonical: "/case-studies/rental-operations" },
};

export default function RentalCasePage() {
  return (
    <>
      {/* ── 1 · Result hero ──────────────────────────────────── */}
      <Section tone="dark" className="pt-4">
        <Frame>
          <div className="max-w-[820px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              {rentalCase.label}
            </p>
            <h1 className="balance mt-7 text-[clamp(34px,5.2vw,62px)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              {rentalCase.headline}
            </h1>
            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.7] text-muted">
              {rentalCase.sub}
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {rentalCase.facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[15px] font-medium text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Frame>
      </Section>

      {/* ── 2 · Result stats ─────────────────────────────────── */}
      <Section className="py-16 sm:py-20">
        <Frame>
          <dl className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {rentalCase.stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-6 py-8">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="tabular text-[clamp(28px,3.4vw,40px)] font-semibold leading-none tracking-[-0.02em] text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.55] text-muted">
                    {stat.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Frame>
      </Section>

      {/* ── 3 · Before ───────────────────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
            <Heading className="mb-0" title={rentalCase.before.heading} />
            <p className="max-w-[640px] text-[17px] leading-[1.8] text-muted">
              {rentalCase.before.body}
            </p>
          </div>
        </Frame>
      </Section>

      {/* ── 4 · What we did ──────────────────────────────────── */}
      <Section rails>
        <Heading title={rentalCase.did.heading} />
        <ol className="list-none border-t border-line">
          {rentalCase.did.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-5 border-b border-line py-6"
            >
              <span className="font-mono text-[12px] text-accent-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[16px] leading-[1.7] text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── 5 · What we built ────────────────────────────────── */}
      <Section divided>
        <Frame>
          <Heading title={rentalCase.built.heading} />
          <ul className="grid list-none gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {rentalCase.built.features.map((feature, i) => (
              <Reveal
                as="li"
                key={feature.title}
                delay={i * 60}
                className="bg-surface p-6 sm:p-7"
              >
                <span aria-hidden className="mb-5 block size-1.5 bg-accent" />
                <h3 className="text-[16px] font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-muted">
                  {feature.body}
                </p>
              </Reveal>
            ))}
          </ul>

          {/* [Replace with 3 anonymized screenshots] */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex aspect-[4/3] items-center justify-center border border-dashed border-line bg-surface p-5 text-center font-mono text-[11px] leading-[1.6] text-muted"
              >
                {rentalCase.built.screenshotNote}
              </div>
            ))}
          </div>
        </Frame>
      </Section>

      {/* ── 6 · After ────────────────────────────────────────── */}
      <Section rails>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Heading className="mb-0" title={rentalCase.after.heading} />
          <div>
            <p className="max-w-[640px] text-[17px] leading-[1.8] text-muted">
              {rentalCase.after.body}
            </p>
            {rentalCase.after.testimonial ? (
              <blockquote className="mt-10 border-l-2 border-accent pl-6">
                <p className="text-[18px] leading-[1.7] text-ink">
                  “{rentalCase.after.testimonial.quote}”
                </p>
                <footer className="mt-3 text-[14px] text-muted">
                  {rentalCase.after.testimonial.name},{" "}
                  {rentalCase.after.testimonial.role}
                </footer>
              </blockquote>
            ) : null}
          </div>
        </div>
      </Section>

      {/* ── 7 · What's next ──────────────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="max-w-[680px]">
            <Heading
              className="mb-0"
              title={rentalCase.next.heading}
              intro={rentalCase.next.body}
            />
          </div>
        </Frame>
      </Section>

      {/* ── 8 · CTA banner ───────────────────────────────────── */}
      <GlowCtaBanner
        heading={rentalCase.finalCta.heading}
        body={rentalCase.finalCta.body}
        location="rental_case_final_cta"
      />
    </>
  );
}
