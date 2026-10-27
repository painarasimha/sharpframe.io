import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";

import { Eyebrow, Frame, Section } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { IndustryFilter } from "@/components/industry-filter";
import { industries, industriesPage, seo } from "@content/site";

export const metadata: Metadata = {
  title: seo.industries.title,
  description: seo.industries.description,
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section dots className="pt-6">
        <Frame>
          <div className="max-w-[820px]">
            <Eyebrow>{industriesPage.hero.eyebrow}</Eyebrow>
            <h1 className="balance text-[clamp(38px,5.6vw,66px)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              {industriesPage.hero.headline}
            </h1>
            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.7] text-muted">
              {industriesPage.hero.sub}
            </p>
          </div>

          <IndustryFilter />
        </Frame>
      </Section>

      {/* ── Industry cards ───────────────────────────────────── */}
      <Section divided>
        <Frame>
          <div className="grid gap-px border border-line bg-line lg:grid-cols-2">
            {industries.map((industry, i) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[
                  industry.icon
                ] ?? Icons.Circle;

              return (
                <Reveal
                  key={industry.slug}
                  delay={(i % 2) * 70}
                  id={industry.slug}
                  className="scroll-mt-28 bg-surface p-7 sm:p-8"
                >
                  <div className="mb-7 flex items-center gap-2.5">
                    <Icon
                      className="size-5 text-ink"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span aria-hidden className="size-1.5 bg-accent" />
                    <h2 className="ml-1 text-[19px] font-semibold tracking-[-0.01em] text-ink">
                      {industry.name}
                    </h2>
                  </div>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                        {industriesPage.leaksLabel}
                      </h3>
                      <ul className="mt-3.5 list-none space-y-2.5">
                        {industry.leaks.map((leak) => (
                          <li
                            key={leak}
                            className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-muted"
                          >
                            <span
                              aria-hidden
                              className="mt-[9px] h-px w-2.5 shrink-0 bg-muted"
                            />
                            {leak}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                        {industriesPage.buildsLabel}
                      </h3>
                      <ul className="mt-3.5 list-none space-y-2.5">
                        {industry.builds.map((build) => (
                          <li
                            key={build}
                            className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-ink"
                          >
                            <span
                              aria-hidden
                              className="mt-[8px] size-1.5 shrink-0 bg-accent"
                            />
                            {build}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/book"
                    className="group/link mt-8 inline-flex items-center gap-1.5 border-t border-line pt-6 text-[14px] font-medium text-accent-ink"
                  >
                    Book a call about {industry.name.toLowerCase()}
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-6 text-[13px] leading-[1.6] text-muted">
            {industriesPage.disclaimer}
          </p>
        </Frame>
      </Section>

      <GlowCtaBanner
        heading={industriesPage.notListed.heading}
        body={industriesPage.notListed.body}
        location="industries_final_cta"
      />
    </>
  );
}
