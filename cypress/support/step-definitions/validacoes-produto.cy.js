import { And, Then } from "cypress-cucumber-preprocessor/steps";

And("acessar a categoria women", () => {
  cy.acessarCetegoriaWoman();
});

And("acesso o produto {string}", (produto) => {
  cypress.env("produto", produto);
  cy.clicarProduto(produto);
});

And("valido a quantidade de produtos em tela", () => {
  cy.validarQtdProdutos();
});

Then("realizo as validações do produto", () => {
  cy.validarProduto();
});
