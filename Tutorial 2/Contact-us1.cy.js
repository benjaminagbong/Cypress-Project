/// <reference types ="Cypress"/>

describe('Automated test tutorial ', () => {
    it.only('First test senero - Visit and click successful submission', () => {

       // cy.visit("https://webdriveruniversity.com/")
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
       // cy.get('#contact-us > .thumbnail > .section-title').click()
       cy.get('[name="first_name"]').type("Jeo")
       cy.get('[name="last_name"]').type("Palma")

       cy.get('[name="email"]').type("bj01071995@gmail.com")

       cy.get('textarea.feedback-input').type("A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")

       cy.get('[type="submit"]').click()

       cy.wait(1000)
       cy.get("div[id='contact_reply'] h1").should('have.text', 'Thank You for your Message!')

       cy.wait(2000)
       
    });

    it('Second test senero - Negative test - Visit and click', () => {

        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us > .thumbnail > .section-title').click()
        cy.get('[name="first_name"]').type("Tom")
        cy.get('[name="last_name"]').type("Imako")
  
        cy.get('textarea.feedback-input').type("A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")
 
        cy.get('[type="submit"]').click()
        
    });
});