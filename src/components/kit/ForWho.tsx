import { Section, CheckItem } from "./ui";

const items = [
  "Trava quando precisa começar uma redação",
  "Tem dificuldade para desenvolver argumentos",
  "Não sabe o que escrever quando aparece um tema inesperado",
  "Estudou pouco redação e precisa organizar melhor seus estudos",
  "Quer analisar exemplos antes de escrever",
  "Precisa revisar redação de maneira mais rápida e organizada",
];

export function ForWho() {
  return (
    <Section className="bg-secondary/60">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:gap-12">
        <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Esse material é para você que…
        </h2>

        <div>
          <ul className="grid gap-3.5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-6">
            {items.map((i) => (
              <CheckItem key={i}>{i}</CheckItem>
            ))}
          </ul>

          <p className="mt-6 font-display text-base font-bold leading-snug text-navy sm:text-lg">
            Você não precisa começar sabendo tudo.{" "}
            <span className="marker">Precisa começar entendendo a estrutura.</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
