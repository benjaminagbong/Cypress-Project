describe("Nfl Self-config testcase phase 1", ()=>{

    const serverId = 'gow59ndl';
    const serverDomain = "@gow59ndl.mailosaur.net";
    const emailAddress = 'goodness' + serverDomain; // static email address must be change on each execution
    let accessCode = "";


    it("Execute Login test functionality and dashboard", ()=>{

        cy.viewport(1050, 680)
         cy.visit("https://admin-nfl-events.brightspotapps.com/")
         cy.wait(2000)

        cy.get("#sys_admin_login").click()

        cy.get(':nth-child(2) > .col-xs-12 > .input-group > .form-control').type(emailAddress)
        cy.get(':nth-child(3) > .col-xs-12 > .input-group > .form-control').type("Testpass")

        cy.get('.input-group > .btn').click()
        
        cy.wait(4000)

         cy.mailosaurGetMessage(serverId, {sentTo: emailAddress}).then(email =>{
            expect(email.html).to.haveOwnProperty('body');
               cy.document({ log: false }).invoke({ log: false }, 'write', email.html?.body);
                cy.wait(1000)

                cy.contains('span', 'Your one-time login access code').invoke('text').then(accessCodeText =>{
                    accessCodeText=typeof accessCodeText ==="string"?accessCodeText:""; //Assigning accessCodeText a data type of string and saying its empty

                    if(accessCodeText){//spliting what was copied from the div and assigning to the variable accessCodeText
                        const accessCodeSplit=accessCodeText.split("is"); // Creating a Constant data type array accessCodeSplit and assigning it to the data on accessCodeText and spliting to two on the word "is"
                        if(accessCodeSplit && accessCodeSplit[1]){ //accessCodeSplit[1] is the second part of the data on the copy where the access code is
                         accessCode = accessCodeSplit[1].trim();
                         cy.log(accessCode, 'Access code')
                        }

                    }
                    cy.visit("https://admin-nfl-events.brightspotapps.com/index/two_factor_auth")
                    cy.get('.form-control').type(accessCode).type('{backspace}');
                    cy.wait(2000)
                    cy.get('.btn-primary').click()
                  // cy.log(accessCode, 'number')
                  // cy.get('.form-control').type(accessCode).type('{backspace}');
                  //   cy.wait(2000)
                  //   cy.get('.btn-primary').click()
                
                  });

                })
          
                // cy.visit("https://admin-nfl-events.brightspotapps.com/index/two_factor_auth")
                // cy.get('.form-control').type(accessCode)
                // cy.get('.btn-primary').click()
            })

           

    })

 //})