import { Container } from "@/components/sections/primitives";
import { Reveal } from "@/components/reveal";
import { proofStats } from "@/lib/content";

export function ProofStats() {
  return (
    <section className="border-b border-rule bg-lift py-16">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[16px] bg-rule md:grid-cols-4">
          {proofStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="bg-lift px-7 py-8"
            >
              <div className="mb-1.5 font-display text-[44px] font-extrabold leading-none tracking-[-0.03em] text-text">
                {stat.num}
                <span className="text-brand">{stat.accent}</span>
                {stat.suffix}
              </div>
              <div className="text-[13px] leading-[1.4] text-dim">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
