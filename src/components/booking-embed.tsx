"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { track } from "@/lib/analytics";
import { industries, site } from "@content/site";

interface CalApi {
  (action: string, ...args: unknown[]): void;
  q: unknown[][];
  ns: Record<string, unknown>;
}

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

const EMBED_SRC = "https://app.cal.com/embed/embed.js";
const CONTAINER_ID = "cal-inline";

/**
 * Creates the global `Cal` queue and loads embed.js once. Calls made before
 * the script lands are queued on `Cal.q` and replayed by it — the same thing
 * the official snippet does, written so it type-checks.
 */
function loadCal(): CalApi {
  if (window.Cal) return window.Cal;

  const api = ((...args: unknown[]) => {
    api.q.push(args);
  }) as CalApi;
  api.q = [];
  api.ns = {};
  window.Cal = api;

  const script = document.createElement("script");
  script.src = EMBED_SRC;
  script.async = true;
  document.head.appendChild(script);

  return api;
}

/**
 * Cal.com inline embed.
 *
 * On a successful booking we record the conversion and route to /thank-you.
 * Set the same URL as the event type's "redirect on booking" in Cal.com too,
 * so the redirect still happens if this listener ever misses.
 */
export function BookingEmbed() {
  const router = useRouter();
  const { calLink } = site.booking;

  React.useEffect(() => {
    if (!calLink) return;

    const Cal = loadCal();
    Cal("init", { origin: "https://cal.com" });
    Cal("inline", {
      elementOrSelector: `#${CONTAINER_ID}`,
      calLink,
      layout: "month_view",
    });
    Cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    Cal("on", {
      action: "bookingSuccessful",
      callback: () => {
        track("booking_completed", { source: "cal_inline" });
        router.push("/thank-you");
      },
    });
  }, [calLink, router]);

  if (!calLink) {
    return (
      <div className="border border-dashed border-line bg-surface p-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
          Calendar not connected
        </p>
        <p className="mt-4 text-[15px] font-semibold text-ink">
          Set the Cal.com event slug to switch this on
        </p>
        <p className="mt-3 max-w-[420px] text-[14px] leading-[1.7] text-muted">
          Put your event slug — for example{" "}
          <code className="text-ink">sharpframe/20min-ops-call</code> — into{" "}
          <code className="text-ink">site.booking.calLink</code> in{" "}
          <code className="text-ink">content/site.ts</code>. The inline calendar
          then replaces this panel. The intake questions to configure in Cal.com
          are listed in PLACEHOLDERS.md.
        </p>
        <p className="mt-6 text-[14px] text-muted">
          Until then, email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent-ink underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
        <details className="mt-6 border-t border-line pt-5">
          <summary className="cursor-pointer text-[13px] text-muted">
            Industry dropdown options for the booking form
          </summary>
          <ul className="mt-3 flex list-none flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-muted">
            {industries.map((industry) => (
              <li key={industry.slug}>{industry.name}</li>
            ))}
            <li>Other</li>
          </ul>
        </details>
      </div>
    );
  }

  return (
    <div
      id={CONTAINER_ID}
      className="min-h-[640px] w-full overflow-hidden border border-line"
    />
  );
}
