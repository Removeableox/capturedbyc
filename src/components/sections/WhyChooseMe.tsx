import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiatorExtras, differentiators } from "@/lib/data";

export function WhyChooseMe() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            title="Why Choose Me"
            subtitle="Not just any photographer—a specialist who lives for peak moments."
            align="left"
          />

          <ul className="space-y-4">
            {differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                  ✓
                </span>
                <span className="text-base text-text/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-text/10 bg-primary/5 p-8">
          <h3 className="font-display text-lg font-bold text-primary">
            Also included
          </h3>
          <ul className="mt-6 space-y-4">
            {differentiatorExtras.map((item) => (
              <li
                key={item}
                className="border-b border-text/10 pb-4 text-sm text-text/60 last:border-0 last:pb-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
