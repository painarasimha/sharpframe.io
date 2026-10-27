import type { Metadata } from "next";

import { Frame, Heading, Section } from "@/components/primitives";
import { GlowCtaBanner } from "@/components/signature/glow-cta-banner";
import { ResultCaseCards } from "@/components/signature/result-case-cards";
import { caseStudiesIndex, seo } from "@content/site";

export const metadata: Metadata = {
  title: seo.caseStudies.title,
  description: seo.caseStudies.description,
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-6">
        <Frame>
          <Heading
            as="h1"
            eyebrow={caseStudiesIndex.eyebrow}
            title={caseStudiesIndex.heading}
          />
          <ResultCaseCards
            cards={caseStudiesIndex.cards}
            ctaCard={caseStudiesIndex.ctaCard}
          />
        </Frame>
      </Section>

      <GlowCtaBanner
        heading="Your operation could be the next one here."
        body="Book a 20-minute call and we'll show you where to start."
        location="case_index_final_cta"
      />
    </>
  );
}
