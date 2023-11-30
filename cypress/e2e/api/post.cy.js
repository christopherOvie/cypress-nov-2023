describe('api posttest', () => {


    const payload= {
        "name": "chriz",
        "job": "manager"

    }
    it('api post testing', () => {
        cy.request('POST','https://reqres.in/api/users',payload).then((response)=>{
           expect(response.status).to.be.eq(201)
           expect(response.body).to.haveOwnProperty('name','chriz')
           expect(response.body).to.haveOwnProperty('job','manager')

        var time =JSON.stringify(response.body.createdAt)
        var x =JSON.stringify(response.body.id)
        cy.log(time)
        cy.log(x)

         cy.writeFile('cypress/fixtures/module1/test1.json',{"id":x})

        })

    });
});