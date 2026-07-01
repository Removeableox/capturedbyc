import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroImage } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative z-10 w-full px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Solo Sports Photographer
          </p>
          <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-7xl">
            Elite Sports Photography That Captures the Moment Everyone Misses
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text/70 sm:text-lg lg:text-xl">
            Game-day coverage, athlete portraits, and high-impact imagery for
            teams, leagues, and brands.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="#contact">Book a Shoot</Button>
            <Button href="#portfolio" variant="outline">
              View Portfolio
            </Button>
          </div>

          <p className="mt-8 text-sm text-text/50">
            Trusted by athletes, teams, and event organizers
          </p>
        </div>
      </div>
    </section>
  );
}
