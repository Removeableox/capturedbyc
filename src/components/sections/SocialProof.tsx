import { ReviewCarousel } from "@/components/ReviewCarousel";
import { reviews } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="w-full overflow-hidden py-10 sm:py-14">
      <ReviewCarousel reviews={reviews} />
    </section>
  );
}
