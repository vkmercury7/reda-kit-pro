import { BookOpen, Layers, Lightbulb, Link2, Network } from "lucide-react";
import { Section, Eyebrow, Lines, FlowStep, FlowArrow } from "./ui";

function Card({
  index,
  amount,
  title,
  description,
  note,
  icon,
  visual,
}: {
  index: string;
  amount?: string;
  title: string;
  description: string;
  note?: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Card {index}
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
          {icon}
        </span>
      </div>

      {amount ? (
        <p className="mt-4 font-display text-3xl font-extrabold leading-none text-brand sm:text-4xl">
          {amount}
        </p>
      ) : null}
      <h3 className="mt-2 font-display text-base font-extrabold uppercase leading-snug tracking-tight text-navy sm:text-lg">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-graphite">{description}</p>
      {note ? <p className="mt-2 text-xs italic text-muted-foreground">{note}</p> : null}

      <div className="mt-5">{visual}</div>
    </article>
  );
}

export function Toolbox() {
  return (
    <Section id="conteudo">
      <div className="max-w-2xl">
        <Eyebrow>O que você vai receber</Eyebrow>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Uma verdadeira caixa de ferramentas para sua redação.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          index="01"
          amount="+150"
          title="Redações prontas para estudar"
          description="Analise exemplos completos e veja diferentes formas de estruturar uma boa redação."
          icon={<BookOpen className="h-4.5 w-4.5" />}
          visual={
            <div className="relative h-28">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 rounded-lg border border-border bg-paper p-3 shadow-[var(--shadow-paper)]"
                  style={{ top: i * 14, transform: `rotate(${i === 1 ? 1 : -1}deg)`, zIndex: 3 - i }}
                >
                  <Lines count={3} />
                </div>
              ))}
            </div>
          }
        />

        <Card
          index="02"
          amount="+100"
          title="Estruturas prontas de redação"
          description="Modelos para entender como começar, desenvolver e concluir seu texto."
          icon={<Layers className="h-4.5 w-4.5" />}
          visual={
            <div className="rounded-xl border border-border bg-secondary/50 p-3">
              <FlowStep label="Introdução" tone="brand" />
              <FlowArrow />
              <FlowStep label="Desenvolvimento 1" />
              <FlowArrow />
              <FlowStep label="Desenvolvimento 2" />
              <FlowArrow />
              <FlowStep label="Conclusão" tone="success" />
            </div>
          }
        />

        <Card
          index="03"
          amount="+50"
          title="Ideias e argumentos para diferentes temas"
          description="Tenha referências e caminhos para desenvolver sua argumentação diante de diferentes assuntos."
          note="Repertórios e referências para fortalecer a argumentação."
          icon={<Lightbulb className="h-4.5 w-4.5" />}
          visual={
            <div className="flex flex-wrap gap-2">
              {["Educação", "Tecnologia", "Meio ambiente", "Saúde", "Cidadania", "Desigualdade"].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-paper px-2.5 py-1.5 text-xs font-semibold text-navy-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          }
        />

        <Card
          index="04"
          amount="+30"
          title="Frases para ligar e organizar suas ideias"
          description="Palavras e expressões para conectar melhor os parágrafos e construir um texto mais organizado."
          note="Conectivos e expressões úteis para redação."
          icon={<Link2 className="h-4.5 w-4.5" />}
          visual={
            <div className="space-y-2">
              {["Diante disso,", "Por conseguinte,", "Nesse sentido,", "Portanto,"].map((f) => (
                <p key={f} className="text-sm font-medium text-navy">
                  <span className="marker">{f}</span>
                </p>
              ))}
            </div>
          }
        />

        <Card
          index="05"
          title="Mapas mentais de redação"
          description="Revise visualmente estruturas, conceitos e pontos importantes da redação."
          icon={<Network className="h-4.5 w-4.5" />}
          visual={
            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <div className="mx-auto w-fit rounded-lg bg-navy px-3 py-1.5 text-[0.65rem] font-bold uppercase text-primary-foreground">
                Redação
              </div>
              <div className="mx-auto my-2 h-4 w-px bg-border" />
              <div className="grid grid-cols-3 gap-2">
                {["Intro", "Dev", "Conclusão"].map((n) => (
                  <span
                    key={n}
                    className="rounded-md border border-border bg-paper py-1.5 text-center text-[0.65rem] font-bold uppercase text-navy-soft"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          }
        />

        <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand/30 bg-brand-soft/50 p-6">
          <p className="font-display text-lg font-extrabold leading-snug text-navy">
            Tudo reunido em um único kit para estudar, consultar e revisar.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            Não é só um pacote de arquivos: é material de apoio para você saber o que fazer em cada parte do
            texto.
          </p>
        </div>
      </div>
    </Section>
  );
}
