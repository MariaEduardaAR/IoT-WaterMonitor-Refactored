# Water Monitoring System — Refatoração com Padrões de Projeto

## 1. Descrição do projeto

O **Water Monitoring System** é um sistema de monitoramento visual do nível de água em reservatórios. A aplicação apresenta quatro reservatórios e permite visualizar seus níveis em porcentagem, classificando as condições como **Crítico**, **Atenção** ou **Seguro**, de acordo com o nível registrado.

Este projeto consiste na refatoração do sistema original, aplicando padrões de projeto para melhorar a organização, a separação de responsabilidades, a manutenção e a possibilidade de evolução do código.

### Padrões de projeto aplicados

- **Strategy:** encapsula a lógica de classificação dos níveis de água.
- **Factory:** centraliza a criação e a configuração dos reservatórios.
- **Observer:** permite notificar componentes interessados quando ocorre um evento de monitoramento.
- **Facade:** oferece uma interface simplificada para coordenar as operações de monitoramento.

## 2. Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Python 3, para executar um servidor HTTP local

## 3. Integrantes do projeto

- **Eduarda Rodrigues** — GitHub: [@MariaEduardaAR](https://github.com/MariaEduardaAR)
- **Nathalia Lima** — GitHub: [@nathalia0902](https://github.com/nathalia0902)

## 4. Pré-requisitos

Antes de executar a aplicação, é necessário ter:

- Git instalado, caso deseje clonar o repositório.
- Python 3 instalado para iniciar um servidor HTTP local.
- Um navegador atualizado.

## 5. Instruções para execução

### 5.1. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/MariaEduardaAR/IoT-WaterMonitor-Refactored.git
```

Entre na pasta do projeto:

```bash
cd IoT-WaterMonitor-Refactored
```

### 5.2. Iniciar o servidor local

Acesse a pasta `src`:

```bash
cd src
```

Inicie o servidor HTTP com Python:

```bash
python3 -m http.server 8000
```

No Windows, caso o comando anterior não funcione, tente:

```bash
python -m http.server 8000
```

### 5.3. Acessar a aplicação

Abra o navegador e acesse:

http://localhost:8000/home.html

### 5.4. Testar diferentes níveis dos reservatórios

Para visualizar valores específicos, utilize os parâmetros na URL:

http://localhost:8000/home.html?tank1=20&tank2=55&tank3=72&tank4=95

Nesse exemplo, os níveis configurados são:

- Reservatório 1: 20%
- Reservatório 2: 55%
- Reservatório 3: 72%
- Reservatório 4: 95%

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

## 6. Estrutura do projeto

```text
IoT-WaterMonitor-Refactored/
├── docs/
├── screenshots/
├── src/
│   ├── js/
│   │   ├── level-strategy.js
│   │   ├── tank-factory.js
│   │   ├── monitoring-observer.js
│   │   └── monitoring-facade.js
│   └── home.html
├── README.md
└── README-refatorado.md
```

## 7. Repositório

Código-fonte: https://github.com/MariaEduardaAR/IoT-WaterMonitor-Refactored

## 8. Objetivo da refatoração

A refatoração busca tornar o código mais modular e organizado, utilizando padrões de projeto conhecidos para separar responsabilidades e facilitar futuras alterações e a manutenção do sistema.
