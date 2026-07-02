"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

interface PortfolioItem {
  src: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  items: PortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen || activeIndex === null) return;

      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % items.length);
      } else if (event.key === "ArrowLeft") {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
    },
    [activeIndex, isOpen, items.length, onClose, onNavigate],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 rounded-full border border-text/20 bg-surface px-3 py-2 text-sm text-text hover:border-accent"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        Close
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-text/20 bg-surface px-3 py-2 text-sm text-text hover:border-accent"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
          >
            Prev
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-text/20 bg-surface px-3 py-2 text-sm text-text hover:border-accent"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex + 1) % items.length);
            }}
            aria-label="Next image"
          >
            Next
          </button>
        </>
      )}

      <figure
        className="relative max-h-[85vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="mt-4 text-center text-base text-secondary-tier">
          {item.caption}
        </figcaption>
      </figure>
    </div>
  );
}
