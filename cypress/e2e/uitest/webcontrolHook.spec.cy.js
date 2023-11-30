//import data from "../fixtures/testData.json"
describe('handling web i controls', function() {

    beforeEach(function() {
//cy.visit('https://www.globalsqa.com/samplepagetest/')
cy.fixture("testData.json").then(function(data){
this.data = data

  }); 
    });  

    it('fill form succesfully',function (){
        cy.visit('https://www.globalsqa.com/samplepagetest/')

// cy.fixture("testData").then(()=>{
    cy.get("[name='file-553']").selectFile(this.data.filePath)
    cy.get("[name='g2599-name']").clear().type(this.data.name).should('have.value', this.data.name)
    cy.get("[name='g2599-email']").clear().type(this.data.email).should('have.value', this.data.email)
   cy.get("[name='g2599-website']").type(this.data.website).should('have.value', this.data.website)

    cy.get("[name='g2599-experienceinyears']")
    .select(this.data.experience)

    .should('have.value',this.data.experience)


//       //checkboxes

      cy.get("[value='Automation Testing']").should("be.not.checked").check()
//       //radio button   //should is a promise from cypress inbuilt

      cy.get("[value='Graduate']").should('be.not.checked').check()
//       //alert
      cy.get("[onclick='myFunction()']").click()
      .then(()=>{
          cy.on("window:alert",(window)=>{
              //expect is from chai assertion library
              expect(window).to.be.equal(this.data.alertMessage);
              cy.on('window:confirm',()=>true)
              cy.on('window:confirm',()=>true)
          })
      })
//       //input comment
cy.get("[name='g2599-comment']").clear().type(this.data.comment).should('have.value', this.data.comment)

// //click submit
cy.get("[type='submit'").click(()=>{
    cy.get("#contact-form-2599 h3").should('have.text',this.data.successMessage)
})

cy.get("#contact-form-2599 h3").then(($element)=>{
    const text = $element.text()
    const upercase=text.toUpperCase()
    expect(upercase).to.includes('MESSAGE SENT')
})

cy.get("#contact-form-2599 h3").invoke("text").then((text)=>{
  
    expect(text).to.equal(this.data.successMessage)
})

})



    
}); 

