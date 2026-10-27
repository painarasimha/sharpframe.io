import type { Metadata } from "next";

import { Frame, Section } from "@/components/primitives";
import { legalUpdated, privacy } from "@content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Sharpframe collects through this website, why, and how to have it removed.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <Frame>
        <article className="max-w-[720px]">
          <h1 className="text-[clamp(30px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
            {privacy.heading}
          </h1>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            Last updated: {legalUpdated}
          </p>
          <p className="mt-7 text-[17px] leading-[1.8] text-muted">
            {privacy.intro}
          </p>

          <div className="mt-12 space-y-10">
            {privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[18px] font-semibold text-ink">
                  {section.title}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.8] text-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-14 border border-dashed border-line bg-surface p-5 text-[13px] leading-[1.6] text-muted">
            {privacy.reviewNote}
          </p>
        </article>
      </Frame>
    </Section>
  );
}
