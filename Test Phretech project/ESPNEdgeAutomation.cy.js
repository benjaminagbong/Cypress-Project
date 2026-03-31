
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("ESPN edge confrence Automation", () => {
  const serverId = "hefp0dzm";
  const serverDomain = "hefp0dzm.mailosaur.net";
  const emailAddress = "agbongb91+17@" + serverDomain; // static email address must be change on each execution
  let accessCode = "";
  // testcase one home page testing
  it.skip("testing the home page", () => {
    cy.viewport(1050, 680);
    cy.visit("https://espnedgeconferencevip.brightspotapps.com/");
    // verifying logo is visible and clickable
    cy.get("img[class$='brand-logo width-99']")
      .should("be.visible")
      .and("exist")
      .click(); // finding the correct logo element to perform a click action
    // verifying the nav item and perform click actions
    cy.get(
      "div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(1)"
    )
      .eq(0)
      .click();
    //cy.contains("REGISTER NOW").click({force: true})
    cy.wait(2000);
    cy.get(
      "div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(2) a:nth-child(1)"
    ).click();
    cy.wait(2000);
    cy.get(
      "div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(3) a:nth-child(1)"
    ).click();
    cy.wait(1000);
    // // cy.get(".print-agenda").then((e)=>{
    // //     let url=e.prop('href')
    // //     cy.visit(url);
    // // })
    // // cy.url().should('include', 'https://espnedgeconferencevip.brightspotapps.com/agenda/print');
    // // cy.wait(2000)
    // //operations
    // cy.go('back') // back to parent tab
    cy.contains("Tony Reali").click({ force: true });
    cy.wait(5000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Jimmy Pitaro").click({ force: true });
    cy.wait(5000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Mark L. Walker").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Kevin Lopes").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Roz Durant").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Tina Thornton").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Dave Roberts").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Mark L. Walker").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Susie Piotrkowski").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Jason Aidoo").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Kevin Lopes").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains("Kevin Lopes").click({ force: true });
    cy.wait(2000);
    cy.get("img[alt='speaker image']").should("be.visible");
    cy.wait(1000);
    cy.get("div[id='speaker-bio-modal'] button[aria-label='Close']").click({
      force: true,
    });
    cy.wait(1000);
    //cy.get("div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(1)")
    //.eq(3)
    //.click()
    cy.get(
      "div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(4) a:nth-child(1)"
    ).click();
    cy.wait(1000);
    cy.get(".transport_option >a")
      .invoke("removeAttr", "target")
      .click({ force: true }); //clicking on link
    cy.wait(2000);
    //cy.url().should('include', 'https://rooftopatpier17.com/getting-here/');
    cy.wait(5000);
    cy.visit("https://espnedgeconferencevip.brightspotapps.com/");
    cy.get("#faqs > .section-header > .cray-blue").scrollIntoView();
    cy.get("div[id='faqs_accordions'] div:nth-child(1) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(2) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(3) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(4) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(5) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(6) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(7) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(8) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(9) ul:nth-child(1)").click({
      force: true,
    });
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(10) ul:nth-child(1)").click(
      { force: true }
    );
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(11) ul:nth-child(1)").click(
      { force: true }
    );
    cy.wait(2000);
    cy.get("div[id='faqs_accordions'] div:nth-child(12) ul:nth-child(1)").click(
      { force: true }
    );
    cy.wait(2000);
    cy.get(".footer-container >a")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("exist")
      .click();
    cy.wait(5000);
    cy.visit("https://espnedgeconferencevip.brightspotapps.com/");
    cy.get(".footer-container").scrollIntoView();
    cy.wait(1000);
    //cy.scrollIntoView("div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(5) a:nth-child(1)")
    // cy.get("div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(5) a:nth-child(1)")
    // .click()
  });
  // testing the registration flow
  it("testing Registration flow", () => {
    cy.viewport(1050, 680);
    cy.visit("https://espnedgeconferencevip.brightspotapps.com/");
    cy.get(
      "div[class='d-flex desktop-wrapper hidden-sm justify-content-between'] li:nth-child(1)"
    )
      .eq(0)
      .click({force: true});
    //cy.wait(1000)
    cy.get("#register-email").should("be.visible");
    cy.get("#register-email").type(emailAddress, { force: true });
    cy.wait(3000);
    cy.get(".register-now-btn").click({ force: true });
    cy.wait(30000);
    cy.mailosaurGetMessage(serverId, { sentTo: emailAddress }).then((email) => {
      expect(email.html).to.haveOwnProperty("body");
      cy.document({ log: false }).invoke(
        { log: false },
        "write",
        email.html?.body
      );
      cy.wait(5000);
      cy.get(
        `[style="line-height:30px; font-size: 30px; font-weight: bold; font-family: 'axia', 'Arial', sans-serif; color: #000000;"]`
      )
        .invoke("text")
        .then((accessCodeText) => {
          accessCodeText =
            typeof accessCodeText === "string" ? accessCodeText : "";
          accessCode = accessCodeText;
          cy.wait(1000);
          cy.visit(
            "https://espnedgeconferencevip.brightspotapps.com/?email=&login=1",
            { failOnStatusCode: false }
          );
          cy.get("#email").type(emailAddress);
          cy.get("#access_code").type(accessCode);
          cy.get("#login_form > .cta-btn-wrap > .btn").click({ force: false });
          cy.log(accessCode, "Here we go!");
          return cy.log(accessCode);
        });
      // cy.get('a > img').click({force: true})
    });
  });
  //     it("Enter a valid Access Code", ()=>{
  //       cy.visit(`https://espnedgeconferencevip.brightspotapps.com/`, {failOnStatusCode: false});
  //       cy.wait(1500)
  //       cy.get(':nth-child(1) > .home-form-details').type(emailAddress)
  //       cy.get('.access-details').type(accessCode)
  //       cy.log(accessCode, 'The accesscode is here')
  //       cy.get('.home-form-btn').click()
});

