import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { Frame, Section } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { notFoundCopy } from "@content/site";

export default function NotFound() {
  return (
    <Section dots className="py-24 sm:py-32">
      <Frame>
        <div className="max-w-[560px]">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            404
          </p>
          <h1 className="mt-6 text-[clamp(32px,4.6vw,52px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            {notFoundCopy.headline}
          </h1>
          <p className="mt-5 text-[17px] leading-[1.7] text-muted">
            {notFoundCopy.body}
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/">Back to home</Link>
            </Button>
            <CtaButton location="404" short />
          </div>
        </div>
      </Frame>
    </Section>
  );
}
