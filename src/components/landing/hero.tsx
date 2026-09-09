import salao from "@/assets/salao-restaurante.jpg";
import { CtaButtons } from "./cta-buttons";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 lg:grid-cols-2 lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/25 px-4 py-1.5 text-sm font-semibold text-foreground">
            Feito no Brasil, para restaurante brasileiro
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Comanda perdida, pedido errado, caixa que não fecha.{" "}
            <span className="text-primary">Acabou.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O CozinhaFast Pro coloca mesas, comandas, cozinha e caixa no mesmo lugar. O pedido sai
            da mesa e aparece na cozinha em segundos — sem papel, sem grito, sem retrabalho no
            fim da noite.
          </p>

          <CtaButtons className="mt-8" />

          <p className="mt-4 text-sm text-muted-foreground">
            Conversa rápida, sem compromisso. A gente mostra funcionando no seu celular.
          </p>
        </div>

        <div className="relative">
          <img
            src={salao}
            alt="Salão de restaurante cheio, com garçom servindo pratos nas mesas"
            width={1600}
            height={1104}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-card px-4 py-3 shadow-lg sm:left-6">
            <p className="text-xs font-medium text-muted-foreground">Mesa 07 · comanda digital</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
              <span className="size-2.5 rounded-full bg-success" aria-hidden="true" />
              Pedido na cozinha em 3 segundos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
