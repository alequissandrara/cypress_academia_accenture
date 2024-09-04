import { And, Then } from "cypress-cucumber-preprocessor/steps";

And("acesso a categoria Women", () => {
  cy.get('a[title="Women"]').click();
});

And("valido a quantidade de produtos em tela", () => {
  cy.validarQtdProdutos();
});

And("acesso o produto {string}", (produto) => {
  Cypress.env("produto", produto);
  cy.clicarProduto(produto);
});

Then("realizo as validações do produto", () => {
  cy.validarProduto();
});
