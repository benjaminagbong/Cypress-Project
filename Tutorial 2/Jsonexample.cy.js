describe('JSon Object', () => {
    it('JSon Object Example', () => {

        const exampleObject = {"Key1": "Tim", "Key2": "Jones" }
        const exampleArrayOfValue = ["Sophie", "Howard", "Rose"];
        const exampleArrayOfObject = [{"key": "Luke"}, {"Key1": "Mark"}, {"Key2": "75"},]



        const User = 
            {
                "firstName": "Boye",
                "lastName": "Maryaan",
                "Age": 30,                
            
            "Student":[
                {
                    "firstName": "John",
                    "lastName": "stones",

                },
                {
                    "firstName": "Deyong",
                    "lastName": "spys",
                }
            ]

        }

        cy.log(exampleObject["Key1"]);
        cy.log(exampleObject.Key2)

        cy.log(exampleArrayOfValue[0])
        cy.log(exampleArrayOfValue[2])

        cy.log(User.firstName)
        cy.log(User.Student[0].firstName)
        cy.log(User.Student[0].lastName)

        cy.log(exampleArrayOfObject [0].key)
        cy.log(exampleArrayOfObject [1].Key1)
        cy.log(exampleArrayOfObject [2].Key2)
    })
    
});