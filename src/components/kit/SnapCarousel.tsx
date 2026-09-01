import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode[];
  /** Tailwind width classes applied to each slide */
  itemClassName?: string;
  autoplayMs?: number;
  ariaLabel: string;
};

export function SnapCarousel({ children, itemClassName, autoplayMs = 5200, ariaLabel }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      const next = (active + dir + children.length) % children.length;
      setActive(next);
      scrollToIndex(next);
    },
    [active, children.length, scrollToIndex],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => step(1), autoplayMs);
    return () => window.clearInterval(id);
  }, [paused, step, autoplayMs]);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const d = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <div
      className="relative"
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => window.setTimeout(() => setPaused(false), 4000)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        role="region"
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:gap-6 md:px-0"
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={cn("min-w-0 shrink-0 snap-start", itemClassName ?? "w-[86%] sm:w-[46%] lg:w-[31.5%]")}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => step(-1)}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-brand-soft md:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para item ${i + 1}`}
              onClick={() => {
                setActive(i);
                scrollToIndex(i);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-6 bg-brand" : "w-1.5 bg-border",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => step(1)}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-brand-soft md:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
