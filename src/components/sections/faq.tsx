import { Container, SectionHeader } from "@/components/sections/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-rule bg-lift py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions we
              <br />
              <span>get every time.</span>
            </>
          }
        />

        <Accordion type="single" collapsible className="max-w-[720px]">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
