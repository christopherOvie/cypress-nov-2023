import data from "../../fixtures/users.json"
describe('data driven login', () => {
    // beforeEach(() => {

    //     cy.session('login',()=>{
    //         cy.visit('/')
    //         cy.get("#signin2").click()
    //         cy.get("#loginusername",).type('CypressAutomation',{force : true})
    //         cy.wait(3000)
    //         cy.get("#loginpassword").type('123456',{force : true})
    //         cy.wait(3000)
    //         cy.get(" [onclick='logIn()']").click({force : true})
    //         cy.location('pathname').should('eq','/')

    //     })
    // });

    data.forEach((data) => {




    it('', () => {
        cy.visit('/') 
        cy.get("#signin2").click()
        cy.get("#loginusername",).type(data.username,{force: true})
        cy.get("#loginpassword").type(data.password,{force: true})


    });
});
})