import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <Container id="process" className="border-t border-text/10 bg-primary/5 py-12 sm:py-24">
      <SectionHeading
        title="How It Works"
        subtitle="Booking is simple. You focus on the game—I handle the rest."
      />

      <div className="relative mx-auto max-w-4xl lg:max-w-none">
        <div
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-linear-primary-accent opacity-40 lg:block"
          aria-hidden="true"
        />

        <ol className="grid gap-0 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <div className="flex flex-col items-center self-stretch">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-primary-accent font-display text-sm font-bold text-white shadow-md shadow-primary/25">
                  {step.step}
                </span>
                {index < processSteps.length - 1 && (
                  <div
                    className="my-1 w-px flex-1 bg-linear-primary-accent opacity-25 lg:hidden"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div
                className={`min-w-0 pt-0.5 lg:mt-5 lg:pt-0 ${index < processSteps.length - 1 ? "pb-10" : ""}`}
              >
                <h3 className="font-display text-lg font-bold text-text sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text/60">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
