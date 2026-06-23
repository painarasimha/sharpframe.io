import { Container, SectionHeader } from "@/components/sections/primitives";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { tiers, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-rule bg-lift py-16 sm:py-24"
    >
      <Container>
        <SectionHeader
          centered
          eyebrow="Pricing"
          title={
            <>
              Simple tiers.
              <br />
              <span>No hidden costs.</span>
            </>
          }
          desc="Everything is included. No per-video fees, no platform surcharges. One monthly retainer — we handle everything else."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 100}
              className={cn(
                "flex flex-col rounded-[24px] border p-8 transition-[border-color,transform] hover:-translate-y-0.5",
                tier.featured
                  ? "border-brand-mid bg-[linear-gradient(135deg,#1A2500_0%,var(--lift)_60%)] hover:border-brand"
                  : "border-rule bg-lift hover:border-ghost"
              )}
            >
              <span
                className={cn(
                  "mb-5 inline-block self-start rounded px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em]",
                  tier.featured
                    ? "bg-brand-mid text-brand"
                    : "bg-raised text-mute"
                )}
              >
                {tier.badge}
              </span>

              <div className="mb-1.5 font-display text-[22px] font-bold text-text">
                {tier.name}
              </div>
              <p className="mb-6 text-[13px] leading-[1.5] text-dim">
                {tier.tagline}
              </p>

              <div
                className={cn(
                  "mb-1 font-display text-[38px] font-extrabold leading-none tracking-[-0.02em]",
                  tier.featured ? "text-brand" : "text-text"
                )}
              >
                {tier.price}
              </div>
              <div className="mb-7 text-[13px] text-dim">{tier.period}</div>

              <div
                className={cn(
                  "mb-6 h-px",
                  tier.featured ? "bg-brand-mid" : "bg-rule"
                )}
              />

              <ul className="mb-7 flex-1 list-none space-y-0">
                {tier.features.map((f) => (
                  <li
                    key={f.text}
                    className={cn(
                      "flex items-start gap-2.5 py-[5px] text-[13px] leading-[1.5]",
                      f.key ? "text-text" : "text-dim"
                    )}
                  >
                    <span className="shrink-0 text-brand">→</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.featured ? "primary" : "outline"}
                className="w-full"
              >
                <a href={site.calendly} target="_blank" rel="noreferrer">
                  Book a free audit call
                </a>
              </Button>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[11px] text-mute">
          All tiers include a free 20-minute content audit call before you
          commit. No sales pitch — just an honest look at your current content.
        </p>
      </Container>
    </section>
  );
}
