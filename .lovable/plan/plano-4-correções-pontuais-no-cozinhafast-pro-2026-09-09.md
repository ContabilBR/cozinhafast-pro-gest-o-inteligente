# Plano: 4 correções pontuais no CozinhaFast Pro

Aplicar exatamente os 4 pontos abaixo, sem alterar mais nada.

## 1. `src/components/landing/faq.tsx`
Trocar o campo `a` da pergunta "E se cair a internet no meio do serviço?" por:

> O CozinhaFast Pro funciona conectado à internet, como praticamente todo sistema de gestão hoje em dia. Para evitar imprevistos, recomendamos manter uma internet de backup disponível no restaurante (por exemplo, um chip de celular), do mesmo jeito que qualquer negócio já faz para a maquininha de cartão.

## 2. `src/components/landing/diferenciais.tsx`
Trocar o texto do ponto "Funciona no celular que a equipe já tem" por:

> Não exige comprar equipamento novo para começar. Se o garçom tem um celular Android ou iPhone e o restaurante tem wi-fi, dá para rodar.

## 3. `src/components/landing/hero.tsx`
Trocar "Pedido na cozinha em 3 segundos" por "Pedido na cozinha em segundos".

## 4. `src/styles.css` (bloco `:root` apenas)
- `--primary: oklch(0.604 0.192 40.5);` → `--primary: oklch(0.636 0.196 38.1);`
- `--primary-dark: oklch(0.516 0.175 39.5);` → `--primary-dark: oklch(0.557 0.176 37.8);`

## Verificação
Após aplicar, mostrar o trecho final de cada um dos 4 arquivos.
