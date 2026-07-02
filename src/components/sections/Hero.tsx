import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { heroContent, heroImage } from "@/lib/data";

export function Hero() {
  return (
    <Section fullBleed className="relative flex min-h-screen items-end overflow-hidden !py-0">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-scrim" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative z-10 w-full px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {heroContent.eyebrow}
          </p>
          <h1 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-8xl">
            {heroContent.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-tier sm:text-lg lg:text-xl">
            {heroContent.subheadline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary-tier sm:gap-x-6">
            {heroContent.stats.map((stat) => (
              <li key={stat} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {stat}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="#contact">Book a Shoot</Button>
            <Button href="#portfolio" variant="secondary">
              See Work ↓
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
