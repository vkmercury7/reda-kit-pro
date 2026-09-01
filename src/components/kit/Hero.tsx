import { Check, Sparkles } from "lucide-react";
import { Cta, Eyebrow, Lines } from "./ui";

const cards = [
  "COMO COMEÇAR UMA REDAÇÃO",
  "ESTRUTURA DA INTRODUÇÃO",
  "COMO DESENVOLVER UM ARGUMENTO",
  "MODELO DE DESENVOLVIMENTO",
  "COMO FAZER UMA BOA CONCLUSÃO",
  "IDEIAS PARA DIFERENTES TEMAS",
  "MAPA MENTAL — REDAÇÃO ENEM",
];

function CorrectionMark({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-success-soft px-2 py-1 text-[0.68rem] font-semibold text-success sm:text-xs">
      <Check className="h-3 w-3 shrink-0" strokeWidth={3.5} />
      {text}
    </span>
  );
}

export function Hero() {
  return (
    <header id="hero" className="relative overflow-hidden px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16">
      <div
        aria-hidden
        className="paper-lines pointer-events-none absolute inset-0 opacity-[0.35] [--line:2.2rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-soft blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="rise">
          <Eyebrow>
            <Sparkles className="h-3.5 w-3.5" />
            Preparação para redação
          </Eyebrow>

          <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
            Não saiba apenas o tema.
            <span className="mt-2 block">
              <span className="marker">Saiba o que escrever.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-graphite sm:text-lg">
            Tenha redações prontas, estruturas, ideias, argumentos e mapas mentais para estudar e entender
            como construir seu texto do início ao fim.
          </p>

          <div className="mt-7 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <p className="font-display text-lg font-extrabold uppercase tracking-tight text-navy sm:text-xl">
              Kit Redação Nota 1000
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-graphite">
              Um material completo para quem quer parar de travar diante da folha em branco.
            </p>
          </div>

          <div className="mt-7">
            <Cta size="xl">QUERO MELHORAR MINHA REDAÇÃO</Cta>
            <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
              Material digital • Acesso após a compra
            </p>
          </div>
        </div>

        {/* Composição do produto */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative pb-16 pt-4">
            {/* fichas ao fundo */}
            <div className="absolute inset-x-4 top-0 space-y-2">
              {cards.slice(0, 4).map((title, i) => (
                <div
                  key={title}
                  className="paper-sheet px-3.5 py-2 text-[0.6rem] font-bold uppercase tracking-wide text-navy-soft sm:text-[0.68rem]"
                  style={{
                    transform: `rotate(${i % 2 ? 0.9 : -1.1}deg) translateX(${i * 6}px)`,
                    opacity: 1 - i * 0.16,
                  }}
                >
                  {title}
                </div>
              ))}
            </div>

            {/* folha principal */}
            <div className="relative mt-14 rounded-2xl border border-border bg-paper p-4 shadow-[var(--shadow-lift)] sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Folha de redação
                </span>
                <span className="rounded-md bg-navy px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-primary-foreground">
                  Estudo guiado
                </span>
              </div>

              <div className="mt-4 border-l-2 border-destructive/25 pl-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-wide text-navy">Introdução</p>
                <Lines count={4} className="mt-2" />
                <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-wide text-navy">
                  Desenvolvimento
                </p>
                <Lines count={5} className="mt-2" />
                <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-wide text-navy">Conclusão</p>
                <Lines count={3} className="mt-2" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <CorrectionMark text="Boa argumentação" />
                <CorrectionMark text="Estrutura organizada" />
                <CorrectionMark text="Conclusão completa" />
              </div>
            </div>

            {/* selo conceitual */}
            <div className="absolute -bottom-1 right-2 rotate-[-6deg] rounded-2xl border border-success/25 bg-success-soft px-4 py-3 text-center shadow-[var(--shadow-card)]">
              <p className="font-display text-2xl font-extrabold leading-none text-success">900+</p>
              <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-success">
                Meta de estudo
              </p>
            </div>

            {/* post-it mapa mental */}
            <div className="absolute -left-1 bottom-8 rotate-[4deg] rounded-lg bg-highlight/70 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-wide text-navy shadow-[var(--shadow-paper)]">
              Mapa mental — Redação ENEM
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
