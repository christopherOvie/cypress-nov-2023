
describe('api test', () => {
    it('api testing', () => {
        cy.request('get','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).to.be.equal(200);
        cy.log(response.body)
        expect(response.body).to.haveOwnProperty('page',2)
        expect(response.body).to.haveOwnProperty('per_page',6)
        expect(response.body).to.haveOwnProperty('total',12)
        
        expect(response.body).to.haveOwnProperty('total_pages',2)
        expect(response.body.data[0].first_name).to.be.equal('Michael')
        
        })

    });
});