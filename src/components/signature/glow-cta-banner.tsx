import { CtaButton } from "@/components/cta-button";
import { Frame } from "@/components/primitives";
import { site } from "@content/site";

/**
 * 8 — Glow wordmark CTA banner. Dark full-width band: headline and button on
 * the left, the Sharpframe wordmark on the right as a large outlined lime
 * glow.
 */
export function GlowCtaBanner({
  heading,
  body,
  location,
}: {
  heading: string;
  body?: string;
  location: string;
}) {
  return (
    <section className="section-dark relative overflow-hidden">
      <Frame>
        <div className="grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-[560px]">
            <h2 className="balance text-[clamp(28px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
              {heading}
            </h2>
            {body ? (
              <p className="mt-5 text-[17px] leading-[1.7] text-muted">{body}</p>
            ) : null}
            <div className="mt-9">
              <CtaButton location={location} />
            </div>
          </div>

          <p
            aria-hidden
            className="hidden select-none whitespace-nowrap text-[clamp(44px,6vw,78px)] font-bold lowercase leading-none tracking-[-0.04em] lg:block"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px var(--accent)",
              filter: "drop-shadow(0 0 22px rgba(198,244,50,0.38))",
              opacity: 0.85,
            }}
          >
            {site.wordmark}
          </p>
        </div>
      </Frame>
    </section>
  );
}
