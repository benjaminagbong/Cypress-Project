describe('Envlor Selfconfig automation phase 1', () => {
  // Use environment variables for sensitive data
  const serverId = Cypress.env('SERVER_ID') || 'uoej97g5';
  const serverDomain = Cypress.env('SERVER_DOMAIN') || '@uoej97g5.mailosaur.net';
  const emailAddress = 'benjamina' + serverDomain; // dynamic email address
  const password = Cypress.env('PASSWORD') || 'Testpass';
  let accessCode = "";

  beforeEach(() => {
      cy.viewport(1050, 680);
  });

  const login = () => {
      cy.visit('https://envlor-io.brightspotapps.com/');
      cy.get("input[placeholder='Email Address']").type(emailAddress);
      cy.get("input[placeholder='Password']").type(password);
      cy.get("input[value='Login']").click();
      cy.wait(10000)
  };

  const getAccessCodeFromEmail = () => {
    // Wait for the email (retry up to 60 seconds)
    cy.mailosaurGetMessage(serverId, { sentTo: emailAddress }, { timeout: 60000 })
        .then(email => {
            // Log the entire email HTML to debug if the selector is incorrect
            cy.log(email.html.body);

            // Render the email body in the document to visually inspect it
            cy.document({ log: false }).invoke('write', email.html.body);

            // Extract the access code from the email
            cy.get('div > :nth-child(6)') // Adjust this selector based on the email structure
                .invoke('text')
                .then(accessCodeText => {
                    // Ensure the accessCode is not empty
                    accessCode = accessCodeText ? accessCodeText.trim() : "";

                    // Log the access code for debugging
                    cy.log('Access Code:', accessCode);

                    // Check if accessCode was properly captured
                    if (accessCode === "") {
                        throw new Error("Access code is empty");
                    }

                    // Proceed to type the access code
                    submitTwoFactorAuth(); // Move to the next step
                });
        });
};

const submitTwoFactorAuth = () => {
    cy.visit("https://envlor-io-dev.brightspotapps.com/index/two_factor_auth?redirect_url=");

    // Ensure the access code input field is visible and type the access code
    cy.get('.form-control', { timeout: 30000 })
        .should('be.visible')
        .type(accessCode) // Type the access code
        .should('have.value', accessCode); // Verify that the access code was entered

    // Click the Verify button
    cy.get("input[value='Verify']").click();

    // Ensure the user is redirected to the dashboard
    cy.url().should('include', '/admin');
};



  const createEvent = () => {
      // Navigate to event creation
      cy.get(':nth-child(4) > [href="javascript:;"] > span').click();
      cy.get('.open > .acc-menu > :nth-child(2) > a').click();
      
      // Fill in event details with dynamic waits
      cy.get('#name').should('be.visible').type('Automation Event Test 2024');
      cy.get('#title').should('be.visible').type('Automation Event Test 2024');
      cy.get('#selected_event_platform_registration_website').check();
      cy.get('#selected_event_platform_event_app').check();
      cy.get('#attendee_authentication_types_access_code').check();
      cy.get('#registration_type_open').check();
      cy.get('#has_guest_options_yes').check();
      cy.get('#can_change_registered_to_rsvp_no_registration_status_yes').check();
      cy.get('#can_change_rsvp_no_to_registered_registration_status_no').check();
      cy.get('#can_update_record_when_registration_status_is_registered_yes').check();
      cy.get('#has_custom_url_yes').check();
      cy.get('.col-md-9.for_custom_domain_yes > #event_url')
          .should('be.visible')
          .type('https://easy-as-pie-self-config-AutoTest.brightspotapps.com');
      
      // Verify domain config
      cy.get('.verify-domain-config').click();
      cy.get('#message-alert-modal', {timeout: 10000}).within(() => {
          cy.contains('OK').click();
      });

      // Additional Event Info
      cy.get('#administrator_email').type('benjamina@pentapedal.com');
      cy.get('#city').type('Lagos');
      cy.get('#state').type('Lagos');
      cy.get('#address').type('#4 Bank Anthony way, ikoyi, Lagos');
      cy.get('#start').type('2024-09-24');
      cy.get('#end').type('2024-10-15');
      cy.get('#start_time').click().type('12:00 AM');
      cy.get('#end_time').click().type('11:59 PM');
      cy.get('#calendar_title').type('The Automation Event Test');
      cy.get('#calendar_description').type('The Automation Event Test invites you to its first exhibition');
      cy.get('#location').type('Eko Hotel Lagos, Nigeria');
      cy.get('.event_registration_date_flex_row > :nth-child(1) > .col-md-12 > .form-control').type('2024-08-29')
      cy.get('#event_website_close_date').type('2024-10-15')
      cy.get('#registration_launch_date').type('2024-09-24')
      cy.get('#registration_close_date').type('2024-10-10')
      cy.get('#will_add_team_members_no').check()
      cy.get('#public_event_thumbnail').click()
     //   cy.get('#public_event_thumbnail') // Use the correct selector for the upload element
        .selectFile('cypress/fixtures/logo.png', { force: true }); // Make sure 'logo.png' is in the fixtures folder
        // Wait for the image preview to render 
        cy.wait(5000)
        // cy.get('.cropit-preview-image') // Adjust the selector to match your preview image element
        //     .should('be.visible') // Ensure the preview image is visible
        //     .and(($img) => {
        //     // Optionally, check if the src attribute of the img tag contains the image file name
        //     expect($img[0].src).to.contain('logo.png'); // Check if the preview contains the correct image
        //  });
      // Submit the event
      cy.get('.step-1 > .panel-footer > .row > .col-sm-12 > .btn-primary').click();
  };

  it('Login, Verify the Dashboard, and Create an Event', () => {
      login();
      getAccessCodeFromEmail();
      //submitTwoFactorAuth();
      createEvent();
  });
});
