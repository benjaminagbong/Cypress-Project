
describe ("assertion demo", ()=>{ 

    it("implicit assertion", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should and

       // cy.url().should('include', 'orangehrmlive.com')
       // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('contain', 'orangehrm')

      /*  cy.url().should('include', 'orangehrmlive.com')
       .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .should('contain', 'orangehrm') */

       cy.url().should('include', 'orangehrmlive.com')
       .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain', 'orangehrm')
       .and('not.contain', 'Greenhrmlive') // testing the url 

       //cy.title().should('include', 'orange')
       cy.title().should('include', 'Orange') // Title present or correct
       .and('eq', "OrangeHRM")
       .and('contain', "HRM")

       cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
       .and('exist') // logo exist

       cy.get("input[placeholder='Username']").type("Admin") // provide value into input field
       cy.get("input[placeholder='Username']").should('have.value', 'Admin') // Check if value is correct

       
    })

    it("explicit assertion", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")

        cy.get("input[placeholder='Password']").type("admin123")

        cy.get("button[type='submit']").click()

        let expName="Paul Collings";

        cy.get(".oxd-userdropdown-name").then((x)=>{

            let actName=x.text()

            //BDD style

            expect(actName).to.equal(expName)

            expect(actName).to.not.equal(expName)

            //TDD style

            assert.equal(actName,expName)
            assert.notEqual(actName,expName)



                })


    })

})

