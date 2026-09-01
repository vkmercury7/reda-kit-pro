import { Section, FlowStep, FlowArrow } from "./ui";

const thoughts = ["Como eu começo?", "Que argumento eu uso?", "Como desenvolvo?", "E agora, como concluo?"];

export function Pain() {
  return (
    <Section className="bg-secondary/60">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Você já olhou para o tema e pensou:{" "}
          <span className="text-brand">“Eu não faço ideia do que escrever”?</span>
        </h2>
      </div>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-2xl border border-border bg-paper p-5 shadow-[var(--shadow-card)]">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Tema da redação
            </p>
            <div className="mt-2 h-[9px] w-3/4 rounded-full bg-rule" />
            <div className="paper-lines mt-5 h-56 rounded-lg border border-border/70 [--line:1.55rem]" />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {thoughts.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-graphite shadow-[var(--shadow-paper)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base leading-relaxed text-graphite sm:text-lg">
            Muitas vezes o problema não é simplesmente falta de estudo. É não saber como transformar suas
            ideias em uma redação organizada.
          </p>

          <div className="mt-7 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <FlowStep label="Folha em branco" />
            <FlowArrow />
            <FlowStep label="Estrutura" tone="brand" />
            <FlowArrow />
            <FlowStep label="Argumentos" tone="brand" />
            <FlowArrow />
            <FlowStep label="Redação organizada" tone="success" />
          </div>

          <p className="mt-6 font-display text-base font-bold text-navy sm:text-lg">
            É exatamente nisso que o Kit Redação Nota 1000 foi pensado para ajudar.
          </p>
        </div>
      </div>
    </Section>
  );
}
