import cozinha from "@/assets/cozinha.jpg";
import qrcode from "@/assets/qrcode-mesa.jpg";

const passos = [
  {
    n: "1",
    titulo: "O cliente pede",
    texto:
      "Pelo garçom, no tablet ou pelo próprio celular com QR Code na mesa. O pedido já entra na comanda daquela mesa.",
    img: qrcode,
    alt: "Cliente escaneando o QR Code do cardápio na mesa do restaurante",
  },
  {
    n: "2",
    titulo: "A cozinha recebe na hora",
    texto:
      "O pedido aparece no painel da cozinha em segundos, na ordem certa, com observações. Se preferir, também sai na impressora térmica.",
    img: cozinha,
    alt: "Cozinheiro montando prato na linha da cozinha com painel de pedidos ao lado",
  },
  {
    n: "3",
    titulo: "O garçom é avisado",
    texto:
      "Prato pronto, o garçom recebe a notificação e vai buscar. Ninguém fica olhando para a janela do pass esperando dar sorte.",
    img: null,
    alt: "",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Como funciona</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Três passos. É isso que muda na sua operação.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {passos.map((p) => (
            <div
              key={p.n}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col justify-center gap-3 bg-accent/20 p-6">
                  <div className="rounded-2xl bg-card p-4 shadow-sm">
                    <p className="text-xs text-muted-foreground">Mesa 12</p>
                    <p className="flex items-center gap-2 font-semibold">
                      <span className="size-2.5 rounded-full bg-success" aria-hidden="true" />
                      Filé com fritas está pronto
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Notificação enviada ao garçom responsável.
                  </p>
                </div>
              )}
              <div className="p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {p.n}
                </span>
                <h3 className="mt-4 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
