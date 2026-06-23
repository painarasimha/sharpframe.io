import { Container, SectionHeader } from "@/components/sections/primitives";
import { Reveal } from "@/components/reveal";
import { pipeline, stageCards } from "@/lib/content";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeader
          centered
          eyebrow="The pipeline"
          title={
            <>
              6 stages. One system.
              <br />
              <span>Every campaign smarter than the last.</span>
            </>
          }
          desc="Most agencies start fresh every brief cycle. Our pipeline feeds performance data from each campaign directly into the next one — automatically."
        />

        {/* pipeline track */}
        <div className="relative">
          <div className="relative grid grid-cols-3 gap-0 md:grid-cols-6">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, var(--rule), var(--brand), var(--rule))",
              }}
            />
            {pipeline.map((step, i) => (
              <Reveal
                key={step.node}
                delay={i * 80}
                className="group relative z-1 px-2"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-rule bg-lift font-mono text-[13px] font-medium text-dim transition-all duration-300 group-hover:border-brand group-hover:bg-brand-dark group-hover:text-brand">
                  {step.node}
                </div>
                <div className="mb-1.5 text-center font-display text-[13px] font-semibold text-text">
                  {step.name}
                </div>
                <div className="text-center text-[11px] leading-[1.5] text-dim">
                  {step.desc}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* stage detail cards */}
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {stageCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 100}
              className={cn(
                "rounded-[16px] border bg-lift p-6 transition-colors",
                card.featured
                  ? "border-brand-mid"
                  : "border-rule hover:border-ghost"
              )}
            >
              {card.featured ? (
                <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-brand">
                  Performance loop
                </div>
              ) : null}
              <div className="mb-2.5 font-mono text-[11px] text-mute">
                {card.num}
              </div>
              <div className="mb-2 font-display text-base font-bold text-text">
                {card.title}
              </div>
              <p className="mb-3.5 text-[13px] leading-[1.6] text-dim">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-[5px]">
                {card.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-rule px-2 py-[3px] font-mono text-[10px] text-mute"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
