import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { LayerStack } from "@/components/diagrams/layer-stack";
import { FaqJsonLd, FaqList } from "@/components/faq-list";
import {
  Eyebrow,
  Frame,
  Heading,
  Marker,
  Section,
} from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { AnnouncementPill } from "@/components/signature/announcement-pill";
import { BorderedCardGrid } from "@/components/signature/bordered-card-grid";
import {
  FloatingStatCards,
  StatCardGrid,
} from "@/components/signature/floating-stat-cards";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { IndustryMarquee } from "@/components/signature/industry-marquee";
import { QuestionChips } from "@/components/signature/question-chips";
import { ResultCaseCards } from "@/components/signature/result-case-cards";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { caseStudiesIndex, home, site } from "@content/site";

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    description: site.promise,
    founder: { "@type": "Person", name: site.founder, sameAs: site.linkedin },
    sameAs: [site.linkedin],
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd faqs={home.faqs} />

      {/* ── 1 · Hero ─────────────────────────────────────────── */}
      <Section dots className="pt-6">
        <Frame>
          <div className="relative">
            <FloatingStatCards cards={home.hero.stats} />

            <div className="relative mx-auto max-w-[660px] text-center">
              <AnnouncementPill
                text={home.hero.pill.text}
                link={home.hero.pill.link}
                href={home.hero.pill.href}
              />

              <h1 className="balance mt-8 text-[clamp(40px,5.6vw,68px)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
                {home.hero.headline.before}
                <Marker>{home.hero.headline.marked}</Marker>
              </h1>

              <p className="mx-auto mt-7 max-w-[580px] text-[17px] leading-[1.7] text-muted">
                {home.hero.sub}
              </p>

              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <CtaButton location="home_hero" />
                <Button asChild variant="secondary" size="lg">
                  <Link href={home.hero.secondary.href}>
                    {home.hero.secondary.label}
                  </Link>
                </Button>
              </div>

              <p className="mt-5 text-[13px] text-muted">{home.hero.micro}</p>
            </div>
          </div>

          <StatCardGrid cards={home.hero.stats} />
        </Frame>
      </Section>

      {/* ── 2 · Built-for strip ──────────────────────────────── */}
      <section className="border-y border-line py-12">
        <Frame>
          <p className="mb-8 text-center text-[14px] text-muted">
            {home.builtFor.line}
          </p>
        </Frame>
        <IndustryMarquee />
      </section>

      {/* ── 3 · Services ─────────────────────────────────────── */}
      <Section rails>
        <Heading
          eyebrow={home.services.eyebrow}
          title={home.services.heading}
        />
        <BorderedCardGrid cards={home.services.cards} columns={4} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-muted">{home.services.footLine}</p>
          <Link
            href={home.services.footLink.href}
            className="group/link inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink"
          >
            {home.services.footLink.label}
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
            >
              →
            </span>
          </Link>
        </div>
      </Section>

      {/* ── 4 · The problem ──────────────────────────────────── */}
      <Section dots divided>
        <Frame>
          <Heading
            centered
            eyebrow={home.problem.eyebrow}
            title={home.problem.heading}
            intro={home.problem.sub}
          />
        </Frame>

        <QuestionChips questions={home.problem.questions} />

        <Frame>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-[15px] text-muted">{home.problem.footLine}</p>
            <Link
              href={home.problem.footLink.href}
              className="group/link inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink"
            >
              {home.problem.footLink.label}
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
              >
                →
              </span>
            </Link>
          </div>
        </Frame>
      </Section>

      {/* ── 5 · Why systems first ────────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Heading
              className="mb-0"
              eyebrow={home.approach.eyebrow}
              title={home.approach.heading}
              intro={home.approach.body}
            />
            <LayerStack layers={home.approach.layers} className="lg:mt-4" />
          </div>

          {/* Comparison table */}
          <div className="mt-16 overflow-hidden border border-line">
            <div className="grid grid-cols-2 border-b border-line bg-surface">
              <p className="px-5 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted sm:px-7">
                {home.approach.comparison.themLabel}
              </p>
              <p className="border-l border-line px-5 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-ink sm:px-7">
                {home.approach.comparison.usLabel}
              </p>
            </div>
            <ul className="list-none">
              {home.approach.comparison.rows.map((row) => (
                <li
                  key={row.us}
                  className="grid grid-cols-2 border-b border-line last:border-b-0"
                >
                  <p className="px-5 py-5 text-[14.5px] leading-[1.6] text-muted sm:px-7">
                    {row.them}
                  </p>
                  <p className="flex gap-3 border-l border-line px-5 py-5 text-[14.5px] leading-[1.6] text-ink sm:px-7">
                    <span aria-hidden className="mt-[9px] size-1.5 shrink-0 bg-accent" />
                    {row.us}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Frame>
      </Section>

      {/* ── 6 · Where AI pays off ────────────────────────────── */}
      <Section rails>
        <Heading
          eyebrow={home.useCases.eyebrow}
          title={home.useCases.heading}
        />
        <Tabs tabs={home.useCases.tabs} />
        <p className="mt-6 text-[13px] leading-[1.6] text-muted">
          {home.useCases.note}
        </p>
      </Section>

      {/* ── 7 · How it works ─────────────────────────────────── */}
      <Section divided>
        <Frame>
          <Heading
            eyebrow={home.howItWorks.eyebrow}
            title={home.howItWorks.heading}
          />
          <ol className="grid list-none gap-px border border-line bg-line md:grid-cols-4">
            {home.howItWorks.steps.map((step, i) => (
              <Reveal as="li" key={step.num} delay={i * 80} className="bg-surface p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-[12px] text-accent-ink">
                    {step.num}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-line" />
                </div>
                <h3 className="text-[17px] font-semibold text-ink">
                  {step.name}
                </h3>
                {step.when ? (
                  <p className="mt-1 font-mono text-[12px] text-muted">
                    {step.when}
                  </p>
                ) : null}
                <p className="mt-3 text-[14.5px] leading-[1.65] text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Frame>
      </Section>

      {/* ── 8 · The guarantee ────────────────────────────────── */}
      <Section tone="dark">
        <Frame>
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
            <p className="tabular text-[clamp(88px,14vw,180px)] font-semibold leading-[0.82] tracking-[-0.04em] text-accent">
              {home.guarantee.number}
            </p>
            <div className="max-w-[560px]">
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
                {home.guarantee.heading}
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-muted">
                {home.guarantee.body}
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-8 border-ink text-ink">
                <Link href={home.guarantee.link.href}>
                  {home.guarantee.link.label}
                  <ButtonArrow />
                </Link>
              </Button>
            </div>
          </div>
        </Frame>
      </Section>

      {/* ── 9 · Case studies ─────────────────────────────────── */}
      <Section>
        <Frame>
          <Heading
            eyebrow={home.caseStudies.eyebrow}
            title={home.caseStudies.heading}
          />
          <ResultCaseCards
            cards={caseStudiesIndex.cards}
            ctaCard={caseStudiesIndex.ctaCard}
          />
        </Frame>
      </Section>

      {/* ── 10 · Founder note ────────────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="grid items-start gap-10 sm:grid-cols-[200px_1fr] sm:gap-14">
            {/* [Replace with the founder headshot at public/founder.jpg] */}
            <div className="aspect-square w-[200px] max-w-full border border-line bg-surface">
              <div className="flex h-full items-center justify-center p-4 text-center font-mono text-[11px] leading-[1.5] text-muted">
                [founder photo
                <br />
                public/founder.jpg]
              </div>
            </div>
            <div>
              <Eyebrow>{home.founderNote.eyebrow}</Eyebrow>
              <blockquote className="balance max-w-[640px] text-[clamp(20px,2.6vw,30px)] font-medium leading-[1.35] tracking-[-0.02em] text-ink">
                “{home.founderNote.quote}”
              </blockquote>
              <p className="mt-6 text-[15px] text-muted">
                {home.founderNote.signature}
              </p>
              <Link
                href={home.founderNote.link.href}
                className="group/link mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink"
              >
                {home.founderNote.link.label}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Frame>
      </Section>

      {/* ── 11 · FAQ ─────────────────────────────────────────── */}
      <Section rails>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Heading className="mb-0" eyebrow="FAQ" title="Questions, answered" />
          <FaqList faqs={home.faqs} idPrefix="home-faq" />
        </div>
      </Section>

      {/* ── 12 · Final CTA ───────────────────────────────────── */}
      <GlowCtaBanner
        heading={home.finalCta.heading}
        body={home.finalCta.body}
        location="home_final_cta"
      />
    </>
  );
}
