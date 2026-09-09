import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const perguntas = [
  {
    q: "Preciso trocar meu sistema de pagamento ou minha maquininha?",
    a: "Não. Você pode continuar com a maquininha que já usa e registrar o pagamento na comanda. O Pix é integrado dentro do app, então essa parte você recebe direto, sem intermediário.",
  },
  {
    q: "Funciona no meu celular normal ou preciso comprar equipamento?",
    a: "Funciona nos celulares e tablets que a equipe já tem. Para começar, não é preciso comprar nada. Se quiser comanda impressa, dá para usar uma impressora térmica Bluetooth comum.",
  },
  {
    q: "E se cair a internet no meio do serviço?",
    a: "O aplicativo continua aberto e você segue lançando os pedidos no aparelho. Quando a conexão volta, as informações sincronizam entre os dispositivos. Para o painel de cozinha e o cardápio por QR Code, a rede local precisa estar funcionando.",
  },
  {
    q: "Quanto tempo leva para configurar?",
    a: "Depende do tamanho do cardápio. Com o cardápio e as mesas em mãos, a configuração inicial costuma ser feita no mesmo dia. A gente ajuda a cadastrar tudo junto com você.",
  },
  {
    q: "Emite nota fiscal?",
    a: "Hoje o sistema está preparado para emissão fiscal eletrônica: a estrutura de dados e os cadastros já seguem o que a nota exige. A emissão automática é um módulo em preparação, e a gente avisa quando estiver liberado. Não prometemos o que ainda não está no ar.",
  },
  {
    q: "E o suporte, como funciona?",
    a: "Suporte em português, por WhatsApp, com gente que entende de restaurante. Na fase inicial, você fala direto com quem constrói o produto.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Dúvidas</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          O que todo dono pergunta antes de mudar
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {perguntas.map((p) => (
            <AccordionItem key={p.q} value={p.q}>
              <AccordionTrigger className="text-left text-lg font-bold">{p.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {p.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
