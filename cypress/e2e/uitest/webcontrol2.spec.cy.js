import data from "../fixtures/testData.json"
describe('handling web i controls', () => {

    beforeEach(() => {
cy.visit('https://www.globalsqa.com/samplepagetest/')

    });  

    it('fill form succesfully', () => {

cy.fixture("testData").then(()=>{
    cy.get("[name='file-553']").selectFile(data.filePath)
    cy.get("[name='g2599-name']").clear().type(data.name).should('have.value', data.name)
    cy.get("[name='g2599-email']").clear().type(data.email).should('have.value', data.email)
    cy.get("[name='g2599-website']").type(data.website).should('have.value', data.website)

    cy.get("[name='g2599-experienceinyears']")
    .select(data.experience)

    .should('have.value',data.experience)


      //checkboxes

      cy.get("[value='Automation Testing']").should("be.not.checked").check()
      //radio button   //should is a promise from cypress inbuilt

      cy.get("[value='Graduate']").should('be.not.checked').check()
      //alert
      cy.get("[onclick='myFunction()']").click()
      .then(()=>{
          cy.on("window:alert",(window)=>{
              //expect is from chai assertion library
              expect(window).to.be.equal(data.alertMessage);
              cy.on('window:confirm',()=>true)
              cy.on('window:confirm',()=>true)
          })
      })
      //input comment
cy.get("[name='g2599-comment']").clear().type(data.comment).should('have.value', data.comment)

//click submit
cy.get("[type='submit'").click(()=>{
    cy.get("#contact-form-2599 h3").should('have.text',data.successMessage)
})

cy.get("#contact-form-2599 h3").then(($element)=>{
    const text = $element.text()
    const upercase=text.toUpperCase()
    expect(upercase).to.includes(data.successMessage)
})

cy.get("#contact-form-2599 h3").invoke("text").then((text)=>{
  
    expect(text).to.equal(data.successMessage)
})

})



    
}); 
}); 
