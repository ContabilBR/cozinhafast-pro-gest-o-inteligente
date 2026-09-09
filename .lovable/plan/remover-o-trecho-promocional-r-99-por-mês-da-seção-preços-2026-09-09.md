# Remover o trecho promocional "R$99 por mês" da seção Preços

## Objetivo
Apagar somente o trecho mostrado na imagem enviada: o selo "PLANOS", o título "R$99 por mês, por tempo limitado" e o parágrafo explicativo logo abaixo. O card de plano (com a lista do que inclui, o preço e os botões de CTA) permanece intacto. Nenhuma outra seção é alterada.

## Mudança
**`src/components/landing/precos.tsx`** — remover as três linhas seguintes do bloco interno (mantendo o `<section id="precos">` e o card):

```tsx
<p className="text-sm font-bold uppercase tracking-widest text-primary">Planos</p>
<h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
  R$99 por mês, por tempo limitado
</h2>
<p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
  O valor cheio dos planos vai de R$179 a R$229 por mês, conforme os módulos que o seu
  restaurante usa. Enquanto o CozinhaFast Pro está nessa fase inicial, quem entrar agora
  garante um preço promocional — sem cartão de crédito para começar a conversa.
</p>
```

Após a remoção, o `<div>` central passa a abrir direto no card de plano. O `mt-10` do card já dá o respiro necessário em relação ao topo da seção.

## Resultado
A seção Preços mostra apenas o card "Plano CozinhaFast Pro" com a lista do que inclui e os botões de demonstração/WhatsApp. A ordem da página (Diferenciais → Preços → FAQ) e todos os demais componentes continuam iguais.
