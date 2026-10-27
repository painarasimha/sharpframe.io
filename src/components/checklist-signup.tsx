"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { footer, site } from "@content/site";

/**
 * Footer email capture for the Ops Leak Checklist.
 *
 * Rendered only when `site.showChecklistSignup` is true — keep it false until
 * the PDF actually exists. There is no mailing-list backend yet, so this hands
 * the address to the visitor's mail client; swap `onSubmit` for a POST to your
 * provider when you have one.
 */
export function ChecklistSignup() {
  const [email, setEmail] = React.useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Ops Leak Checklist");
    const body = encodeURIComponent(`Please send the checklist to ${email}.`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mt-8">
      <p className="text-[14px] font-semibold text-ink">
        {footer.checklist.title}
      </p>
      <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">
        {footer.checklist.body}
      </p>
      <form className="mt-3 flex" onSubmit={onSubmit}>
        <label htmlFor="checklist-email" className="sr-only">
          Email address
        </label>
        <input
          id="checklist-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="min-w-0 flex-1 border border-r-0 border-line bg-transparent px-3 py-2.5 text-[13px] text-ink outline-none placeholder:text-muted focus:border-ink"
        />
        <Button type="submit" size="sm">
          {footer.checklist.cta}
        </Button>
      </form>
    </div>
  );
}
