# Refatoração 02 — Factory

## Pré-requisito
Esta etapa parte da versão que já contém Strategy. Não substitua o projeto pela versão original.

## Problema tratado
A tela precisava conhecer detalhes de cada reservatório (seletor, identificador de status, leitura dos parâmetros da URL e valor padrão). Isso mistura a configuração dos objetos com a lógica de apresentação.

## Padrão aplicado
Factory: `WaterTankFactory.create(numero, busca)` centraliza a criação da configuração usada pela interface. O Strategy continua responsável exclusivamente pela classificação do nível.

## Arquivos alterados
- `src/js/tank-factory.js` (novo): cria uma configuração consistente por reservatório, interpreta `tank1` a `tank4` e limita os níveis a 0–100.
- `src/home.html`: passa a usar a Factory e mantém o Strategy para classificar os níveis.

## Como executar
Na raiz do repositório: `cd src && python3 -m http.server 8000`

Abra `http://localhost:8000/home.html?tank1=20&tank2=55&tank3=72&tank4=95`. Os status esperados são Crítico, Atenção, Seguro e Crítico. Sem parâmetros na URL, todos começam em 50%, o que é o valor demonstrativo padrão.

## Validação manual
1. Abra a URL com os quatro parâmetros acima.
2. Confira os valores e os status apresentados.
3. Abra `http://localhost:8000/home.html?tank1=120&tank2=-5&tank3=abc&tank4=65`; os níveis devem ser limitados ou assumir o padrão (100, 0, 50 e 65).

## Relação problema → padrão → resultado
- Problema: a interface concentra detalhes de criação/configuração dos reservatórios.
- Padrão: Factory.
- Resultado: a criação da configuração fica centralizada e pode ser reutilizada sem duplicar parsing e seletores na tela. Strategy continua separando a regra de classificação.
