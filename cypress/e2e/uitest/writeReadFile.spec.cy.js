import { it } from "@faker-js/faker";

describe('handling write and read file', () => {

    it.only('test txt file contents', () => {
        cy.writeFile('cypress/fixtures/text.txt','hello cypres')
        //read file content
        cy.readFile('cypress/fixtures/text.txt').then((content)=>{
            expect(content).to.equal('hello cypres')
        })  

    })

    it("json txt file contents", () => {
        cy.writeFile('cypress/fixtures/user.json',
        {
            name: "james", 
            email: "james@test.com", 
           password: "james123",
           phone:   "07655433098"
        })

        cy.fixture('user').then((content) => {
            expect(content.name).to.equal('james')
            expect(content.password).to.equal('james123')
                    })
        
        })
    it('json file contents', () => {
       
        cy.writeFile('cypress/fixtures/user.json',
        {
            name: "james", 
            email: "james@test.com", 
           password: "james123",
           phone:   "07655433098"
        })
        

        
   

        const expected = {
            name: "james", 
            email: "james@test.com", 
           password: "james123",
           phone:   "07655433098"
        }
        cy.readFile('cypress/fixtures/test.txt').then((contents)=>{
            expect(JSON.stringify(contents)).to.equal(JSON.stringify(expected))
        })
    });


});