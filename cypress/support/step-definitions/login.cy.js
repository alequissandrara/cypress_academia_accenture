import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("que o acesso o portal My Shop", () => {
  cy.visit("/");
});

When("realizo login no portal", () => {
  cy.acessarLogin();
  cy.realizarLogin();
});

Then("valido o acesso a home", () => {});
