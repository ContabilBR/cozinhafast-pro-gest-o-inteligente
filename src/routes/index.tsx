import { createFileRoute } from "@tanstack/react-router";

import { ComoFunciona } from "@/components/landing/como-funciona";
import { CtaFinal } from "@/components/landing/cta-final";
import { Diferenciais } from "@/components/landing/diferenciais";
import { Faq, perguntas } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Modulos } from "@/components/landing/modulos";
import { Precos } from "@/components/landing/precos";
import { Problema } from "@/components/landing/problema";
import { ProvaSocial } from "@/components/landing/prova-social";
import { Virada } from "@/components/landing/virada";

const TITLE = "CozinhaFast Pro — Sistema para restaurante com comanda digital";
const DESCRIPTION =
  "Sistema para restaurante com comanda digital, painel de cozinha, cardápio QR Code, estoque e Pix. A partir de R$179/mês. Agende uma demonstração.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CozinhaFast Pro",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android, iOS, Web",
          inLanguage: "pt-BR",
          description: DESCRIPTION,
          offers: {
            "@type": "Offer",
            price: "179.00",
            priceCurrency: "BRL",
􀀀        },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: perguntas.map((p) => ({
            "@type": "Question",
            name: p.q,
            acceptedAnswer: { "@type": "Answer", text: p.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problema />
        <Virada />
        <ComoFunciona />
        <Modulos />
        <Diferenciais />
        <ProvaSocial />
        <Precos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
