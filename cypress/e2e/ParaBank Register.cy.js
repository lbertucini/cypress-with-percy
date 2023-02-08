/// <reference types="cypress" />

const firstName = "Lucas"
const lastName = "Bertucini"
const streetAddress = "888, Boulevard Avenue"
const city = "Reno"
const state = "Nevada"
const zipCode = "89108"
const phone = "(555)555-1234"
const ssn = "238-44-2813" //testar pra ver se funciona
const username = "bertucini"
const password = "1234567890123"
const repeatPassword = "1234567890123"

describe('Validation Home', () => {
  
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
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

  it('It should register component',() => {


  cy.get('input[name="customer.firstName"]')
    .click()
    .type(firstName)
  
  cy.get('input[name="customer.lastName"]')
    .click()
    .type(lastName)

  cy.get('input[name="customer.address.street"]')
    .click()
    .type(streetAddress)
  
  cy.get('input[name="customer.address.city"]')
    .click()
    .type(city)

  cy.get('input[name="customer.address.state"]')
    .click()
    .type(state)

  cy.get('input[name="customer.address.zipCode"]')
    .click()
    .type(zipCode)

  cy.get('input[name="customer.phoneNumber"]')
    .click()
    .type(phone)

  cy.get('input[name="customer.ssn"]')
    .click()
    .type(ssn)
  
  cy.get('input[name="customer.username"]')
    .click()
    .type(username)
  
  cy.get('input[name="customer.password"]')
    .click()
    .type(password)
  
  cy.get('#repeatedPassword')
    .click()
    .type(repeatPassword)  

    cy.get('input[value="Register"]')
    .click()

    cy.get('h1[class="title"]')
    .contains('Welcome')

    
  })

})  