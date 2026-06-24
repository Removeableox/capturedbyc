import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <Container className="border-y border-text/10 bg-secondary/10 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Pricing
        </p>
        <h2 className="font-display mt-4 text-3xl font-bold text-text sm:text-4xl">
          Packages starting at $350
        </h2>
        <p className="mt-4 text-base text-text/60">
          Custom pricing based on event size and coverage needs. Every quote is
          tailored—no one-size-fits-all packages.
        </p>
        <div className="mt-8">
          <Button href="#contact">Request Pricing</Button>
        </div>
      </div>
    </Container>
  );
}
