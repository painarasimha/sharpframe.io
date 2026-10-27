import type { Metadata } from "next";
import Link from "next/link";

import { ServiceFlow } from "@/components/diagrams/service-flow";
import { Eyebrow, Frame, Heading, Section } from "@/components/primitives";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { ServicesNav } from "@/components/services-nav";
import { seo, services } from "@content/site";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section dots className="pt-6">
        <Frame>
          <div className="max-w-[820px]">
            <Eyebrow>{services.hero.eyebrow}</Eyebrow>
            <h1 className="balance text-[clamp(38px,5.6vw,66px)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              {services.hero.headline}
            </h1>
            <p className="mt-7 max-w-[600px] text-[17px] leading-[1.7] text-muted">
              {services.hero.sub}
            </p>
          </div>
          <div className="mt-12">
            <ServiceFlow steps={services.hero.flow} />
          </div>
        </Frame>
      </Section>

      {/* ── Service blocks, with sticky side nav on desktop ──── */}
      <Section divided>
        <Frame>
          <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
            <ServicesNav
              items={services.blocks.map((block) => ({
                id: block.id,
                num: block.num,
                name: block.name,
              }))}
            />

            <div>
              {services.blocks.map((block) => (
                <article
                  key={block.id}
                  id={block.id}
                  className="scroll-mt-28 border-t border-line py-14 first:border-t-0 first:pt-0"
                >
                  <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                    {block.num} — {block.name}
                  </p>
                  <h2 className="balance mt-4 max-w-[620px] text-[clamp(24px,3vw,36px)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                    {block.tagline}
                  </h2>
                  <p className="mt-5 max-w-[640px] text-[16px] leading-[1.75] text-muted">
                    {block.what}
                  </p>

                  <h3 className="mt-9 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                    {block.listTitle}
                  </h3>
                  <ul className="mt-4 grid list-none gap-x-10 gap-y-2.5 sm:grid-cols-2">
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink"
                      >
                        <span aria-hidden className="mt-[9px] size-1.5 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-9 grid gap-px border border-line bg-line sm:grid-cols-2">
                    <div className="bg-surface p-5">
                      <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                        Best for
                      </dt>
                      <dd className="mt-2 text-[14.5px] leading-[1.6] text-ink">
                        {block.bestFor}
                      </dd>
                    </div>
                    <div className="bg-surface p-5">
                      <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                        {block.timelineLabel}
                      </dt>
                      <dd className="mt-2 text-[14.5px] leading-[1.6] text-ink">
                        {block.timeline}
                      </dd>
                    </div>
                  </dl>

                  {block.link ? (
                    <Link
                      href={block.link.href}
                      className="group/link mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink"
                    >
                      {block.link.label}
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover/link:translate-x-[3px]"
                      >
                        →
                      </span>
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </Frame>
      </Section>

      {/* ── Team training add-on ─────────────────────────────── */}
      <Section rails>
        <div className="max-w-[680px]">
          <h2 className="text-[clamp(22px,2.8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
            {services.training.heading}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-muted">
            {services.training.body}
          </p>
        </div>
      </Section>

      {/* ── Engagement models ────────────────────────────────── */}
      <Section divided>
        <Frame>
          <Heading title={services.models.heading} />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse border border-line text-left">
              <thead>
                <tr>
                  <th scope="col" className="w-[140px] border-b border-line bg-surface px-5 py-4" />
                  {services.models.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-l border-line bg-surface px-5 py-4 text-[15px] font-semibold text-ink"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.models.rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-b border-line bg-surface px-5 py-5 font-mono text-[12px] uppercase tracking-[0.12em] font-normal text-muted"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className="border-b border-l border-line bg-surface px-5 py-5 text-[14.5px] leading-[1.6] text-ink"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-[13px] text-muted">{services.models.note}</p>
        </Frame>
      </Section>

      <GlowCtaBanner
        heading={services.finalCta.heading}
        location="services_final_cta"
      />
    </>
  );
}
