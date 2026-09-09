import { ChefHat, Mail, MessageCircle } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ChefHat className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-extrabold">
              CozinhaFast <span className="text-primary">Pro</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            Sistema de gestão para bares, lanchonetes, pizzarias e restaurantes à la carte.
            Produto brasileiro, feito para o dia a dia do restaurante brasileiro.
          </p>
        </div>

        <div className="sm:text-right">
          <h2 className="font-bold">Fale com a gente</h2>
          <div className="mt-4 flex flex-col gap-3 sm:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium hover:text-primary"
            >
              <MessageCircle className="size-4 text-success" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 font-medium hover:text-primary"
            >
              <Mail className="size-4 text-primary" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted-foreground">
        © {new Date().getFullYear()} CozinhaFast Pro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
