import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutImage } from "@/lib/data";

export function About() {
  return (
    <Container id="about" className="py-16 sm:py-24">
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

          <div className="space-y-4 text-base leading-relaxed text-text/60">
            <p>
              I picked up a camera at my first high school game and never looked
              back. There&apos;s something electric about that split second before
              a touchdown, a buzzer-beater, or a photo finish—and I live to
              capture it.
            </p>
            <p>
              Sports photography isn&apos;t a side gig for me. It&apos;s the only
              thing I do. That focus means I know the rhythms of every sport I
              shoot, the angles that tell a story, and the moments coaches and
              athletes actually want to relive.
            </p>
            <p>
              When you book with me, you get someone on the sidelines who thinks
              like an athlete and shoots like a storyteller.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
