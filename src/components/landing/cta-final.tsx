import { CtaButtons } from "./cta-buttons";

export function CtaFinal() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-[2rem] bg-foreground px-7 py-12 text-center text-background sm:px-12 sm:py-16">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Hoje o pedido depende de um papel no bolso do garçom. Amanhã pode não depender mais.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-background/75">
            Marque uma demonstração de 20 minutos ou mande uma mensagem. A gente mostra como fica
            a sua operação — com as suas mesas e o seu cardápio.
          </p>
          <CtaButtons className="mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}
