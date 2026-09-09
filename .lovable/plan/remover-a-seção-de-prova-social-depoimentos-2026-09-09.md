# Remover a seção de prova social (depoimentos)

## Objetivo
Retirar a seção "Quem está usando / Em breve, depoimentos de quem já usa" da landing page, por enquanto. Nenhuma outra seção é alterada.

## Mudanças

1. **`src/routes/index.tsx`**
   - Remover o import `import { ProvaSocial } from "@/components/landing/prova-social";` (linha 13).
   - Remover `<ProvaSocial />` do `<main>` (linha 79).

2. **`src/components/landing/prova-social.tsx`**
   - Excluir o arquivo, já que não será mais usado. (Se preferir mantê-lo para reuso futuro, posso só deixar de importar — padrão a confirmar, mas o padrão é remover para não deixar código órfão.)

## Resultado
A página fica na ordem: Hero → Problema → Virada → ComoFunciona → Modulos → Diferenciais → Precos → Faq → CtaFinal.

## Observações
- O SEO/JSON-LD não referencia depoimentos, então nada precisa mudar em `head()`.
- Não há dependências de `prova-social.tsx` em outros arquivos além de `index.tsx`.
