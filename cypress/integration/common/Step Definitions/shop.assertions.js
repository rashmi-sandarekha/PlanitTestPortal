
import { Then } from "cypress-cucumber-preprocessor/steps";

Then("Item {string} Price should be {string}", (itemName, itemPrice) => {

    if (itemName = "Stuffed Frog"){
        cy.get('div.ng-scope').contains(new RegExp(itemPrice, "i"));
    }
    if (itemName = "Fluffy Bunny") {
        cy.get('div.ng-scope').contains(new RegExp(itemPrice, "i"));
        
    } 
    if (itemName = "Valentine Bear") {
        cy.get('div.ng-scope').contains(new RegExp(itemPrice, "i"));
        
    } 
    else {
        cy.wait(100);
        
    }
   
  });

// Verify Sub Total
let subTotal = 0;
Then("subtotal of product {string} qty {string} is", (tableRow, ItemQty) => {

let values = [];  

cy.xpath("//table/tbody/tr["+tableRow+"]")
      .find("td")
      .each(($el, $index) => {
        // console log the values to get an idea of the output
        console.log(values);

           cy.wrap($el)
          .invoke("text")
          .then((text) => {
            if ($index !== 0) values.push(text.trim());
          });
      })
      .then(() => {
        const price = Number(values[0].replace(/\$/g, ''));
        console.log(price);
        expect(values[2]).to.equal("$"+price * ItemQty);
        subTotal = subTotal+(price * ItemQty);
        console.log(subTotal);
      });

});

//Verify Total
Then("Item total should be", () => {
    cy.get('.total').should("contain", subTotal);
});








