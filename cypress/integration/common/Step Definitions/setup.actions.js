import { When, Then } from "cypress-cucumber-preprocessor/steps";
import details from "../../../properties.json";


//go to home page
When("@setup I Go to Home Page", () => {
  cy.visit(details.homeURL, {
    failOnStatusCode: false,
  });
  cy.wait(3000);
});

