import { ArrowRight, Check } from "lucide-react";
import { Section, Lines } from "./ui";

export function Transform() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-4xl">Do estudo para a folha.</h2>
      </div>

      <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {/* Antes */}
        <div className="rounded-2xl border border-border bg-paper p-5 shadow-[var(--shadow-card)]">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">Antes</p>
          <p className="mt-3 text-sm font-bold uppercase tracking-wide text-navy">Tema da redação</p>
          <div className="paper-lines mt-3 h-36 rounded-lg border border-border/70 [--line:1.5rem]" />
          <p className="mt-4 text-center text-sm font-semibold text-graphite">“Por onde começar?”</p>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-border lg:rotate-0" />
        </div>

        {/* Kit */}
        <div className="rounded-2xl border border-brand/20 bg-brand-soft/60 p-5 shadow-[var(--shadow-card)]">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brand">Kit Redação</p>
          <div className="mt-4 space-y-2.5">
            {["Estrutura", "Ideias", "Argumentos", "Exemplos"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-navy shadow-[var(--shadow-paper)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-border lg:rotate-0" />
        </div>

        {/* Depois */}
        <div className="rounded-2xl border border-border bg-paper p-5 shadow-[var(--shadow-card)]">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-success">Depois</p>
          <div className="mt-3 space-y-3">
            {["Introdução", "Argumentação", "Desenvolvimento", "Conclusão"].map((s) => (
              <div key={s}>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-success" strokeWidth={3.5} />
                  <span className="text-xs font-bold uppercase tracking-wide text-navy">{s}</span>
                </div>
                <Lines count={2} className="mt-1.5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        A ideia é organizar o processo de escrita — do estudo à estrutura final do texto.
      </p>
    </Section>
  );
}
