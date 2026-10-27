/**
 * Analytics shim. Reports to Vercel Analytics (`window.va`) when present, and
 * Google Analytics (`window.gtag`) if that is used instead. No-ops locally.
 */
type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    va?: (event: "event", payload: { name: string } & Props) => void;
    gtag?: (command: "event", name: string, params?: Props) => void;
  }
}

export function track(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  try {
    window.va?.("event", { name, ...props });
    window.gtag?.("event", name, props);
  } catch {
    // Analytics must never break the page.
  }
}
