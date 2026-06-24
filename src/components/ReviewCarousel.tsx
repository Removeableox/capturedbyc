"use client";

import { Stars } from "@/components/ui/Stars";

interface Review {
  quote: string;
  author: string;
  rating: number;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

function ReviewItem({ review }: { review: Review }) {
  return (
    <figure className="flex shrink-0 items-center gap-4 rounded-full border border-text/10 bg-surface px-5 py-3 sm:gap-5 sm:px-6 sm:py-3.5">
      <Stars count={review.rating} />
      <blockquote className="flex items-center gap-3 whitespace-nowrap">
        <p className="text-sm text-text/85 sm:text-base">
          &ldquo;{review.quote}&rdquo;
        </p>
        <cite className="text-sm font-medium text-accent not-italic">
          — {review.author}
        </cite>
      </blockquote>
    </figure>
  );
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const track = [...reviews, ...reviews];

  return (
    <div className="group relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((review, index) => (
            <ReviewItem
              key={`${review.author}-${review.quote}-${index}`}
              review={review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
