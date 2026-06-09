# Automação de Testes com Playwright

Projeto desenvolvido para automatizar cenários de teste utilizando **Playwright** com **JavaScript** e o padrão **Page Object Model (POM)**.

## Sobre o Projeto

Este projeto contém testes automatizados para validar funcionalidades de uma aplicação web, utilizando boas práticas de automação para garantir organização, reutilização de código e facilidade de manutenção.

## Tecnologias Utilizadas

* JavaScript
* Node.js
* Playwright
* Page Object Model (POM)
* Git e GitHub

## 📂 Estrutura do Projeto

```text
automacao_playwright
│
├── pages/
│   ├── CadastroPage.js
│   └── LoginPage.js
│
├── tests/
│   ├── cadastro.spec.js
│   └── login.spec.js
│
├── fixtures/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

* Node.js
* Git

Verifique as instalações:

```bash
node -v
git --version
```

##  Clonando o Projeto

```bash
git clone https://github.com/NataliaBento/AutomacaoSentimentoIA.git
```

Acesse a pasta do projeto:

```bash
cd AutomacaoSentimentoIA
```

##  Instalando as Dependências

```bash
npm install
```

##  Instalando os Navegadores do Playwright

Caso seja a primeira execução:

```bash
npx playwright install
```

## ▶Executando os Testes

### Executar todos os testes

```bash
npx playwright test
```

### Executar apenas o teste de Login

```bash
npx playwright test login.spec.js
```

### Executar apenas o teste de Cadastro

```bash
npx playwright test cadastro.spec.js
```

## 👀 Executar em Modo Visual

Para acompanhar a execução dos testes no navegador:

```bash
npx playwright test --headed
```

##  Executar em Modo Debug

```bash
npx playwright test --debug
```

##  Gerar e Visualizar Relatório

Após a execução dos testes:

```bash
npx playwright show-report
```

O Playwright abrirá automaticamente um relatório HTML contendo:

* Status dos testes
* Tempo de execução
* Evidências de falhas
* Logs de execução

## Boas Práticas Aplicadas

* Separação de responsabilidades com Page Object Model (POM)
* Código reutilizável
* Estrutura organizada
* Fácil manutenção e escalabilidade
* Automação baseada em boas práticas de QA

##  Autora

**Natalia Bento**

Estudante de Análise e Desenvolvimento de Sistemas, com foco em Qualidade de Software, Automação de Testes e Desenvolvimento Web.

GitHub: https://github.com/NataliaBento
