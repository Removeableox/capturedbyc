"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import type { LenisOptions } from "lenis";
import "lenis/dist/lenis.css";

const DESKTOP_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const lenisOptions: LenisOptions = {
  lerp: 0.055,
  wheelMultiplier: 0.8,
  smoothWheel: true,
  autoRaf: true,
  anchors: {
    offset: 80,
  },
};

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);

    const update = () => {
      setEnabled(desktop.matches && !reduced.matches);
    };

    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);

    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
