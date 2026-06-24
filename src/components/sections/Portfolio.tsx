import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioItems } from "@/lib/data";

export function Portfolio() {
  return (
    <Container id="portfolio" className="py-16 sm:py-24">
      <SectionHeading
        title="Portfolio Highlights"
        subtitle="Peak action, raw emotion, and the moments that define a season."
      />

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:gap-4">
        {portfolioItems.map((item, index) => (
          <figure
            key={item.src}
            className={`group relative overflow-hidden rounded-lg ${
              index === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[420px]" : "aspect-square"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 50vw, 33vw"
              }
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent p-4 text-sm font-medium text-text transition-transform duration-300 group-hover:translate-y-0">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
