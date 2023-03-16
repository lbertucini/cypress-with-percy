
import '@percy/cypress'


describe('About Us Validation Home', () => {
  
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/news.htm#6')
  })

  it('It should validate the top menu', () => {
    
    cy.topMenu()
  })

  it('It should validate left menu', () => {
    cy.percySnapshot()
    cy.leftMenu()
  })

  it('It should validate the shortcuts on the right side',() => {
    cy.percySnapshot()
    cy.shortcutIcons()
  })

  it('It should validate login component',() => {

    cy.loginComponents()
  })

  it('It should validate news',() => {

    cy.componentNews()
  })

})  