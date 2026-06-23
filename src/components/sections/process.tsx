import { Container, SectionHeader } from "@/components/sections/primitives";
import { processRows } from "@/lib/content";

export function Process() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="What you actually get"
          title={
            <>
              You approve.
              <br />
              <span>We do everything else.</span>
            </>
          }
        />

        <div className="flex flex-col">
          {processRows.map((row) => (
            <div
              key={row.step}
              className="grid grid-cols-1 gap-3 border-b border-rule py-9 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div>
                <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-mute">
                  {row.step}
                </div>
                <div className="font-display text-xl font-bold leading-[1.2] text-text">
                  {row.name}
                </div>
              </div>
              <div>
                <p className="mb-4 text-sm leading-[1.7] text-dim">{row.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {row.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded border border-rule px-2.5 py-1 font-mono text-[11px] text-mute"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
