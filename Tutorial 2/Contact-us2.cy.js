/// <reference types = "Cypress" />
// <reference types = "cypress-xpath" />

describe('test contact us form via Automation Test Store', () => {

    it('Should be able to submit a successful submission via contact us form', () => {

        cy.visit("https://automationteststore.com/");

        //cy.get("//a[text()='Contact Us']").click();//using xpath to locate an elementnpx

       // cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get("a[href$='contact']").click();//improved way to find an <a/> (anchor tag) css element/selector
        cy.get('#ContactUsFrm_first_name').type("Jeo Flyod");
        cy.get('#ContactUsFrm_email').type("bj01071995@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on a bulk purchase?");

        cy.get("button[title='Submit']").click();

        cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > p:nth-child(3)')
        .should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        

        
    });
    
});