import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <Section id="process" className="border-t border-text/10">
      <SectionHeading
        title="How It Works"
        subtitle="Booking is simple. You focus on the game—I handle the rest."
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-text/15 lg:block"
          aria-hidden="true"
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step) => (
            <li key={step.title} className="relative text-center lg:pt-0">
              <span className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-background font-display text-sm font-bold text-accent">
                {step.step}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-tier">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
