describe('hhh', () => {
    it('juyyttt', () => {
        cy.visit('https://automationteststore.com/')
      //  cy.wait(3000)
        // const makeuplinks= cy.get("a[href*='product/category']").contains('Makeup')
        // cy.log(makeuplinks.text())  nnn

        cy.get("a[href*='product/category']").then(($headerText) => {
               const  alllinks=     $headerText.text()
               cy.log("found header text  "+alllinks)
               expect(alllinks).to.includes('Makeup')
               alllinks.includes('Makeup').then((headerT)=>{
               // headerT.
               })
        });
    });
    
       // makeuplinks.click()

    //     for(var i =0; i < links.length; i++){
    //         links[i]==0
    //        // cy.log("size is  "+i.length)
    //                    if(alllinks.get(i).includes('  Makeup')){
    //                     alllinks.get(i).click()
    //                    }

    //     }
    });


// List <WebElement> allMonth= month.getOptions();
// for(int i =0;i<allMonth.size();i++) {
// 	System.out.println(allMonth.get(i).getText());
// 	if(allMonth.get(i).getText().equalsIgnoreCase("Sep")) {
// 		allMonth.get(i).click();
// 		//System.out.println(allMonth.get(i).isDisplayed());
//	}