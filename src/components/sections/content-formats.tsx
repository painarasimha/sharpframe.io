import { Container, Eyebrow, SectionHeader } from "@/components/sections/primitives";
import { Reveal } from "@/components/reveal";
import { formats, platforms } from "@/lib/content";

export function ContentFormats() {
  return (
    <section id="formats" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Content types"
          title={
            <>
              5 formats. Every month.
              <br />
              <span>All 5 built into your plan.</span>
            </>
          }
          desc="We don't pick one format and repeat it. Every campaign runs all 5 UGC formats — because different hooks win on different platforms and for different audiences."
        />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 md:grid-cols-5">
          {formats.map((format, i) => (
            <Reveal
              key={format.name}
              delay={i * 80}
              className="rounded-[16px] border border-rule bg-lift px-4 py-5 transition-colors hover:border-brand-mid"
            >
              <div className="mb-3 text-2xl">{format.icon}</div>
              <div className="mb-1.5 font-display text-sm font-semibold text-text">
                {format.name}
              </div>
              <p className="mb-2.5 text-xs leading-[1.5] text-dim">
                {format.desc}
              </p>
              <div className="font-mono text-[11px] text-brand">
                {format.cpa}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Eyebrow className="mb-3">Platforms we publish to</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-3">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 rounded-lg border border-rule bg-raised px-[18px] py-2.5 text-[13px] text-dim"
              >
                {p.icon} <span className="font-medium text-text">{p.name}</span>{" "}
                {p.detail}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
