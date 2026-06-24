import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Container id="services" className="border-t border-text/10 bg-secondary/8 py-16 sm:py-24">
      <SectionHeading
        title="Services"
        subtitle="Clear packages built for athletes, teams, and brands who need results fast."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-2xl border border-text/10 bg-surface p-6 transition-colors hover:border-primary/40"
          >
            <span className="text-3xl" role="img" aria-hidden="true">
              {service.icon}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-text">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text/60">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="#contact">Get a Custom Quote</Button>
      </div>
    </Container>
  );
}
