///<reference types="cypress" />
describe('orange hrn login spec', () => {
  before(()=>{
cy.log('open database')
  })
  beforeEach(() => {
    cy.log('open browser')
    cy.visit('/web/index.php/auth/login')
  });


  it('valid login', () => {
   cy.get("[name='username']").clear().type('Admin')
   cy.get("[name='password']").clear().type('admin123')
   cy.get("[type='submit']").click()

   cy.get("h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
   cy.contains('Dashboard').should('have.text','Dashboard')
   cy.get(':nth-child(8) > .oxd-main-menu-item').should('have.text','Dashboard')


   //apply assertions


  })
  
//   it('passes', () => {
//     cy.log('test case 002')
//    })

//    it('passes', () => {
//     cy.log('test case 003')
//    })

//   afterEach(() => {
// cy.log('close test')
//   }); 
//   before(()=>{
// cy.log('close database')
//   })

})