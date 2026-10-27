import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Square corners (2px max). Primary is lime with ink text; secondary is a 1px
 * ink border. The arrow inside shifts 3px right on hover — see `.group`.
 */
const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-[2px] font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-on-accent hover:brightness-[0.94]",
        secondary:
          "border border-ink bg-transparent text-ink hover:bg-ink hover:text-bg",
        quiet: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3 text-[15px]",
        lg: "px-7 py-3.5 text-[15px]",
        sm: "px-4 py-2.5 text-[14px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

/** The arrow that nudges right on hover. Place inside a Button. */
export function ButtonArrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]"
    >
      →
    </span>
  );
}

export { buttonVariants };
