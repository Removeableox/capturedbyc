import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-text/10 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <Button href="#contact" className="w-full !py-3">
        Book a Shoot
      </Button>
    </div>
  );
}
