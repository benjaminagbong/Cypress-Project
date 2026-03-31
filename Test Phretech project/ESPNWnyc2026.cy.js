describe('ESPNWNYC2026 POSITIVE AUTOMATION TEST', () => {

     function NewUserSighIn() {
        cy.visit("https://nyc-espnwsummit.brightspotapps.com/")
        cy.wait(10000)
        cy.get('.slogan-reg-now').click({force:true});
        cy.get('#email').type("bj01051995+6@gmail.com", {force:true});
        cy.get('.btn_h_w').click({force:true});
        
        
    }

    function InPersonDetils() {
        cy.get('#first_name').type("BOLA", {force: true});
        cy.get('#last_name').type("SALAMI", {force: true});
        cy.get('#phone_number').type("+1789098769", {force: true});
        cy.get('#address').type("Off Duke town road", {force: true});
        cy.get('#city').type("CALABAR",{force:true});
        cy.get('#state').type("CROSS RIVER", {force:true});
        cy.get('#zip_code').type("78960", {force:true});
        cy.get('#country').type("NIGERIA",{force:true});
        cy.get('#discount_code').type("DOLLAROFF",{force:true});
        cy.get('#apply_discount_btn').click({force:true});
        cy.get('#credential_first_name').type("BOLA",{force:true});
        cy.get('#credential_last_name').type("SALAMI",{force:true});
        cy.get('#company').type("PHREE MEDIA", {force:true});
        cy.get('#has_dietary_concerns_no').check({force:true});
        cy.get('#connecting_with_attendees_yes').check({force:true});
        cy.wait(10000);
        cy.get('.cropit-image-input').click({force:true})
          .selectFile('cypress/fixtures/BEN40.png', { force: true }); // Make sure 'logo.png' is in the fixtures folder
        // Wait for the image preview to render 
        cy.wait(5000)

        cy.get('#place_order_btn').click({force:true});
        cy.wait(5000)

        
    }

    function WaiverSignIn(){
        cy.get('.first').check({force:true});
        cy.get('.register_button > input').click({force:true});
        cy.wait(5000);
        cy.get('.bootbox-close-button > .close_icon > img').click({force:true});
        cy.wait(5000)

    }

    function AparelSizing(){
        cy.get('#top_size_preference').select('XS',{force:true});
        cy.get('#top_fit_preference').select("Men's Fit",{force:true});
        cy.get('#bottom_size_preference').select('XS', {force:true});
        cy.get('#bottom_fit_preference').select("Men's Fit",{force:true});
        cy.get('#jacket_preference').select('2XS',{force:true});
        cy.get('#jacket_fit_preference').select("Men's Fit",{force:true});

        cy.get('.hidden-xs > .place_order_btn').click({force:true});
        
    }

    function ActivitySelection(){
        cy.get('#yes_morning_workout').check({force:true});
        cy.get('#afternoon_activity_id_67ab637ee400511f0c037d2e').check({force:true})
        
        cy.get('.hidden-xs > .activity_submit_btn').click({force:true})
        cy.wait(5000);
    }

    function ConfirmationAddToCalendar(){ 
        const fileName = 'espnw_summit_nyc_2026.ics';
        const fileName1 = 'espnw_summit_nyc_2026(1).ics';
            // Step 1: Click download button
            cy.get('#outlook_calendar_link > img').click({force:true});
            // Step 2: Verify file exists
            cy.readFile(`cypress/downloads/${fileName}`, { timeout: 15000 })
                .should('exist');//an error occurs here - the downloaded file does not enter the cypress dowload file part how do i fix it
                cy.wait(5000)

            cy.get('#ical_calendar_link > img').click({force:true});
            // Step 2: Verify file exists
            cy.readFile(`cypress/downloads/${fileName1}`, { timeout: 15000 })
                .should('exist');

            

    }

    it('Positive end to end functional test with FullOFF promocode', () => {
        cy.viewport(1200, 680);
        NewUserSighIn();
        InPersonDetils();
        WaiverSignIn();
        AparelSizing();
        ActivitySelection();
        ConfirmationAddToCalendar();
        
    });
    
});