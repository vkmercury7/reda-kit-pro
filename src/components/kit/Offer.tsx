import { ShieldCheck } from "lucide-react";
import { Cta, Section, CheckItem, Lines } from "./ui";

const included = [
  "+150 Redações Prontas para Estudar",
  "+100 Estruturas Prontas",
  "+50 Ideias e Argumentos",
  "+30 Frases para Organizar suas Ideias",
  "Mapas Mentais de Redação",
];

export function Offer() {
  return (
    <Section id="oferta" className="scroll-mt-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Tudo o que você precisa para estudar redação de forma mais organizada.
        </h2>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12 lg:p-10">
          {/* Mockup */}
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-x-6 top-3 h-full rounded-2xl border border-border bg-secondary/70" />
            <div className="relative rounded-2xl border border-border bg-paper p-5 shadow-[var(--shadow-card)]">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brand">
                Material digital
              </p>
              <p className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy">
                Kit Redação
                <br />
                Nota 1000
              </p>
              <div className="mt-4 h-px w-full bg-border" />
              <Lines count={5} className="mt-4" />
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand-soft px-2 py-1 text-[0.6rem] font-bold uppercase text-brand">
                  Estruturas
                </span>
                <span className="rounded-md bg-success-soft px-2 py-1 text-[0.6rem] font-bold uppercase text-success">
                  Exemplos
                </span>
                <span className="rounded-md bg-highlight/70 px-2 py-1 text-[0.6rem] font-bold uppercase text-navy">
                  Mapas mentais
                </span>
              </div>
            </div>
          </div>

          {/* Conteúdo + preço */}
          <div>
            <ul className="grid gap-3.5">
              {included.map((i) => (
                <CheckItem key={i}>{i}</CheckItem>
              ))}
            </ul>

            <div className="my-7 h-px w-full bg-border" />

            <p className="text-sm text-graphite">Tenha acesso ao material completo por:</p>
            <p className="mt-2 font-display text-5xl font-extrabold leading-none text-navy sm:text-6xl">
              R$ 19,90
            </p>
            <p className="mt-2 text-sm font-semibold text-success">Pagamento único</p>

            <div className="mt-7">
              <Cta size="xl" className="w-full">
                QUERO ACESSAR O KIT AGORA
              </Cta>
              <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
                Material digital • Acesso após a compra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Garantia */}
      <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl border border-border bg-secondary/60 p-5 sm:p-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-success-soft text-success">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-base font-extrabold text-navy sm:text-lg">
            Você pode conhecer o material com tranquilidade.
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-graphite">
            Garantia de [X DIAS] conforme as condições da compra.
          </p>
        </div>
      </div>
    </Section>
  );
}
