# Treinamento Cypress - Automação de Login
![image](https://github.com/user-attachments/assets/13688039-49ce-4061-8f4e-d3f30a18b43a)

Este repositório tem como objetivo o treinamento em automação de testes utilizando Cypress para a página base: [http://www.automationpractice.pl/](http://www.automationpractice.pl/). Este treinamento faz parte do programa de QA na academia da Accenture.

## Objetivo

O principal objetivo deste repositório é fornecer um exemplo prático de como utilizar o Cypress para automatizar o processo de login em uma aplicação web. O foco é desenvolver habilidades e práticas recomendadas para automação de testes em ambientes de QA.

## Estrutura do Repositório

- **cypress/**: Contém a configuração e os testes automatizados com Cypress.
  - **support/**: Contém arquivos de suporte e configurações globais do Cypress.
  - **integration/**: Contém os testes automatizados.
  - **fixtures/**: Contém dados de teste e outros arquivos de suporte.
  
- **cypress.json**: Arquivo de configuração do Cypress.
- **package.json**: Gerencia as dependências do projeto e scripts de automação.
- **README.md**: Este arquivo.

## Como Usar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/alequissandrara/cypress_academia_accenture.git
   ```

2. **Instale as Dependências**

   Navegue até o diretório do projeto e execute:

   ```bash
   npm install
   ```

3. **Execute os Testes**

   Para rodar os testes, execute:

   ```bash
   npx cypress open
   ```

   Isso abrirá o Cypress Test Runner, onde você pode visualizar e executar os testes.

## Testes Automatizados

Os testes automatizados foram implementados para validar o processo de login na página base. Eles incluem:

- Validação de campos obrigatórios.
- Teste de entrada com dados válidos e inválidos.
- Verificação de mensagens de erro e sucesso.

