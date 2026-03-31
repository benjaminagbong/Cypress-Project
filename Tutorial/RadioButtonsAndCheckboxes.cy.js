
describe('Check UI Element', ()=>{


    /*it('Checking Radio button', ()=>{

        cy.visit("https://letcode.in/radio")

        // checking buttons visibility
        cy.get('input#yes').should('be.visible')

        cy.get("input#no").should('be.visible')

        //selecting radio buttons

        cy.get("input#yes").check().should("be.checked")
        cy.get("input#no").should("not.be.checked")

        cy.get("input#no").check().should("be.checked")
        cy.get("input#yes").should("not.be.checked")

    })*/

    it('Checking Radio button', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Log the error to the console for easy debugging
            console.error(err);
            // returning false here prevents Cypress from failing the test
            return false;
        });

        cy.visit("https://demoqa.com/automation-practice-form", {retryOnNetworkFailure: true})
        cy.wait(15000)

        // checking buttons visibility
        

       

        


        //selecting radio buttons
      /*  cy.get("input#gender-radio-1").check({force: true}).should("be.checked")//.should('be.visible')
        cy.get("input#gender-radio-2").should("not.be.checked")
        cy.get("input#gender-radio-3").should("not.be.checked")
        //cy.get("input#gender-radio-1").should('be.visible')
        
        cy.get("input#gender-radio-2").check({force: true}).should("be.checked")//.should('be.visible')
        cy.get("input#gender-radio-1").should("not.be.checked")
        cy.get("input#gender-radio-3").should("not.be.checked")
       // cy.get("input#gender-radio-2").should('be.visible')

        cy.get("input#gender-radio-3").check({force: true}).should("be.checked")//.should('be.visible')
        cy.get("input#gender-radio-1").should("not.be.checked")
        cy.get("input#gender-radio-2").should("not.be.checked")
        //cy.get("input#gender-radio-3").should('be.visible')*/

         // checking for visibility of check boxes
         //cy.get("input#hobbies-checkbox-1").should("be.visible")

         //select of check box
         //cy.get("input#hobbies-checkbox-1").check({force: true}).should("be.checked")
         //cy.get("input#hobbies-checkbox-1").uncheck({force: true}).should("not.be.checked")
        
         // selecting and unselect checkbox
         //cy.get("input.custom-control-input[type=checkbox]").check({force: true}).should("be.checked")
         //cy.get("input.custom-control-input[type=checkbox]").uncheck({force: true}).should("not.be.checked")

        // selecting first and last check boxes

        cy.get("input.custom-control-input[type=checkbox]").first().check({force: true}).should("be.checked")
        cy.get("input.custom-control-input[type=checkbox]").last().check({force: true}).should("be.checked")

    })

})