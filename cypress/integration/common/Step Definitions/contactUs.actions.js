import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { contactUs } from "../Page Objects/contactUsPage";


//Contact Us details 
var foreName = "Rush";
 var Email = "testuser_rushsandy@yopmail.com Engineer";
 var Message = "this is a test message";



When("I go to Contact Us Page", () => {
  contactUs.getHeaderContactUs().click();
  });

When("I submit Empty Required Fields", () => {
    contactUs.getForeNameField().clear();
    contactUs.getEmailField().clear();
    contactUs.getMessageField().clear();
    contactUs.getSubmitBtn().click();
    cy.wait(2000);
  });

  When("I submit valid details on Required Fields", () => {
    contactUs.getForeNameField().type(foreName);
    contactUs.getEmailField().type(Email);
    contactUs.getMessageField().type(Message);
    contactUs.getSubmitBtn().click();
    cy.wait(10000);
    
  });


