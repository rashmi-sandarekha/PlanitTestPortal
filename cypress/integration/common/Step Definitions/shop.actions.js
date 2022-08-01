import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { contactUs } from "../Page Objects/contactUsPage";


When("I go to Shop Page", () => {
  // contactUs.getTable().click();
    cy.get('#nav-shop > a').click();
  });

When("I click to add teddy bear", () => {
    cy.get('#product-1 > div > p > .btn').click();
  });

  When("I click to add flog", () => {
    cy.get('#product-2 > div > p > .btn').click();
  });

  When("I click to valentine bear", () => {
    cy.get('#product-7 > div > p > .btn').click();
  });

  When("I go to Cart Page", () => {
    cy.get('#nav-cart > a').click();
  });

  When("I enter teddy bear qty as {int}", (qty) => {
    cy.get(':nth-child(1) > :nth-child(3) > .input-mini').clear();
    cy.get(':nth-child(1) > :nth-child(3) > .input-mini').type(qty);
  });

  When("I enter frog qty as {int}", (qty) => {
    cy.get(':nth-child(2) > :nth-child(3) > .input-mini').clear();
    cy.get(':nth-child(2) > :nth-child(3) > .input-mini').type(qty);
  });

  When("I enter valentine bear qty as {int}", (qty) => {
    cy.get(':nth-child(3) > :nth-child(3) > .input-mini').clear();
    cy.get(':nth-child(3) > :nth-child(3) > .input-mini').type(qty);
  });
  
  When("I proceed to checkout", (qty) => {
    cy.get('.btn-checkout').click();
  });



