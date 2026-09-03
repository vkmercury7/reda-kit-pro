import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/kit/Hero";
import { Pain } from "@/components/kit/Pain";
import { MaterialInside } from "@/components/kit/MaterialInside";
import { Toolbox } from "@/components/kit/Toolbox";
import { Mechanism } from "@/components/kit/Mechanism";
import { ForWho } from "@/components/kit/ForWho";
import { Feedbacks } from "@/components/kit/Feedbacks";
import { Offer } from "@/components/kit/Offer";
import { Faq } from "@/components/kit/Faq";
import { FinalCta } from "@/components/kit/FinalCta";
import { StickyBar } from "@/components/kit/StickyBar";

const title = "Kit Redação Nota 1000 | Estruturas, exemplos e mapas mentais";
const description =
  "Redações prontas para estudar, estruturas, ideias, argumentos, conectivos e mapas mentais para você saber o que escrever na redação do ENEM e vestibulares. R$ 19,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="pb-20 md:pb-0">
      <Hero />
      <Pain />
      <MaterialInside />
      <Toolbox />
      <Mechanism />
      <ForWho />
      <Feedbacks />
      <Offer />
      <Faq />
      <FinalCta />
      <StickyBar />
    </main>
  );
}
