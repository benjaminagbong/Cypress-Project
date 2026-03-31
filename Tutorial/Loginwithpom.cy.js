import Login from "../../PageObjectModel/LoginPage2.js";

describe("login with page object class", () => {

    //Using Pom
    it('login with pom', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123");
        ln.ClickSubmit();
        ln.VerifyLogin();
    
    })

    //using pom with fixtures
    it.only('login with pom', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('Orangehrm').then((data)=>{
           
            const ln = new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password);
            ln.ClickSubmit();
            ln.VerifyLogin();

        })
       
    
    })
})

