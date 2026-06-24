import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Container id="contact" className="py-12 sm:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-linear-primary-accent px-5 py-12 text-center sm:rounded-3xl sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]"
          aria-hidden="true"
        />

        <h2 className="font-display relative text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Capture Your Next Big Moment?
        </h2>
        <p className="relative mt-3 text-sm text-white/80 sm:mt-4">
          Limited weekly event slots available
        </p>

        <div className="relative mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
          <Button
            href="mailto:hello@capturedbyc.com"
            variant="light"
            className="w-full sm:w-auto"
          >
            Book a Shoot
          </Button>
          <Button
            href="mailto:hello@capturedbyc.com?subject=Availability%20Inquiry"
            variant="ghost"
            className="w-full sm:w-auto"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </Container>
  );
}
