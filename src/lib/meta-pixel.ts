export const META_PIXEL_ID = "1067400032361073";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackPixelEvent(event: string) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event);
  }
}

export function trackPageView() {
  trackPixelEvent("PageView");
}

export function trackInitiateCheckout() {
  trackPixelEvent("InitiateCheckout");
}
