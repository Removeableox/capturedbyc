"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-text/10 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <Button href="#contact" className="w-full !py-3">
        Book a Shoot
      </Button>
    </div>
  );
}
