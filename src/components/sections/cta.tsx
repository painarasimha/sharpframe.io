import { Container } from "@/components/sections/primitives";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Cta() {
  return (
    <section className="relative overflow-hidden border-y border-rule bg-lift py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,240,68,.06) 0%, transparent 70%)",
        }}
      />
      <Container className="relative z-1">
        <div className="text-center">
          <h2 className="mb-4 font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-text">
            Your CPA isn&apos;t a
            <br />
            <span className="text-brand">budget problem.</span>
          </h2>
          <p className="mx-auto mb-9 max-w-[440px] text-base leading-[1.6] text-dim">
            It&apos;s a creative problem. Book a free 20-minute audit call and
            we&apos;ll show you exactly what&apos;s driving it — before you spend
            another dollar on the same creative.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild variant="primary">
              <a href={site.calendly} target="_blank" rel="noreferrer">
                Book free audit call
              </a>
            </Button>
            <Button asChild variant="ghost" size="link">
              <a href={`mailto:${site.email}`}>
                Email us instead <span aria-hidden>→</span>
              </a>
            </Button>
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.05em] text-mute">
            No pitch. No commitment. Just an honest look at your content.
          </p>
        </div>
      </Container>
    </section>
  );
}
