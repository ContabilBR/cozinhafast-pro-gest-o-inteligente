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
          A partir de R$179 por mês
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Os planos vão de R$179 a R$229 por mês, conforme os módulos que o seu restaurante usa.
          A gente conversa sobre a sua operação e indica a combinação certa — sem cartão de
          crédito para começar a conversa.
        </p>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-border bg-card p-8 text-left shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground">Plano CozinhaFast Pro</p>
          <p className="mt-2 flex items-end gap-2">
            <span className="text-5xl font-extrabold text-primary">R$179</span>
            <span className="pb-1.5 font-medium text-muted-foreground">/mês, por restaurante</span>
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
            Módulos adicionais e mais de um ponto de venda podem alterar o valor. A gente fecha o
            preço junto com você, sem letra miúda.
          </p>
        </div>
      </div>
    </section>
  );
}
