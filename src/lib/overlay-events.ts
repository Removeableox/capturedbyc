export const OVERLAY_OPEN_EVENT = "app:overlay-open";

export function notifyOverlayOpen() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OVERLAY_OPEN_EVENT));
  }
}
