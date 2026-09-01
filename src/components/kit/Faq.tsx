import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, Eyebrow } from "./ui";

const faqs = [
  {
    q: "O material serve para o ENEM?",
    a: "Sim. O kit foi organizado pensando na redação dissertativo-argumentativa, formato cobrado no ENEM, e também ajuda em vestibulares e outras provas que exigem redação. É um material educacional independente, sem vínculo oficial com o ENEM ou o MEC.",
  },
  {
    q: "Como vou receber o material?",
    a: "O material é digital. O acesso é liberado após a confirmação da compra, seguindo as instruções enviadas no e-mail informado no checkout.",
  },
  {
    q: "Preciso imprimir?",
    a: "Não é necessário. Você pode estudar direto pela tela. Se preferir estudar no papel, também é possível imprimir as páginas que quiser.",
  },
  {
    q: "Posso estudar pelo celular?",
    a: "Sim. O material pode ser aberto no celular, tablet ou computador.",
  },
  {
    q: "São redações prontas ou aulas?",
    a: "São materiais de estudo e consulta: redações completas para analisar, estruturas, ideias, argumentos, conectivos e mapas mentais. Não é um curso em vídeo.",
  },
  {
    q: "Como as estruturas podem me ajudar?",
    a: "Elas mostram a função de cada parte do texto — introdução, desenvolvimento e conclusão — para você entender por onde começar e como organizar suas ideias antes de escrever.",
  },
  {
    q: "Por quanto tempo terei acesso?",
    a: "O prazo de acesso segue as condições informadas na página de compra. Confira essas informações no checkout antes de finalizar.",
  },
];

export function Faq() {
  return (
    <Section className="bg-secondary/60">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
            Perguntas que os estudantes costumam fazer
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-paper)]"
            >
              <AccordionTrigger className="text-left font-display text-sm font-bold text-navy hover:no-underline sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-graphite">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
