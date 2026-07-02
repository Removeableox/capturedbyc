"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const MOBILE_NAV_ID = "mobile-nav-panel";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW === "true";

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const panel = mobileNavRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-text/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-display text-lg font-bold text-text sm:text-xl"
          >
            {siteConfig.name}
          </Link>
          {isPreview && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
              Preview
            </span>
          )}
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-tier transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" variant="outline" className="!px-5 !py-2 !text-sm">
            Book a Shoot
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-secondary-tier md:hidden"
          aria-expanded={open}
          aria-controls={MOBILE_NAV_ID}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          ref={mobileNavRef}
          id={MOBILE_NAV_ID}
          className="border-t border-text/10 bg-background px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-secondary-tier"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" variant="outline" className="w-full text-center" onClick={() => setOpen(false)}>
              Book a Shoot
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
