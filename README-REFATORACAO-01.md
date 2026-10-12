# Refatoração 01 — Strategy

## Padrão aplicado
Strategy (GoF), para encapsular a regra de classificação dos níveis dos reservatórios.

## Problema tratado
Sem uma regra centralizada, a classificação por faixa tende a ser repetida nas telas e torna mudanças de limites mais propensas a inconsistências.

## Implementação
- `src/js/level-strategy.js`: encapsula as faixas e retorna código, rótulo e cor.
- `src/home.html`: usa a estratégia para inicializar cada reservatório e exibir o status correspondente.
- Os níveis ausentes na URL assumem 50%; valores fornecidos são limitados ao intervalo de 0 a 100.

## Faixas da estratégia padrão
- Crítico: abaixo de 30% ou a partir de 90%.
- Atenção: de 30% a 59% ou de 80% a 89%.
- Seguro: de 60% a 79%.

## Como executar
Na pasta raiz do repositório:

```bash
cd src
python3 -m http.server 8000
```

Abra `http://localhost:8000/home.html?tank1=20&tank2=55&tank3=72&tank4=95`.

A página carrega jQuery de CDN, então precisa de internet. A leitura é demonstrativa por parâmetros da URL, não é telemetria real.

## Validação manual
1. Abra a URL de exemplo acima.
2. Confirme os quatro tanques e os status: Crítico, Atenção, Seguro e Crítico.
3. Teste `tank1=65` e confirme que o status é Seguro.
4. Teste `tank1=120`; a entrada é limitada a 100%.

## Limite desta etapa
Esta entrega aplica somente Strategy. Os demais padrões devem entrar em commits posteriores, cada um com seu próprio problema e justificativa.
