"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-100 border-b border-transparent transition-[background-color,border-color,padding] duration-300",
        scrolled
          ? "border-rule bg-surface/90 py-3.5 backdrop-blur-md"
          : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-[-0.02em] text-text"
        >
          {site.logo.lead}
          <span className="text-brand">{site.logo.accent}</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-dim transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button asChild variant="primary" size="sm">
          <a href={site.calendly} target="_blank" rel="noreferrer">
            Book free audit
          </a>
        </Button>
      </div>
    </nav>
  );
}
