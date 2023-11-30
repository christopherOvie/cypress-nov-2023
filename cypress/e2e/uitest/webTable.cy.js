describe('webtabl', () => {
    it('ooo', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#product tbody tr td:nth-child(2)').each(($ele,index,$list) => {

            const text=$ele.text()
            if(text.includes('Python')){
                cy.get('#product tbody tr td:nth-child(2)').eq(index).next().then((price)=>{
                  const pricetext=  price.text()
                  expect(pricetext).to.equal('25')
                })
                
            }

        })


        it.only('hhhhooo', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            cy.get('#product tbody tr td:nth-child(2)').each(($ele,index,$list) => {
                const text=$ele.text()
                if(text.includes('Python')){
                    cy.get('#product tbody tr td:nth-child(3)').eq(index).then((price)=>{
                      const pricetext=  price.text()
                      expect(pricetext).to.equal('25')
                    })
                    
                }
                
            })

        });
        
    });
});