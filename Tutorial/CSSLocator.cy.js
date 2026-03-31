
describe ("CSSLocators", () => {

    it("cssLocators", () => {

        cy.visit("http://www.automationpractice.pl/index.php")

        //cy.get("#search_query_top").type("T-Shirt") // id tag is optional
        //cy.get(".search_query").type("T-Shirt") // class tag is optional

        cy.get("[name=search_query]").type("T-Shirt") // attribute tag is optional

        cy.get("[name=submit_search]").click()

        cy.get(".lighter").contains("T-Shirt") // Asertions

        
    })
})