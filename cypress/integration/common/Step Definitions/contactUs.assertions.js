import { Then } from "cypress-cucumber-preprocessor/steps";

Then("Contact Us Page should contain the error message {string}", (errorMessage) => {
    cy.get('.form-horizontal').contains(new RegExp(errorMessage, "i"));
  });

  Then("I see the success alert of contact form submission as {string}", (question) => {
    cy.get('.alert').contains(new RegExp(question, "i"));
  });