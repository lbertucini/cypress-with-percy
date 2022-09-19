/// <reference types="cypress" />


const dayjs = require('dayjs')

const now = dayjs().format('MM/DD/YYYY')


describe('Validation Home', () => {
  before(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
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

  it('It should validate bank services',() => {

    cy.bankServices()
  })

  it('It should validate news',() => {

    cy.bankNews()
  })

  it('It should validate footer',() => {

  cy.footer()
  })

  

})  