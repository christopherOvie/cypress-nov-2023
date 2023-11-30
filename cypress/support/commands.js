// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//import cypress = require("cypress")

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-downloadfile/lib/downloadFileCommand')
Cypress.Commands.add('switchToIframe',(iframe)=>{
return cy
.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap)
})

Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('iframe[data-cy="the-frame"]')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })


//   cy.getIframeBody().find('#run-button').should('have.text', 'Try it').click()
//   cy.getIframeBody().find('#result').should('include.text', '"delectus aut autem"')

//   // because the UI has already updated, we know the fetch has happened
//   // so we can use "cy.get" to retrieve it without waiting
//   // otherwise we would have used "cy.wait('@fetch')"
//   cy.get('@fetch').should('have.been.calledOnce')
//   // let's confirm the url argument
//   .and('have.been.calledWith', 'https://jsonplaceholder.cypress.io/todos/1')
// })
