import { ClipboardX, Flame, PackageX, Receipt } from "lucide-react";

const dores = [
  {
    icon: ClipboardX,
    titulo: "A comanda de papel some",
    texto:
      "Some no bolso do garçom, molha na pia, vira rasura. Aí ninguém sabe se a mesa 4 pediu duas ou três porções — e alguém sempre perde dinheiro nessa conta.",
  },
  {
    icon: Flame,
    titulo: "No rush, o pedido sai errado",
    texto:
      "Sexta às 20h, garçom correndo entre oito mesas, cozinha gritando. Um prato errado é comida no lixo, cliente irritado e mesa parada esperando de novo.",
  },
  {
    icon: PackageX,
    titulo: "O insumo acaba no meio do serviço",
    texto:
      "Você descobre que faltou queijo quando o cliente já pediu a pizza. Ninguém deu baixa em nada, e o estoque real só existe na cabeça de uma pessoa.",
  },
  {
    icon: Receipt,
    titulo: "O fechamento prende todo mundo",
    texto:
      "Fim do expediente e ainda tem meia hora de comanda com caderno, calculadora e maquininha. Se der diferença, começa a caça ao erro do dia inteiro.",
  },
];

export function Problema() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">O dia a dia</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Você não precisa de mais um sistema. Precisa que essas quatro coisas parem de acontecer.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {dores.map((d) => (
            <div
              key={d.titulo}
              className="rounded-3xl border border-border bg-background p-6 sm:p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <d.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-bold">{d.titulo}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
