"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbox } from "@/components/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import {
  featuredHeroShots,
  featuredPortfolio,
  siteConfig,
} from "@/lib/data";

export function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Section id="portfolio" fullBleed className="border-t border-text/10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Featured Work"
              subtitle="Curated highlights from recent games and sessions."
            />
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto px-4 pb-2 sm:gap-4 sm:px-6 lg:px-8">
          {featuredHeroShots.map((item, index) => (
            <figure
              key={item.src}
              className="relative aspect-[16/10] w-[85vw] shrink-0 overflow-hidden rounded-lg sm:w-[60vw] lg:w-[calc(33.333%-0.75rem)] lg:shrink"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 85vw, 33vw"
                priority={index === 0}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-sm font-medium text-primary-tier">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:px-8">
          {featuredPortfolio.map((item, index) => (
            <figure key={item.src} className="group relative aspect-square overflow-hidden rounded-lg">
              <button
                type="button"
                className="relative block h-full w-full cursor-pointer"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${item.caption}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 text-left text-xs font-medium text-primary-tier sm:text-sm">
                  {item.caption}
                </figcaption>
              </button>
            </figure>
          ))}
        </div>

        <div className="mt-10 px-4 text-center sm:px-6 lg:px-8">
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
          >
            View full gallery on Instagram
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Lightbox
        items={featuredPortfolio}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
