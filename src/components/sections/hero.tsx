"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/sections/primitives";
import { useCountUp } from "@/hooks/use-count-up";
import { heroTicker, site } from "@/lib/content";
import { cn } from "@/lib/utils";

type TickerEntry = (typeof heroTicker)[number];

function TickerItem({ item, duration }: { item: TickerEntry; duration: number }) {
  const animate = !("animate" in item) || item.animate !== false;
  const { ref, value } = useCountUp<HTMLDivElement>({
    target: item.value,
    duration,
    startDelay: 400,
    enabled: animate,
  });

  return (
    <div className="border-b border-rule py-3.5 last:border-b-0">
      <div className="mb-[5px] font-mono text-[10px] uppercase tracking-[0.07em] text-mute">
        {item.key}
      </div>
      <div
        ref={ref}
        className={cn(
          "font-display text-[28px] font-bold leading-[1.1] text-text",
          item.accent && "text-brand"
        )}
      >
        {item.prefix}
        {value}
        <span className="ml-1 text-sm font-normal text-dim">{item.unit}</span>
      </div>
      <div className="mt-[3px] text-xs text-dim">{item.sub}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-20 pt-[120px] sm:pb-20">
      {/* glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(200,240,68,.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(200,240,68,.03) 0%, transparent 60%)",
        }}
      />

      <Container className="relative z-1">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
          {/* left */}
          <div>
            <Eyebrow>AI-Native Content Agency</Eyebrow>
            <h1 className="mb-6 font-display text-[clamp(44px,5.5vw,72px)] font-extrabold leading-none tracking-[-0.03em] text-text">
              Content that <span className="block text-brand">cuts CPA.</span>{" "}
              Not just feeds.
            </h1>
            <p className="mb-9 max-w-[460px] text-[17px] font-light leading-[1.7] text-dim">
              SharpFrame produces{" "}
              <strong className="font-medium text-text">
                80 AI-powered videos per month
              </strong>{" "}
              for DTC skincare and supplement brands — in 3 hours. With a
              performance loop that makes every campaign smarter than the last.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="primary">
                <a href={site.calendly} target="_blank" rel="noreferrer">
                  Book a free content audit
                </a>
              </Button>
              <Button asChild variant="ghost" size="link">
                <a href="#how">
                  See how it works <span aria-hidden>→</span>
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-rule pt-5">
              <div className="flex">
                {["DTC", "BR", "SK"].map((label) => (
                  <div
                    key={label}
                    className="-mr-2 flex size-7 items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-raised text-[10px] text-dim"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="text-xs text-dim">
                Built for{" "}
                <strong className="font-medium text-text">DTC brands</strong>{" "}
                spending $5K–$50K/month on ads
              </div>
            </div>
          </div>

          {/* right — ticker card */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[24px] border border-rule bg-lift p-7">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--brand), transparent)",
                }}
              />
              <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.1em] text-mute">
                SharpFrame at a glance
              </div>
              {heroTicker.map((item, i) => (
                <TickerItem key={item.key} item={item} duration={900 + i * 200} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
