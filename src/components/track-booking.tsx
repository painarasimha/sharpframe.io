"use client";

import * as React from "react";

import { track } from "@/lib/analytics";

/**
 * Fires `booking_completed` once on the thank-you page. This is the canonical
 * conversion event: it catches bookings that arrive via Cal.com's own redirect
 * as well as ones routed by the inline embed's callback.
 */
export function TrackBooking() {
  React.useEffect(() => {
    track("booking_completed", { source: "thank_you_page" });
  }, []);

  return null;
}
