import 'cypress-iframe';
///<reference types="cypress-iframe" />

describe('iframe handling', () => {
    // it('testing iframes', () => {
    //     cy.visit('https://the-internet.herokuapp.com/iframe')
    //     cy.contains('iFrame').click()

    //     //check frameloaded fro
    //     cy.frameLoaded()
    //     //check frameloaded  for rl
    //     cy.frameLoaded({ url: 'https://the-internet.herokuapp.com/iframe' })


    //   //  cy.frameLoaded('#tinymce')

    //     cy.contains('An iFrame containing the TinyMCE WYSIWYG Editor').should('be.visible')

        
    //     cy.iframe('#mce_0_ifr').find('#tinymce p').clear().type('test commement').should('have.text','test commement')       
        
    // });

    // it('switching iframes custom commands',()=>{

    //     cy.visit('https://the-internet.herokuapp.com/iframe')
    //     cy.contains('iFrame').click() 

    //     cy.switchToIframe("#mce_0_ifr")
    //     .find("#tinymce p")
    //     .clear()
    //     .type('test commement')
    //     .should('have.value','test commement')  


    // })

    // it('switching iframes custom commands',()=>{

    //      cy.visit('https://the-internet.herokuapp.com/iframe')
    //     // cy.contains('iFrame').click() 

    //     // cy.switchToIframe("#mce_0_ifr")
    //     // .find("#tinymce p")
    //     // .clear()
    //     // .type('test commement')
    //     // .should('have.value','test commement')  
    //     cy.get('#mce_0_ifr').then(($iframe) => {
    //     let text1=    $iframe.contents().find("#tinymce p")
    //     cy.wrap(text1).clear()
    //     .type('test commement')
    //     .should('have.value','test commement') 
    //     })
//});
        it('handling webdriveruni iframes using webdriver uni',()=>{

            cy.visit('https://webdriveruniversity.com/IFrame/index.html')
            cy.wait(3000)
          //  cy.get('#contact-us').invoke('removeAttr','_blank').click({force:true})
          cy.get('#frame').then(($iframe)=>{
            const body=$iframe.contents().find('body')
            cy.wrap(body).as('iframe')
          })

cy.get('@iframe').get('#button-find-out-more').click({force:true})
          
           })
   
           it.only('demo exa',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href*='mentorship']").eq(0)  .should('be.visible').click({force:true})
//cy.iframe().find("h1[class*='pricing-title']").eq(0).should('have.text','BRONZE')


// cy.frameLoaded('.aut-iframe')
// cy.iframe('.aut-iframe')
//   .find('.pending-medication-check-box')
//   .should('be.visible')
//   .click()

    


        });

    });