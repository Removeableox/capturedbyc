import { ReviewGrid } from "@/components/ReviewCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { reviews } from "@/lib/data";

export function SocialProof() {
  return (
    <Section className="border-t border-text/10 bg-surface">
      <SectionHeading
        title="Trusted by Coaches & Athletes"
        subtitle="Real feedback from teams, programs, and families."
      />
      <ReviewGrid reviews={reviews} />
    </Section>
  );
}
