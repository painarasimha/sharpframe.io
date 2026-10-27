import type { Metadata } from "next";

import { Frame, Section } from "@/components/primitives";
import { legalUpdated, terms } from "@content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Sharpframe website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <Frame>
        <article className="max-w-[720px]">
          <h1 className="text-[clamp(30px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
            {terms.heading}
          </h1>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            Last updated: {legalUpdated}
          </p>

          <div className="mt-12 space-y-10">
            {terms.sections.map((section) => (
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
        </article>
      </Frame>
    </Section>
  );
}
