
import '@percy/cypress'


describe('Validation Home', () => {
  
  before(() => {
    cy.visit('https://parabank.parasoft.com/parabank/news.htm#6')
  })

  it('It should validate the top menu', () => {
    
    cy.topMenu()
  })

  it('It should validate left menu', () => {
    
    cy.leftMenu()
  })

  it('It should validate the shortcuts on the right side',() => {
    
    cy.shortcutIcons()
  })

  it('It should validate login component',() => {

    cy.loginComponents()
  })

  it('It should validate news',() => {

    cy.componentNews()
  })

})  