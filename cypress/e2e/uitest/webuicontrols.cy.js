///<reference types="cypress" />
describe('handling web i controls', () => {

    beforeEach(() => {
cy.visit('https://www.globalsqa.com/samplepagetest/')

    });   
    it.only('fill form succesfully', () => {
        cy.get("[name='file-553']").selectFile("cypress/fixtures/staticmtd.PNG")

        //INPUT FIELDS
        cy.get("[name='g2599-name']").clear().type('John doe').should('have.value', 'John doe')

        cy.get("[name='g2599-email']").clear().type('john@gmail.com').should('have.value', 'john@gmail.com')
        cy.get("[name='g2599-website']").type('https://www.udemy.com/').should('have.value', 'https://www.udemy.com/')

        //dropdowns
        cy.get("[name='g2599-experienceinyears']")
        .select('10+')
      //  .invoke('val')  ///invoke is jquey function    for dropdown invoke the values
        .should('have.value','10+')

        //checkboxes

        cy.get("[value='Automation Testing']").should("be.not.checked").check()
        
    cy.get("input[type='radio']").each(($element,index)=>{
        if(index ===2){

            cy.wrap($element).click();
                     }

    })

cy.wait(3000)

      //  cy.get("[value='Graduate']").should('be.not.checked').check()
        //alert
        cy.get("[onclick='myFunction()']").click()
        .then(()=>{
            cy.on("window:alert",(window)=>{
                //expect is from chai assertion library
                expect(window).to.be.equal('Do you really fill rest of the form?')
                cy.on('window:confirm',()=>true)
                cy.on('window:confirm',()=>true)
            })
        })
//input comment
cy.get("[name='g2599-comment']").clear().type('cypress').should('have.value', 'cypress')

//click submit
cy.get("[type='submit'").click(()=>{
    cy.get("#contact-form-2599 h3").should('have.text','Message Sent (go back)')
})
cy.get("#contact-form-2599 h3").then(($element)=>{
    const text = $element.text()
    const upercase=text.toUpperCase()
    expect(upercase).to.includes('MESSAGE SENT')
})
cy.get("#contact-form-2599 h3").invoke("text").then((text)=>{
  
    expect(text).to.equal('Message Sent (go back)')
})

    });
});