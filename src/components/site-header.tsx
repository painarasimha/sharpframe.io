"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { industries, nav } from "@content/site";
import { cn } from "@/lib/utils";

function IndustriesDropdown() {
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click and on Escape.
  React.useEffect(() => {
    if (!open) return;
    function onDown(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/industries"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
        className="flex items-center gap-1 text-[14px] text-muted transition-colors hover:text-ink"
      >
        Industries
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </Link>

      {open ? (
        <div className="absolute left-1/2 top-full z-20 w-[460px] -translate-x-1/2 pt-3">
          <ul className="grid list-none grid-cols-2 gap-px border border-line bg-line shadow-[0_18px_40px_-24px_rgba(11,11,12,0.4)]">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries#${industry.slug}`}
                  onClick={() => setOpen(false)}
                  className="block bg-surface px-4 py-2.5 text-[13.5px] text-muted transition-colors hover:bg-bg hover:text-ink"
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the full-screen menu when the route changes, including on back
  // and forward navigation.
  const [lastPath, setLastPath] = React.useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  // Lock body scroll behind the full-screen menu.
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="sticky top-0 z-50 pt-4">
        <header
          className={cn(
            "mx-auto flex h-14 w-[calc(100%-2rem)] max-w-[1100px] items-center justify-between gap-4 border border-line px-4 transition-colors sm:px-5",
            scrolled ? "bg-surface/85 backdrop-blur-md" : "bg-surface"
          )}
        >
          <Logo />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex list-none items-center gap-7">
              {nav.map((item) =>
                item.hasDropdown ? (
                  <li key={item.label}>
                    <IndustriesDropdown />
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <CtaButton short location="header" size="sm" withArrow={false} />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex size-9 items-center justify-center rounded-[2px] border border-line text-ink md:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </header>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen ? (
        <div className="fixed inset-0 z-100 flex flex-col bg-bg md:hidden">
          <div className="flex h-[72px] shrink-0 items-center justify-between px-6">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex size-9 items-center justify-center rounded-[2px] border border-line text-ink"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto px-6 pb-10 pt-4"
          >
            <ul className="list-none">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-line py-5 text-[22px] font-semibold tracking-[-0.02em] text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mb-3 mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              Industries
            </p>
            <ul className="grid list-none grid-cols-2 gap-x-4 gap-y-2">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries#${industry.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-[14px] text-muted"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CtaButton location="mobile_menu" className="w-full" />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
