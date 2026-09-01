import { Cta } from "./ui";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:py-20 md:px-8">
      <div
        aria-hidden
        className="paper-lines pointer-events-none absolute inset-0 opacity-[0.4] [--line:2.4rem]"
      />
      <div className="relative mx-auto w-full max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
          Na próxima vez que olhar para uma folha de redação,{" "}
          <span className="marker">saiba por onde começar.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-graphite">
          Tenha exemplos, estruturas, argumentos e materiais de revisão organizados em um único kit.
        </p>

        <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <p className="font-display text-base font-extrabold uppercase tracking-tight text-navy">
            Kit Redação Nota 1000
          </p>
          <p className="mt-2 font-display text-4xl font-extrabold leading-none text-navy">R$ 19,90</p>
          <p className="mt-1.5 text-xs font-semibold text-success">Pagamento único</p>
          <div className="mt-6">
            <Cta size="xl" className="w-full">
              QUERO COMEÇAR A ESTUDAR
            </Cta>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Material digital • Acesso após a compra</p>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground">
          Kit Redação Nota 1000 é um material educacional independente, sem vínculo com o ENEM, o MEC ou
          qualquer instituição oficial.
        </p>
      </div>
    </section>
  );
}
