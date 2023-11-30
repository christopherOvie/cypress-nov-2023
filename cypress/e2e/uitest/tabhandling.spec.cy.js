describe('tab handl', () => {
    it('remove target att', () => {
        cy.visit('https://www.phptravels.com/demo')
        cy.contains('Login').first()
        .invoke("removeAttr","target")
        .click({force: true})
        //cypress cannot handlenew domain
        cy.origin('https://phptravels.org/login',(() => {
            cy.contains('Sign in to your account to continue.').should('be.visible')
            cy.get('#inputEmail').type('ereee')

            cy.get('#inputPassword').type('iuyt')
        }))
      
    });

    it.only('remove no target att', () => {

        cy.visit('https://www.phptravels.com/demo')

       // cy.visit(url)
        cy.contains('Login')
        .first()
        .then(($el) => {
       let url=  $el.prop("href")
       
       cy.visit(url)
       cy.origin(url,(url) => {

      //  cy.visit(url)
        cy.contains('Sign in to your account to continue.').should('be.visible')
        // cy.get('#inputEmail').type('ereee')

        // cy.get('#inputPassword').type('iuyt')
    //}))
       
        });
    

});
})
})