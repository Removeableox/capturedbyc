import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { aboutImage, aboutPullQuote } from "@/lib/data";

export function About() {
  return (
    <Section id="about" className="border-t border-text/10 bg-surface">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <SectionHeading
            title="About the Photographer"
            subtitle="One lens. One focus. Every peak moment."
            align="left"
          />

          <blockquote className="mb-8 border-l-4 border-accent pl-4 font-display text-2xl leading-tight text-primary-tier sm:text-3xl">
            &ldquo;{aboutPullQuote}&rdquo;
          </blockquote>

          <div className="space-y-4 text-base leading-relaxed text-secondary-tier">
            <p>
              I picked up a camera at my first high school game and never looked
              back. There&apos;s something electric about that split second before
              a touchdown, a buzzer-beater, or a photo finish—and I live to
              capture it.
            </p>
            <p>
              That focus means I know the rhythms of every sport I shoot, the
              angles that tell a story, and the moments coaches and athletes
              actually want to relive.
            </p>
            <p>
              When you book with me, you get someone on the sidelines who thinks
              like an athlete and shoots like a storyteller.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
