//import data from  "../fixtures/users.json"
const data = require("../fixtures/login.json")
describe('p+  and _ve ', () => {

    beforeEach(function(){
cy.fixture('users',function(data){
this.data=data
})

    })
    it('correct login', () => {
        cy.visit('/web/index.php/auth/login')
    //   cy.get("[name='username']").type(this.data[0].username)
    //     cy.get("[name='password']").type(this.data[0].password)



        cy.log("username", data[0].username);
        cy.log("password", data[0].password);
    });
});
// this.data[0].username
// this.data[0].password