
    //const serverId = 'ivo9els1';
    //const testEmail = 'agbongb91+413@ivo9els1.mailosaur.net' // static email address must be change on each execution
    const testEmail = 'benjamina+23@phreetech.com' // static email address must be change on each execution
    let emailConfirmation


describe("ESPN Picnic AUtomation", ()=>{

    
     function EmployeeRegistration (){

        cy.visit("https://espnthepicnic.brightspotapps.com/")

        cy.get(':nth-child(1) > .radio_label').click()
        
        cy.get(':nth-child(2) > .radio_label').should('not.be.checked')

        cy.get('#email').should("be.visible")

        cy.get('#email').type(testEmail)

        cy.get('.text-left > .rsvp_btn').click()

        cy.get("input#first_name").should("be.visible")
        cy.get("input#first_name").type('Romio')

        cy.get("input#last_name").should("be.visible")
        cy.get("input#last_name").type('Lambert')

        cy.get("input#pernr").should("be.visible")
        cy.get("input#pernr").type('98004') // Static data must be change on each excution

        cy.get("#department")
        .select("FINANCE, STRATEGY & RESEARCH (Aguiar)")
        .should("have.value", "FINANCE, STRATEGY & RESEARCH (Aguiar)")
        
        cy.get("input#office_location_bristol").check({force:true}).should("be.checked")
        cy.get("input#office_location_nyc").should("not.be.checked")
            
        cy.get("input#bringing_dependents_yes").check({force:true}).should("be.checked")
        cy.get("input#bringing_dependents_no").should("not.be.checked")
            
            cy.get('.dependant_label > :nth-child(1) > input').check({force:true}).should("be.checked");
            cy.get('#dependent_0_first_name').type('Summer')
            cy.get('#dependent_0_last_name').type('Olson')
            cy.get('#dependent_0_age').type('25')

            cy.get('.add_dependent > img').click({force:true})
            cy.get('#dependent_1_first_name').type('Uncle')
            cy.get('#dependent_1_last_name').type('Rice')
            cy.get('#dependent_1_age').type('20')

        cy.get("input#bringing_guests_yes").check({force:true}).should("be.checked")
        cy.get("input#bringing_guests_no").should("not.be.checked")

            cy.get('#guest_first_name').type('Marcus')
            cy.get('#guest_last_name').type('Adams')
            cy.get('#guest_email').type('bj01071995+45@gmail.com')

        {/*cy.get("input#bus_from_nyc_no").should("not.be.checked")
        cy.get("input#bus_from_nyc_yes").check().should("be.checked")
        
        cy.get("input#bus_to_nyc_no").should("not.be.checked")
        cy.get("input#bus_to_nyc_yes").check().should("be.checked")*/}

        cy.get("input[name='travel_expense_not_reimbursable']").check({force: true}).should("be.checked")
        cy.get("input[name='active_employee']").check({force: true}).should("be.checked")
        cy.get("input[name='valid_id_card']").check({force: true}).should("be.checked")
        cy.get("input[name='guest_picture']").check({force: true}).should("be.checked")

        cy.get("input#submit_desk").click()

        //cy.get("li.agenda").click()

        cy.wait(2000)

       // cy.get("li.faq").click()

        //cy.get("div.faq_item").should('have.length',12)//incomplete code coming back to it later

        //cy.get("li.menu_item").click()

        cy.wait(5000)

        {/*cy.mailosaurGetMessage(serverId, {
            sentTo: testEmail
        }).then(email => {
            expect(email.subject).to.equal('ESPN the Picnic 2023: Registration Confirmation');
            cy.document({ log: false }).invoke({ log: false }, 'write', email.html?.body);

           emailConfirmation = email.html.links[0].href
           cy.visit(emailConfirmation)

        }) */}

               
    }

    function RetireeRegistration (){
        cy.visit("https://espnthepicnic.brightspotapps.com/")

        cy.get("input#retiree").check({force:true}).should("be.checked")
        cy.get('#retiree_code').type('PicnicForever') // Static data must be change on each excution
        cy.get('.retiree-code-field > .rsvp_btn').click()
        cy.get('#email').type('bj01071995+62@gmail.com')
        cy.get('.text-left > .rsvp_btn').click()

        cy.get('#first_name').type('Aaron')
        cy.get('#last_name').type('Smith')
        
        cy.get('input#bringing_guests_yes').check({force:true}).should("be.checked")

               cy.get('#guest_first_name').type('Malcolm')
               cy.get('#guest_last_name').type('Blues')
               cy.get('#guest_email').type('bj01071995+63@gmail.com')

        cy.get('#submit_desk').click();

    }
   it("Validate Employee Registration positive flow", ()=>{
        EmployeeRegistration()
   })

    it("Validate Retiree Registration positive flow", ()=>{
        RetireeRegistration()
    })


})