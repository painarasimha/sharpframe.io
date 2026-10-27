import type { Metadata } from "next";
import { Check } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { LeakReportMock } from "@/components/diagrams/leak-report";
import { FaqJsonLd, FaqList } from "@/components/faq-list";
import {
  Eyebrow,
  Frame,
  Heading,
  Marker,
  Section,
} from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { BorderedCardGrid } from "@/components/signature/bordered-card-grid";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { blueprint, seo } from "@content/site";

export const metadata: Metadata = {
  title: seo.blueprint.title,
  description: seo.blueprint.description,
  alternates: { canonical: "/blueprint" },
};

export default function BlueprintPage() {
  return (
    <>
      <FaqJsonLd faqs={blueprint.faqs} />

      {/* ── 1 · Hero ─────────────────────────────────────────── */}
      <Section dots className="pt-6">
        <Frame>
          <div className="max-w-[820px]">
            <Eyebrow>{blueprint.hero.eyebrow}</Eyebrow>
            <h1 className="balance text-[clamp(38px,5.6vw,66px)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              {blueprint.hero.headline.before}
              <Marker>{blueprint.hero.headline.marked}</Marker>
            </h1>
            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.7] text-muted">
              {blueprint.hero.sub}
            </p>
            <div className="mt-9">
              <CtaButton location="blueprint_hero" />
            </div>
          </div>

          <ul className="mt-12 flex list-none flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-7">
            {blueprint.hero.stats.map((stat, i) => (
              <li key={stat} className="flex items-center gap-8">
                <span className="text-[15px] font-semibold text-ink">{stat}</span>
                {i < blueprint.hero.stats.length - 1 ? (
                  <span aria-hidden className="h-4 w-px bg-line" />
                ) : null}
              </li>
            ))}
          </ul>
        </Frame>
      </Section>

      {/* ── 2 · Is this for you? ─────────────────────────────── */}
      <Section rails>
        <Heading title={blueprint.forYou.heading} />
        <ul className="grid list-none gap-x-12 gap-y-5 lg:grid-cols-2">
          {blueprint.forYou.items.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 60}
              className="flex items-start gap-3"
            >
              <Check
                className="mt-1 size-4 shrink-0 text-accent-ink"
                strokeWidth={2.5}
                aria-hidden
              />
              <span className="text-[16px] leading-[1.7] text-ink">{item}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── 3 · The 3 weeks ──────────────────────────────────── */}
      <Section divided>
        <Frame>
          <Heading title={blueprint.timeline.heading} />
          <ol className="grid list-none gap-px border border-line bg-line md:grid-cols-3">
            {blueprint.timeline.weeks.map((week, i) => (
              <Reveal
                as="li"
                key={week.week}
                delay={i * 80}
                className="bg-surface p-6 sm:p-8"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent-ink">
                  {week.week}
                </p>
                <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.01em] text-ink">
                  {week.focus}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted">
                  {week.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Frame>
      </Section>

      {/* ── 4 · What you get ─────────────────────────────────── */}
      <Section rails>
        <Heading title={blueprint.deliverables.heading} />
        <BorderedCardGrid
          cards={blueprint.deliverables.items.map((item) => ({ ...item, link: null }))}
          columns={4}
        />
      </Section>

      {/* ── 5 · Sample leak report ───────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Heading
              className="mb-0"
              title={blueprint.sampleReport.heading}
              intro="Every leak is sized using your own data, and every calculation is shown. Nothing here is a benchmark borrowed from someone else's business."
            />
            <LeakReportMock />
          </div>
        </Frame>
      </Section>

      {/* ── 6 · The guarantee ────────────────────────────────── */}
      <Section tone="dark">
        <Frame>
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
            <p className="tabular text-[clamp(88px,14vw,180px)] font-semibold leading-[0.82] tracking-[-0.04em] text-accent">
              {blueprint.guarantee.number}
            </p>
            <div className="max-w-[580px]">
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
                {blueprint.guarantee.heading}
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-muted">
                {blueprint.guarantee.body}
              </p>
              <p className="mt-7 border-t border-line pt-5 text-[13px] leading-[1.6] text-muted">
                {blueprint.guarantee.smallPrint}
              </p>
            </div>
          </div>
        </Frame>
      </Section>

      {/* ── 7 · Build credit ─────────────────────────────────── */}
      <Section>
        <Frame>
          <div className="max-w-[680px]">
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              {blueprint.buildCredit.heading}
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-muted">
              {blueprint.buildCredit.body}
            </p>
          </div>
        </Frame>
      </Section>

      {/* ── 8 · FAQ ──────────────────────────────────────────── */}
      <Section rails>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Heading className="mb-0" eyebrow="FAQ" title="Common questions" />
          <FaqList faqs={blueprint.faqs} idPrefix="bp-faq" />
        </div>
      </Section>

      {/* ── 9 · Final CTA ────────────────────────────────────── */}
      <GlowCtaBanner
        heading={blueprint.finalCta.heading}
        body={blueprint.finalCta.body}
        location="blueprint_final_cta"
      />
    </>
  );
}
