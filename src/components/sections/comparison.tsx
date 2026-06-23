import { Container, SectionHeader } from "@/components/sections/primitives";
import { comparison } from "@/lib/content";

export function Comparison() {
  return (
    <section className="border-y border-rule bg-lift py-16 sm:py-24">
      <Container>
        <SectionHeader
          centered
          eyebrow="The difference"
          title={
            <>
              Same deliverables.
              <br />
              <span>Completely different economics.</span>
            </>
          }
        />

        <div className="grid items-start gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* them */}
          <div>
            <div className="rounded-t-[16px] border border-b-0 border-rule bg-lift px-5 py-4">
              <div className="font-display text-sm font-bold text-dim">
                {comparison.them.title}
              </div>
            </div>
            <div className="overflow-hidden rounded-b-[16px] border border-t-0 border-rule">
              {comparison.them.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-b border-rule px-5 py-3 text-[13px] last:border-b-0"
                >
                  <span className="mt-px shrink-0 text-sm text-dim">✗</span>
                  <span className="leading-[1.4] text-dim">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* separator */}
          <div className="flex items-center justify-center pt-0 font-display text-[11px] font-bold tracking-[0.1em] text-mute md:pt-[60px]">
            VS
          </div>

          {/* you */}
          <div>
            <div className="rounded-t-[16px] border border-b-0 border-brand-mid bg-brand-dark px-5 py-4">
              <div className="font-display text-sm font-bold text-brand">
                {comparison.you.title}
              </div>
            </div>
            <div className="overflow-hidden rounded-b-[16px] border border-t-0 border-brand-mid">
              {comparison.you.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-b border-brand-mid px-5 py-3 text-[13px] last:border-b-0"
                >
                  <span className="mt-px shrink-0 text-sm text-brand">→</span>
                  <span className="leading-[1.4] text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
