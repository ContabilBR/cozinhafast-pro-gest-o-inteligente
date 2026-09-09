import { ChefHat, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#topo" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ChefHat className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            CozinhaFast <span className="text-primary">Pro</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#como-funciona" className="hover:text-foreground">
            Como funciona
          </a>
          <a href="#modulos" className="hover:text-foreground">
            Módulos
          </a>
          <a href="#precos" className="hover:text-foreground">
            Preços
          </a>
          <a href="#faq" className="hover:text-foreground">
            Dúvidas
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
