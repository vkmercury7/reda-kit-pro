import type { ReactNode } from "react";
import { ArrowDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Cta({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "lg" | "xl";
}) {
  return (
    <a
      href="https://pay.kirvano.com/df102b63-3564-4381-80d5-30e2ecf7eb6c"
      className={cn(
        "group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand text-center font-display font-bold tracking-tight text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:w-auto",
        size === "xl" ? "px-8 py-5 text-base sm:text-lg" : "px-7 py-4 text-sm sm:text-base",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "success" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]",
        tone === "brand" ? "bg-brand-soft text-brand" : "bg-success-soft text-success",
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:py-20 md:px-8", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success-soft text-success">
        <Check className="h-3 w-3" strokeWidth={3.5} />
      </span>
      <span className="min-w-0 text-sm leading-relaxed text-graphite sm:text-base">{children}</span>
    </li>
  );
}

export function FlowStep({ label, tone = "navy" }: { label: string; tone?: "navy" | "brand" | "success" }) {
  return (
    <div
      className={cn(
        "rounded-lg border px-3 py-2 text-center text-[0.72rem] font-bold uppercase tracking-wide sm:text-xs",
        tone === "navy" && "border-border bg-secondary text-navy",
        tone === "brand" && "border-transparent bg-brand-soft text-brand",
        tone === "success" && "border-transparent bg-success-soft text-success",
      )}
    >
      {label}
    </div>
  );
}

export function FlowArrow() {
  return (
    <div className="flex justify-center py-1.5 text-border">
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}

export function Lines({ count = 6, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-[7px] rounded-full bg-rule"
          style={{ width: `${[100, 94, 88, 97, 72, 91, 84, 66][i % 8]}%` }}
        />
      ))}
    </div>
  );
}
