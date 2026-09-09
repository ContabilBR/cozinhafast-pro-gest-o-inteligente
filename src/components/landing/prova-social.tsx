import { Quote } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

export function ProvaSocial() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Quem está usando
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Em breve, depoimentos de quem já usa
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          O CozinhaFast Pro está rodando com os primeiros restaurantes parceiros. Preferimos
          esperar a opinião real deles a inventar número de cliente. Quer participar dessa fase e
          ajudar a moldar o produto?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            Fale com a gente no WhatsApp
          </a>
          .
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-3xl border border-dashed border-border bg-background p-7"
            >
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <div className="mt-5 space-y-2.5" aria-hidden="true">
                <div className="h-3 w-full rounded-full bg-secondary" />
                <div className="h-3 w-11/12 rounded-full bg-secondary" />
                <div className="h-3 w-7/12 rounded-full bg-secondary" />
              </div>
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                Espaço reservado para um restaurante parceiro
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
