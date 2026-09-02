import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { trackInitiateCheckout } from "@/lib/meta-pixel";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const offer = document.getElementById("oferta");
    let pastHero = false;
    let offerVisible = false;

    const update = () => setVisible(pastHero && !offerVisible);

    const heroObs = new IntersectionObserver(
      (entries) => {
        pastHero = !entries[0]?.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    const offerObs = new IntersectionObserver(
      (entries) => {
        offerVisible = !!entries[0]?.isIntersecting;
        update();
      },
      { threshold: 0.15 },
    );

    if (hero) heroObs.observe(hero);
    if (offer) offerObs.observe(offer);
    return () => {
      heroObs.disconnect();
      offerObs.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5">
        <div className="min-w-0">
          <p className="truncate font-display text-[0.7rem] font-extrabold uppercase tracking-tight text-navy">
            Kit Redação Nota 1000
          </p>
          <p className="font-display text-base font-extrabold leading-tight text-navy">R$ 19,90</p>
        </div>
        <a
          href="https://pay.kirvano.com/df102b63-3564-4381-80d5-30e2ecf7eb6c"
          onClick={trackInitiateCheckout}
          className="shrink-0 rounded-lg bg-brand px-4 py-3 font-display text-xs font-bold uppercase tracking-tight text-primary-foreground"
        >
          Quero acessar
        </a>
      </div>
    </div>
  );
}
