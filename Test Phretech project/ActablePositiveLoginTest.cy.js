
const apiKey = 'inq7jUn27B67EPddcfhDSBglW5pdVVMH';
const serverId = Cypress.env('SERVER_ID') || 'c1pgduc3';
//const emailAddress = `test-${Date.now()}@${serverId}.mailosaur.net`;


describe('Actable Positive Sign up and Login Test with Valid data', ()=> {
    // Use environment variables for sensitive data    
    const serverDomain = Cypress.env('SERVER_DOMAIN') || '@c1pgduc3.mailosaur.net';
    const emailAddress = 'MercyD' + serverDomain;
    const password = Cypress.env('PASSWORD') || 'TestPass@1'
    const confirmpassword =  'TestPass@1'

    const fileName = 'benAI.png';     
    

    beforeEach(() => {
      cy.viewport(1500, 800);
   });
        const signUpNewUser = ()=>{ 

            cy.visit('https://actable.phreetechlabs.com/')
                cy.wait(10000)

            cy.get(':nth-child(2) > :nth-child(3) > .button-primary').click()

            cy.get(':nth-child(1) > .form-control').type("Mercy")
            cy.get('.auth_form > :nth-child(2) > .form-control').type("Daniel")
            cy.get(':nth-child(3) > .form-control').type("MercyD")
            cy.get(':nth-child(4) > .form-control').type(emailAddress)
            cy.get(':nth-child(5) > .form-password > .form-control').type(password)
            cy.get(':nth-child(6) > .form-password > .form-control').type(confirmpassword)
            cy.get('.form-check-input').check().should('be.checked')
            
            cy.get(':nth-child(8) > .button-primary').click()

                          
            cy.log('Waiting for email...');
             
                cy.task('getVerificationLink', { email: emailAddress, serverId, apiKey }).then(link => {
                    expect(link).to.include('https://');
                     cy.visit(link);
                  });

                          
        

        }
       const login = ()=>{  
            cy.get("button[class='button-primary w-100']").click()         
           // cy.get("button[class='button-outline']").click()
            cy.get("input[placeholder='name@example.com']").type(emailAddress)
            cy.get(".form-password").type(password)
            cy.get("button[type='submit']").click();

        };

        const dashboard = () =>{
            cy.get('.btn-group > .btn').click()
            cy.get('.btn-group > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
            cy.get('.desktop_edit_profile').click()

            cy.get('.edit_profile_img').attachFile('benAI.png', {force: true});              
            

            cy.fixture(fileName, 'base64').then(fileBase64 => {
                cy.get('#file-input').then($input => {
                const blob = Cypress.Blob.base64StringToBlob(fileBase64, 'image/png');
                const file = new File([blob], fileName, { type: 'image/png' });
                const dt = new DataTransfer();
                dt.items.add(file);

                const input = $input[0];
                input.files = dt.files;

                input.dispatchEvent(new Event('change', { bubbles: true }));
                });
            });

            cy.get('img.avatar')
                .should('have.attr', 'src')
                .and('not.include', 'placehold.co');

            cy.get("input[type='date']").type('1996-07-01')
            cy.get(':nth-child(3) > :nth-child(2) > .form-select').select("Male")
            cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('09033678900')
            cy.get(':nth-child(5) > .col-12 > .form-control').type("#4 Bank Anthony way, ikoyi, Lagos")
            cy.get(':nth-child(1) > .form-select').select("Nigeria")
            cy.wait(1000)
            cy.get(':nth-child(6) > :nth-child(2) > .form-select').select("Lagos")
            cy.get(':nth-child(7) > .col-12 > .form-control')
            .type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")

            cy.get('.subscription-details-card-action-btn').click();

            cy.wait(30000)
            cy.get('.btn-group > .btn > .ms-2').click()
            cy.get('.btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
            cy.wait(30000)
            cy.get('.btn-group > .btn > .ms-2').click()
            cy.get('.btn-group > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
                        


        }

            
    it('SignUpNew User, Login and Dashboard, Verify that the a new User can sign up, login and edit their profile with a valid user details', ()=>{
        signUpNewUser();
        login();
        dashboard();
    }) 
})   