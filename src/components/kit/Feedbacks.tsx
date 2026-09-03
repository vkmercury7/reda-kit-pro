import { MessageSquare } from "lucide-react";
import { Section, Eyebrow } from "./ui";
import { SnapCarousel } from "./SnapCarousel";

/**
 * Prints reais de feedback dos estudantes.
 * O print é exibido inteiro (object-contain), sem cortes.
 * Arquivos servidos de /public para funcionar em qualquer host (Netlify incluso).
 */
const feedbacks: { label: string; src?: string; width?: number; height?: number }[] = [
  { label: "Feedback 01", src: "/images/feedbacks/feedback-01.jpg", width: 1170, height: 652 },
  { label: "Feedback 02", src: "/images/feedbacks/feedback-02.jpg", width: 1170, height: 1128 },
];

function Slot({ label, src, width, height }: { label: string; src?: string; width?: number; height?: number }) {
  if (src) {
    return (
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)]"
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="mx-auto max-h-[420px] w-full rounded-xl object-contain"
        />
      </a>
    );
  }

  return (
    <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card p-6 text-center shadow-[var(--shadow-paper)]">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand">
        <MessageSquare className="h-5 w-5" />
      </span>
      <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-navy">{label}</p>
      <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
        Espaço reservado para print real de feedback.
      </p>
    </div>
  );
}

export function Feedbacks() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Feedbacks</Eyebrow>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Veja o que os estudantes estão falando
        </h2>
      </div>

      <div className="mt-9 -mx-5 md:mx-0">
        <SnapCarousel
          ariaLabel="Feedbacks de estudantes"
          autoplayMs={6000}
          itemClassName="w-[86%] sm:w-[48%] lg:w-[32%]"
        >
          {feedbacks.map((f) => (
            <Slot key={f.label} {...f} />
          ))}
        </SnapCarousel>
      </div>
    </Section>
  );
}
