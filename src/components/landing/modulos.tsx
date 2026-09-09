import {
  BarChart3,
  Bell,
  Bike,
  ClipboardList,
  FileCheck2,
  LayoutGrid,
  Monitor,
  Package,
  Printer,
  QrCode,
  Smartphone,
  Wallet,
} from "lucide-react";

const grupos = [
  {
    grupo: "No salão",
    itens: [
      {
        icon: LayoutGrid,
        titulo: "Mesas em tempo real",
        texto: "Livre, ocupada ou reservada — todo mundo vê o mesmo mapa do salão, atualizado.",
      },
      {
        icon: ClipboardList,
        titulo: "Comandas digitais por mesa",
        texto: "Cada item lançado fica registrado com hora e responsável. Nada de rasura.",
      },
      {
        icon: Bell,
        titulo: "Aviso de prato pronto",
        texto: "O garçom recebe a notificação assim que a cozinha finaliza o pedido.",
      },
    ],
  },
  {
    grupo: "Na cozinha",
    itens: [
      {
        icon: Monitor,
        titulo: "Painel de cozinha (KDS)",
        texto: "O pedido aparece na tela assim que é feito, na ordem de chegada. Sem papel.",
      },
      {
        icon: Printer,
        titulo: "Impressão térmica por Bluetooth",
        texto: "Prefere comanda impressa no balcão? Imprime direto, sem cabo e sem computador.",
      },
      {
        icon: Package,
        titulo: "Estoque com baixa automática",
        texto: "Vendeu o prato, o sistema desconta os insumos da ficha e avisa quando está no fim.",
      },
    ],
  },
  {
    grupo: "Para o cliente",
    itens: [
      {
        icon: QrCode,
        titulo: "Cardápio digital com QR Code",
        texto: "O cliente escaneia e vê o cardápio na hora. Mudou o preço? Muda ali, sem reimprimir.",
      },
      {
        icon: Smartphone,
        titulo: "Modo autoatendimento",
        texto: "O cliente faz o próprio pedido pelo celular, sem esperar o garçom ficar livre.",
      },
      {
        icon: Bike,
        titulo: "Delivery integrado",
        texto: "Pedidos de entrega entram na mesma fila da cozinha, com endereço e status.",
      },
    ],
  },
  {
    grupo: "No caixa e na gestão",
    itens: [
      {
        icon: Wallet,
        titulo: "Pagamento via Pix no app",
        texto: "Recebe o Pix dentro do próprio aplicativo e baixa a comanda na hora.",
      },
      {
        icon: BarChart3,
        titulo: "Relatórios e dashboard",
        texto: "Vendas do dia, prato mais pedido, horário de pico. Dá para olhar de casa.",
      },
      {
        icon: FileCheck2,
        titulo: "Preparado para emissão fiscal eletrônica",
        texto: "A estrutura já está pronta para nota fiscal eletrônica — módulo em preparação.",
        emBreve: true,
      },
    ],
  },
];

export function Modulos() {
  return (
    <section id="modulos" className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Módulos</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Tudo o que o restaurante usa no dia, dentro de um app só
        </h2>

        <div className="mt-10 space-y-10">
          {grupos.map((g) => (
            <div key={g.grupo}>
              <h3 className="text-lg font-bold text-muted-foreground">{g.grupo}</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-3">
                {g.itens.map((i) => (
                  <div
                    key={i.titulo}
                    className="rounded-3xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-accent/25 text-foreground">
                      <i.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 flex flex-wrap items-center gap-2 text-lg font-bold">
                      {i.titulo}
                      {"emBreve" in i && i.emBreve ? (
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          em preparação
                        </span>
                      ) : null}
                    </h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{i.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
