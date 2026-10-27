import type { Metadata } from "next";

import {
  Eyebrow,
  Frame,
  Heading,
  Marker,
  Section,
} from "@/components/primitives";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { BorderedCardGrid } from "@/components/signature/bordered-card-grid";
import { about, seo } from "@content/site";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ── 1 · Hero ─────────────────────────────────────────── */}
      <Section dots className="pt-6">
        <Frame>
          <div className="max-w-[820px]">
            <Eyebrow>{about.hero.eyebrow}</Eyebrow>
            <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
              {about.hero.headline.before}
              <Marker>{about.hero.headline.marked}</Marker>
            </h1>
            <p className="mt-7 max-w-[580px] text-[17px] leading-[1.7] text-muted">
              {about.hero.sub}
            </p>
          </div>
        </Frame>
      </Section>

      {/* ── 2 · Our story ────────────────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <Heading className="mb-0" title={about.story.heading} />
            <div className="max-w-[660px] space-y-6">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-[1.8] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Frame>
      </Section>

      {/* ── 3 · Founder ──────────────────────────────────────── */}
      <Section rails>
        <div className="grid items-start gap-10 sm:grid-cols-[220px_1fr] sm:gap-14">
          {/* [Replace with the founder headshot at public/founder.jpg] */}
          <div className="aspect-square w-[220px] max-w-full border border-line bg-surface">
            <div className="flex h-full items-center justify-center p-4 text-center font-mono text-[11px] leading-[1.5] text-muted">
              [founder photo
              <br />
              public/founder.jpg]
            </div>
          </div>
          <div>
            <h2 className="text-[clamp(24px,3vw,34px)] font-semibold tracking-[-0.02em] text-ink">
              {about.founder.name}
            </h2>
            <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              {about.founder.title}
            </p>
            <p className="mt-6 max-w-[640px] text-[16px] leading-[1.8] text-muted">
              {about.founder.bio}
            </p>
            <a
              href={about.founder.link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink"
            >
              {about.founder.link.label}
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── 4 · Principles ───────────────────────────────────── */}
      <Section divided>
        <Frame>
          <Heading title={about.principles.heading} />
          <BorderedCardGrid
            cards={about.principles.items.map((item) => ({ ...item, link: null }))}
            columns={4}
          />
        </Frame>
      </Section>

      {/* ── 5 + 6 · Team and where we work ───────────────────── */}
      <Section rails>
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-14">
          {[about.team, about.where].map((block) => (
            <div key={block.heading}>
              <h2 className="text-[20px] font-semibold tracking-[-0.01em] text-ink">
                {block.heading}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-muted">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7 · Final CTA ────────────────────────────────────── */}
      <GlowCtaBanner
        heading={about.finalCta.heading}
        location="about_final_cta"
      />
    </>
  );
}
