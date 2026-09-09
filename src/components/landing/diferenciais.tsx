import { Check } from "lucide-react";
import dono from "@/assets/dono-restaurante.jpg";

const pontos = [
  {
    titulo: "Um app, não três sistemas",
    texto:
      "Hoje é caderno para a comanda, planilha para o estoque e a maquininha por fora. Aqui é um lugar só, com a mesma informação para o salão, a cozinha e o caixa.",
  },
  {
    titulo: "Feito para o restaurante brasileiro",
    texto:
      "Pix, comanda por mesa, couvert, delivery de bairro, impressora térmica de balcão. Nada disso é adaptação de um produto pensado para outro país.",
  },
  {
    titulo: "Funciona no celular que a equipe já tem",
    texto:
      "Não exige comprar equipamento novo para começar. Se o garçom tem um celular Android e o restaurante tem wi-fi, dá para rodar.",
  },
  {
    titulo: "Simples o bastante para o rush",
    texto:
      "Telas grandes, poucos toques, linguagem de restaurante. Treinar um garçom novo leva minutos, não uma tarde de curso.",
  },
];

export function Diferenciais() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Por que o CozinhaFast Pro
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Menos peças soltas. Menos dor de cabeça no fim da noite.
          </h2>

          <ul className="mt-8 space-y-6">
            {pontos.map((p) => (
              <li key={p.titulo} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{p.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{p.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={dono}
          alt="Dono de restaurante conferindo o celular atrás do balcão do seu bar"
          width={1200}
          height={912}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
