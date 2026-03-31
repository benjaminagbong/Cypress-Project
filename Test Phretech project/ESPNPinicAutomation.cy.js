
    const serverId = 'ivo9els1';
    //const testEmail = 'agbongb91+413@ivo9els1.mailosaur.net' // static email address must be change on each execution
    const testEmail = 'agbongb91+413@gmail.com'
    let emailConfirmation


describe("ESPN Picnic AUtomation", ()=>{

    
      it.only("Home page 4", ()=>{

        cy.visit("https://espnthepicnic.brightspotapps.com/")

        cy.get(':nth-child(1) > .radio_label').click()
        
        cy.get(':nth-child(2) > .radio_label').should('not.be.checked')

        cy.get('#email').should("be.visible")

        cy.get('#email').type(testEmail)

        cy.get('.text-left > .rsvp_btn').click()

        cy.get("input#first_name").should("be.visible")
        cy.get("input#first_name").type('OGrady')

        cy.get("input#last_name").should("be.visible")
        cy.get("input#last_name").type('John')

        cy.get("input#pernr").should("be.visible")
        cy.get("input#pernr").type('98004') // Static data must be change on each excution

        cy.get("#department")
        .select("CONTENT (Magnus)")
        .should("have.value", "CONTENT (Magnus)")
        
        cy.get("input#office_location_bristol").check().should("be.checked")
        cy.get("input#office_location_nyc").should("not.be.checked")

        cy.get("input#bringing_dependents_yes").should("not.be.checked")
        cy.get("input#bringing_dependents_no").check().should("be.checked")

        cy.get("input#bringing_guests_yes").should("not.be.checked")
        cy.get("input#bringing_guests_no").check().should("be.checked")

        cy.get("input#bus_from_nyc_no").should("not.be.checked")
        cy.get("input#bus_from_nyc_yes").check().should("be.checked")
        
        cy.get("input#bus_to_nyc_no").should("not.be.checked")
        cy.get("input#bus_to_nyc_yes").check().should("be.checked")

        cy.get("input[name='travel_expense_not_reimbursable']").check({force: true}).should("be.checked")
        cy.get("input[name='active_employee']").check({force: true}).should("be.checked")
        cy.get("input[name='valid_id_card']").check({force: true}).should("be.checked")
        cy.get("input[name='guest_picture']").check({force: true}).should("be.checked")

        cy.get("input#submit_desk").click()

        cy.get("li.agenda").click()

        cy.wait(2000)

       // cy.get("li.faq").click()

        //cy.get("div.faq_item").should('have.length',12)//incomplete code coming back to it later

        //cy.get("li.menu_item").click()

        cy.wait(5000)

        cy.mailosaurGetMessage(serverId, {
            sentTo: testEmail
        }).then(email => {
            expect(email.subject).to.equal('ESPN the Picnic 2023: Registration Confirmation');
            cy.document({ log: false }).invoke({ log: false }, 'write', email.html?.body);

           emailConfirmation = email.html.links[0].href
           cy.visit(emailConfirmation)

        })

               
        

    })

    

})