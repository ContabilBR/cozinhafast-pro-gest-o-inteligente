import { Check } from "lucide-react";
import { CtaButtons } from "./cta-buttons";

const inclui = [
  "Mesas, comandas digitais e painel de cozinha",
  "Cardápio digital com QR Code e autoatendimento",
  "Estoque com baixa automática e relatórios",
  "Pix no app, delivery e impressão térmica",
  "Suporte em português, por WhatsApp",
];

export function Precos() {
  return (
    <section id="precos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Planos</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          R$99 por mês, por tempo limitado
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          O valor cheio dos planos vai de R$179 a R$229 por mês, conforme os módulos que o seu
          restaurante usa. Enquanto o CozinhaFast Pro está nessa fase inicial, quem entrar agora
          garante um preço promocional — sem cartão de crédito para começar a conversa.
        </p>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-border bg-card p-8 text-left shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-muted-foreground">Plano CozinhaFast Pro</p>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              Oferta por tempo limitado
            </span>
          </div>

          <p className="mt-3 flex flex-wrap items-end gap-3">
            <span className="text-5xl font-extrabold text-primary">R$99</span>
            <span className="pb-1.5 font-medium text-muted-foreground">/mês, por restaurante</span>
            <span className="pb-1.5 text-lg font-medium text-muted-foreground line-through">
              R$179
            </span>
          </p>

          <ul className="mt-7 space-y-3">
            {inclui.map((i) => (
              <li key={i} className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                <span className="text-foreground">{i}</span>
              </li>
            ))}
          </ul>

          <CtaButtons className="mt-8" size="md" />
          <p className="mt-4 text-sm text-muted-foreground">
            Valor promocional válido por tempo limitado para quem entrar nessa fase inicial.
            Módulos adicionais e mais de um ponto de venda podem alterar o valor. A gente fecha o
            preço junto com você, sem letra miúda.
          </p>
        </div>
      </div>
    </section>
  );
}
