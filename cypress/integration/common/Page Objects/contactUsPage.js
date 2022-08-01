
export const contactUs = {

    getHeaderContactUs: ()=> cy.get('#nav-contact > a'),
    getForeNameField:()=> cy.get('[id="forename"]'),
    getEmailField:()=>  cy.get('[id="email"]'),
    getMessageField:() =>  cy.get('[id="message"]'),
    getSubmitBtn:() =>  cy.get('.btn-contact'),


}


