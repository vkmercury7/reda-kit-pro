import { Section, Eyebrow, Lines, FlowStep, FlowArrow } from "./ui";
import { SnapCarousel } from "./SnapCarousel";

function Page({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-paper p-5 shadow-[var(--shadow-card)]">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-3">
        <h3 className="truncate font-display text-sm font-extrabold uppercase tracking-tight text-navy sm:text-base">
          {title}
        </h3>
        <span className="shrink-0 text-[0.65rem] font-bold tracking-[0.2em] text-muted-foreground">
          {num}
        </span>
      </div>
      <div className="mt-4 flex-1">{children}</div>
      <p className="mt-4 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
        Exemplo ilustrativo do layout
      </p>
    </div>
  );
}

export function Inside() {
  return (
    <Section className="bg-secondary/60 md:px-8">
      <div className="max-w-2xl">
        <Eyebrow>Veja antes de comprar</Eyebrow>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Material feito para estudar, consultar e revisar.
        </h2>
      </div>

      <div className="mt-9 -mx-5 md:mx-0">
        <SnapCarousel ariaLabel="Páginas do material" itemClassName="w-[86%] sm:w-[52%] lg:w-[32%]">
          {[
            <Page key="1" num="01" title="Como fazer uma introdução">
              <FlowStep label="Contextualização" tone="brand" />
              <FlowArrow />
              <FlowStep label="Apresentação do tema" />
              <FlowArrow />
              <FlowStep label="Tese" tone="success" />
              <Lines count={3} className="mt-4" />
            </Page>,
            <Page key="2" num="02" title="Desenvolvimento">
              <FlowStep label="Argumento" tone="brand" />
              <FlowArrow />
              <FlowStep label="Explicação" />
              <FlowArrow />
              <FlowStep label="Exemplo" />
              <FlowArrow />
              <FlowStep label="Fechamento" tone="success" />
            </Page>,
            <Page key="3" num="03" title="Conclusão">
              <div className="space-y-2">
                {["Retomada", "Proposta", "Agente", "Ação", "Finalidade"].map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-[0.6rem] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-navy-soft">{s}</span>
                  </div>
                ))}
              </div>
            </Page>,
            <Page key="4" num="04" title="Ideias para temas">
              <div className="grid grid-cols-2 gap-2">
                {["Educação", "Tecnologia", "Meio ambiente", "Saúde", "Desigualdade", "Cidadania"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-card px-2.5 py-2 text-xs font-semibold text-navy-soft"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <Lines count={2} className="mt-4" />
            </Page>,
            <Page key="5" num="05" title="Mapa mental">
              <div className="rounded-xl bg-secondary/60 p-4">
                <div className="mx-auto w-fit rounded-lg bg-brand px-3 py-1.5 text-[0.65rem] font-bold uppercase text-primary-foreground">
                  Redação ENEM
                </div>
                <div className="mx-auto my-2 h-4 w-px bg-border" />
                <div className="grid grid-cols-2 gap-2">
                  {["Estrutura", "Repertório", "Conectivos", "Proposta"].map((n) => (
                    <span
                      key={n}
                      className="rounded-md border border-border bg-paper py-2 text-center text-[0.65rem] font-bold uppercase text-navy-soft"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </Page>,
            <Page key="6" num="06" title="Exemplo de redação">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                <div className="min-w-0 border-l-2 border-destructive/25 pl-3">
                  <Lines count={3} />
                  <p className="my-2 text-xs font-semibold text-navy">
                    <span className="marker">tese apresentada com clareza</span>
                  </p>
                  <Lines count={4} />
                </div>
                <div className="w-20 shrink-0 space-y-2">
                  <span className="block rounded-md bg-success-soft px-2 py-1 text-[0.55rem] font-bold uppercase text-success">
                    Repertório
                  </span>
                  <span className="block rounded-md bg-brand-soft px-2 py-1 text-[0.55rem] font-bold uppercase text-brand">
                    Conectivo
                  </span>
                </div>
              </div>
            </Page>,
          ]}
        </SnapCarousel>
      </div>
    </Section>
  );
}
