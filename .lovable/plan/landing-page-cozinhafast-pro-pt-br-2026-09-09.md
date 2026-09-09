# Landing page CozinhaFast Pro (pt-BR)

Página única de marketing, mobile-first, construída como narrativa: dor → virada → solução → módulos → prova → preço → objeções → CTA.

## Identidade visual

- Laranja terracota #E8521A (primário), #C4410F (hover/ativo)
- Teal #2DD4BF (destaque), verde #22C55E (status positivo)
- Fundo bege quente #FAF7F4, cards #FFFFFF
- Texto #1A1208, secundário #7A6A5A
- Tipografia sans moderna e calorosa (Plus Jakarta Sans para títulos, DM Sans para texto), cantos bem arredondados, bastante respiro
- Fotografia gerada de comida e ambiente de restaurante brasileiro (nada de "tech startup")

## Seções

1. **Hero** — headline sobre comanda perdida / mesa errada e a promessa oposta; CTAs "Agendar uma demonstração" (link Calendly placeholder) e "Falar no WhatsApp" (wa.me com número placeholder). Foto de salão de restaurante.
2. **O problema** — 4 cenários concretos: comanda de papel que some, pedido errado no rush, insumo que acaba no meio do serviço, fechamento de caixa que prende todo mundo depois do expediente.
3. **A virada** — bloco curto de pergunta/revelação, fundo escuro terracota, sem features.
4. **Como funciona** — 3 passos em storyboard: cliente pede → cozinha recebe na hora → garçom é avisado quando fica pronto.
5. **Módulos** — cards agrupados em temas (Salão, Cozinha, Cliente, Gestão) cobrindo mesas em tempo real, comandas digitais, KDS, cardápio QR Code, autoatendimento, estoque com baixa automática, delivery, Pix, impressão térmica Bluetooth, notificação ao garçom, relatórios. Conformidade fiscal aparece como "preparado para emissão fiscal eletrônica", marcada como em preparação.
6. **Diferenciais** — tudo em um app só; feito para o dia a dia de restaurante brasileiro. Sem citar concorrentes.
7. **Prova social** — placeholder elegante: "em breve, depoimentos de quem já usa". Sem números ou depoimentos inventados.
8. **Preços** — "a partir de R$179/mês", faixa até R$229 conforme os módulos, CTA "Fale com a gente". Sem "grátis" e sem cartão.
9. **FAQ** — 6 perguntas em acordeão: trocar sistema de pagamento, equipamento necessário, queda de internet, tempo de configuração, nota fiscal (resposta cautelosa), suporte.
10. **CTA final** — os dois mesmos botões, com frase que retoma a dor inicial.
11. **Rodapé** — CozinhaFast Pro, contato, e o aviso de produto brasileiro feito para restaurante brasileiro.

## Detalhes técnicos

- Página construída em `src/routes/index.tsx` (substitui o placeholder), com componentes de seção em `src/components/landing/`.
- Tokens de cor adicionados em `src/styles.css` (`@theme inline`, valores em oklch); nada de cor fixa nos componentes.
- Fontes carregadas por `<link>` no `__root.tsx`.
- `head()` na rota `/` com title, meta description, og/twitter, focados em "sistema para restaurante", "comanda digital", "cardápio QR Code restaurante"; JSON-LD SoftwareApplication. Um único H1.
- Constantes de links (`WHATSAPP_URL` com wa.me placeholder, `DEMO_URL` Calendly placeholder) em um arquivo único para troca fácil.
- 4 a 5 imagens geradas de comida/ambiente/uso em restaurante, com alt text e carregamento lazy fora do hero.
- Sem backend, sem animações pesadas — apenas transições leves de hover e fade discreto.
