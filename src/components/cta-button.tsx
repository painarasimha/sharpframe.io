"use client";

import Link from "next/link";

import { Button, ButtonArrow, type ButtonProps } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { cta } from "@content/site";

interface CtaButtonProps extends Omit<ButtonProps, "asChild" | "children"> {
  /** Short label ("Book a Call") for the header and tight spots. */
  short?: boolean;
  /** Section name recorded with the analytics event. */
  location: string;
  withArrow?: boolean;
  label?: string;
}

/**
 * The site's one action. Always goes to /book and always reports
 * `book_call_click` with the section it was pressed in.
 */
export function CtaButton({
  short = false,
  location,
  withArrow = true,
  label,
  variant = "primary",
  size = "lg",
  ...props
}: CtaButtonProps) {
  return (
    <Button asChild variant={variant} size={size} {...props}>
      <Link
        href={cta.href}
        onClick={() => track("book_call_click", { location })}
        data-cta={location}
      >
        {label ?? (short ? cta.short : cta.long)}
        {withArrow ? <ButtonArrow /> : null}
      </Link>
    </Button>
  );
}
