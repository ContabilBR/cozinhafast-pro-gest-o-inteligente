import { CalendarCheck, MessageCircle } from "lucide-react";
import { DEMO_URL, WHATSAPP_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

export function CtaButtons({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "lg" | "md";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";
  const dims = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, dims, "bg-primary text-primary-foreground hover:bg-primary-dark")}
      >
        <CalendarCheck className="size-5" aria-hidden="true" />
        Agendar uma demonstração
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          dims,
          "border border-foreground/15 bg-card text-foreground hover:bg-secondary",
        )}
      >
        <MessageCircle className="size-5 text-success" aria-hidden="true" />
        Falar no WhatsApp
      </a>
    </div>
  );
}
