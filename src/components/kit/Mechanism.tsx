import { Section } from "./ui";

const parts = [
  {
    n: "01",
    title: "Introdução",
    text: "Apresente o assunto e deixe clara sua ideia principal.",
  },
  {
    n: "02",
    title: "Desenvolvimento 1",
    text: "Apresente e desenvolva seu primeiro argumento.",
  },
  {
    n: "03",
    title: "Desenvolvimento 2",
    text: "Fortaleça sua argumentação.",
  },
  {
    n: "04",
    title: "Conclusão",
    text: "Feche seu raciocínio e construa sua proposta.",
  },
];

export function Mechanism() {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 text-primary-foreground sm:py-20 md:px-8">
      <div aria-hidden className="paper-lines pointer-events-none absolute inset-0 opacity-[0.07] [--line:2rem]" />
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
            Pare de tentar escrever tudo de uma vez.
          </h2>
          <p className="mt-3 text-base text-primary-foreground/70 sm:text-lg">
            Aprenda a enxergar a redação por partes.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.04] p-4 sm:p-6">
          <div className="space-y-3">
            {parts.map((p, i) => (
              <div key={p.n}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-foreground/10 font-display text-sm font-extrabold">
                    {p.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-tight sm:text-base">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{p.text}</p>
                  </div>
                </div>
                {i < parts.length - 1 ? (
                  <div className="mx-auto my-1 h-4 w-px bg-primary-foreground/20" aria-hidden />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-2xl font-display text-base font-semibold leading-relaxed sm:text-lg">
          Quando você entende a função de cada parte, a folha em branco deixa de parecer tão assustadora.
        </p>
      </div>
    </section>
  );
}
