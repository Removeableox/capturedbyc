import { Stars } from "@/components/ui/Stars";
import { reviews } from "@/lib/data";

interface Review {
  quote: string;
  author: string;
  rating: number;
}

interface ReviewGridProps {
  reviews: Review[];
}

export function ReviewGrid({ reviews: reviewItems }: ReviewGridProps) {
  const featured = reviewItems.slice(0, 3);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {featured.map((review) => (
        <figure
          key={review.author}
          className="flex h-full flex-col rounded-xl border border-text/10 bg-surface p-6"
        >
          <Stars count={review.rating} />
          <blockquote className="mt-4 flex-1">
            <p className="text-base leading-relaxed text-primary-tier">
              &ldquo;{review.quote}&rdquo;
            </p>
          </blockquote>
          <cite className="mt-4 block text-sm font-medium text-accent not-italic">
            — {review.author}
          </cite>
        </figure>
      ))}
    </div>
  );
}
