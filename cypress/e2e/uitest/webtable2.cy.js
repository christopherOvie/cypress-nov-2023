describe('test webta', () => {
    it('test booknam', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("table[name='BookTable'] tbody tr td:nth-child(1)").each(($element,index) =>{

            if($element.text() == "Master In Java"){
cy.get("table[name='BookTable'] tbody tr td:nth-child(2)")
.eq(index)
.then(($ele)=>{
   expect($ele.text()).to.equal("Amod")
})

    //check subject area
    cy.get("table[name='BookTable'] tbody tr td:nth-child(3)")
    .eq(index)
    .then(($ele)=>{
       expect( $ele.text()).to.match(/[a-zA-a-z]/)
    })

    //check price area
    cy.get("table[name='BookTable'] tbody tr td:nth-child(4)")
    .eq(index)
    .then(($ele)=>{
       expect( $ele.text()).to.match(/[0-9]/)
    })

            }
        
        })

    
    });
});