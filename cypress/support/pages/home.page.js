const BTN_ACESSA_LOGIN = ".login";
const BTN_CONTA = ".account";
const BTN_WOMAN = 'a[title="Woman"]';

Cypress.Commands.add("acessarLogin", () => {
  cy.get(BTN_ACESSA_LOGIN).click();
});

Cypress.Commands.add("validarLogin", () => {
  cy.get(BTN_CONTA).should("be.visible");
});

Cypress.Commands.add("acessarCetegoriaWoman", () => {
  cy.get(BTN_WOMAN).click();
});
