import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface Faq {
  q: string;
  a: string;
}

export function FaqList({
  faqs,
  idPrefix = "faq",
}: {
  faqs: readonly Faq[];
  idPrefix?: string;
}) {
  return (
    <Accordion type="single" collapsible className="border-t border-line">
      {faqs.map((faq, i) => (
        <AccordionItem key={faq.q} value={`${idPrefix}-${i}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

/** FAQPage structured data — used on Home and Blueprint. */
export function FaqJsonLd({ faqs }: { faqs: readonly Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
