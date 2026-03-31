
describe("Alerts", ()=>{

    // (1)///'' JS alert: it will have some text and a button
    it("js alert", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t)=>{
            expect(t).to.contain("I am a JS Alert");
        })

        //alert window automatically close by cypress - no code to close the alert

        cy.get("#result").should("have.text", "You successfully clicked an alert");
        
            
    })

    // (2) Javascript Confirm Alert: it will have an Okay and a cancel button

    it("js confirm alert", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains("I am a JS Confirm");

             })

        // cypress automatically closed alert window by using ok-button
        cy.get("#result").should('have.text', 'You clicked: Ok');
        
            
    })
    
    // (2) Javascript Confirm Alert: it will have an Okay and a cancel button

    it("js confirm alert - Cancel", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains("I am a JS Confirm");

             })

        cy.on("window:confirm", ()=> false); //cypress closes modal window using cancel button

        cy.get("#result").should('have.text', 'You clicked: Cancel');
        
            
    })

    // (3) Javascript prompt alert: it will have some text and a textbox the user can input with an Ok button

    it("js prompt alert", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            cy.stub(win , 'prompt' ).returns('Welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click()

        //Cypress will automatically close prompted alert window - it will use okay button - by default

       // cy.on("window:prompt", ()=> false); //cypress closes modal window using cancel button - did not work

        cy.get("#result").should('have.text', 'You entered: Welcome');
            
    })
    // Authenticated Alert

    it.only("Authenticated Alert", ()=>{

        // Approached one
       /* cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                        {
                                                                            username: "admin", 
                                                                            password: "admin"
                                                                        }
                                                                    });

            cy.get("div[class='example'] p").should("have.contain", "Congratulations!")   
            
            */
            // Approached two

            cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

            cy.get("div[class='example'] p").should("have.contain", "Congratulations!")

    })

})