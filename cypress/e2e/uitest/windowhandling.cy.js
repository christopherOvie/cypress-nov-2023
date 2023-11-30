describe('window handling', () => {
    let baseurl='https://demoqa.com/browser-windows'
    it.only('test new window pop pup', () => {
        cy.visit(baseurl,{
     
        onbeforeload(win) {
            //prompt  alert
cy.stub(win, 'open').as('childwindow');
        }
        })
        cy.get('#windowButton').click()

        //switch to window
        cy.window().its("open").should("be.calledOnce")

        cy.get("@childwindow")
        .should('be.calledOnce',Cypress.sinon.match.string)
         .then((url) =>{
            cy.visit(url.args[0],[0]);
            url.restore;
            cy.contains('This is a sample page').should('be.visible')
        })
     });



     it('test facebook new window pop pup', () => {
        cy.visit("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo",{
     
            onbeforeload(win) {
                //prompt  alert
    cy.stub(win, "open").as("childwindow");
            }
            })
            cy.get("a[title*='on Facebook']").click();
            //switch to  the new window
            cy.window().its("open").should("be.calledOnce")
            
});
});