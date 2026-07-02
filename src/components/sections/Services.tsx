import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" className="border-t border-text/10">
      <SectionHeading
        title="Services"
        subtitle="Clear packages built for athletes, teams, and brands who need results fast."
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-text/10"
          >
            <Image
              src={service.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
            <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-text sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-secondary-tier sm:text-base">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
