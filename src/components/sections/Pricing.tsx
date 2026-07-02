import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { pricingTiers } from "@/lib/data";

export function Pricing() {
  return (
    <Section id="pricing" className="border-t border-text/10 bg-surface">
      <SectionHeading
        title="Pricing"
        subtitle="Transparent packages with clear inclusions. Every quote is tailored to your event."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
              tier.highlighted
                ? "border-accent bg-background shadow-lg shadow-accent/10"
                : "border-text/10 bg-background"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {tier.name}
            </p>
            <p className="font-display mt-3 text-4xl font-bold text-text sm:text-5xl">
              {tier.price}
            </p>
            <p className="mt-3 text-sm text-secondary-tier">{tier.description}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-secondary-tier">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Request quote
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
