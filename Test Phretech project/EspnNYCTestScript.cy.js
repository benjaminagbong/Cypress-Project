describe("ESPN NYC 2025 End to End Integreation test", ()=>{

    beforeEach(() => {
      cy.viewport(1440, 900);
  });

  function Signin(){
       cy.visit("https://espnwsummit.brightspotapps.com");
       cy.wait(10000);
       cy.get('.reg-link-lg').click({force:true})
       cy.get('[href="/register/in_person"]').click({force:true})
       
       cy.get('#email').type("bj01071995+27@gmail.com")
       cy.get('.reg-btn').click()

    }

   /* function runWithSignin (fn){
    Signin();
    fn();
    }*/

    function SigninWithemptyField () {
        cy.get('#first_name').type('Miles', { force: true });
        cy.get('#last_name');
        cy.get('#company').type('HDML', { force: true });
        cy.get('#title')

        cy.get('#place_order_btn', { timeout: 10000 }).should('be.visible').click();

        cy.get('.modal-content').should('be.visible');

        cy.get('.close-btn-img').click({ force: true });

        cy.wait(20000)


    }

    function SigninWithInvalidData () {

      cy.get('#last_name').type('12345TGB', { force: true })
      cy.get('#address').type('No. 44 Bayside Street', { force: true })
      cy.get('#title').type('OR = 1', { force: true })
      cy.get('#cell_phone_number').type('+2349087',{ force: true })
      cy.get('#city').type('908NY', { force: true })
      cy.get('#state').type('0988_90', { force: true })
      cy.get('#zip_code').type('09987654321234098', { force: true })
      cy.get('#country').type('234567uy', { force: true })

      cy.get('.order-form',{ timeout: 10000 }).should('be.visible')
      cy.get('#discount_code').type('09okjiuyyhg', { force: true })
       cy.wait(1000)
      cy.get('#apply_discount_btn',{ timeout: 10000 }).should('be.visible').click({ force: true })
       cy.wait(10000)
      cy.get('.modal-content',{ timeout: 10000 }).should('be.visible')
      cy.get('.close-btn-img').click()
      cy.wait(20000)     

      cy.get('#place_order_btn').click({ force: true });
      cy.wait(20000)   
       cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
       cy.get('.close-btn-img').click();

    }

    function SigninWithValidData () {
      cy.wait(10000)
      cy.get('#first_name').clear({ force: true }).type('Miles', { force: true });
      cy.get('#last_name').clear({ force: true }).type('Stones', { force: true })
      cy.get('#address').clear({ force: true }).type('No. 44 Bayside Street', { force: true })
      cy.get('#company').clear({ force: true }).type('HDML', { force: true });
      cy.get('#title').clear({ force: true }).type('Tester', { force: true })
      cy.get('#cell_phone_number').clear({ force: true }).type('+2349087908099',{ force: true })
      cy.get('#city').clear({ force: true }).type('NY', { force: true })
      cy.get('#state').clear({ force: true }).type('CT', { force: true })
      cy.get('#zip_code').clear({ force: true }).type('0768', { force: true })
      cy.get('#country').clear({ force: true }).type('United State', { force: true })
      //cy.get('#discount_code').type('09okjiuyyhg', { force: true })
      //cy.get('#apply_discount_btn').click({ force: true })
      //cy.get('.modal-content').should('be.visible')
      //cy.wait(10000)
       // cy.get('.close-btn-img').click({ force: true })
        cy.wait(10000)   
      cy.get('#place_order_btn', { timeout: 10000 }).should('be.visible').click();

       //cy.get('.modal-content').should('be.visible');
       //cy.get('.close-btn-img').click({force: true });

    }

    const Payment =() =>{
      cy.get()
    }

  /*it('End to End positive test', () => {
    Signin();

    runWithSignin(SigninWithemptyField);
    runWithSignin(SigninWithInvalidData);
    runWithSignin(SigninWithValidData);
    
  });*/ 
  beforeEach(() =>{ 
    Signin();

  })

  it('Validate Auth page', ()=>{
    SigninWithemptyField();
  });

   it('Validate Invalid Data', ()=>{
    SigninWithInvalidData();
   })

    it('Validate Valid data page', ()=>{
    SigninWithValidData();
  });

})