/// <reference types="cypress" />


describe('Validation Home', () => {
  
  before(() => {
    cy.visit('https://parabank.parasoft.com/parabank/services.htm')
  })

  it('It should validate the top menu', () => {
    
    cy.topMenu()
  })

  it('It should validate left menu', () => {
    
    cy.leftMenu()
  })

  it('It should validate the shortcuts on the right side',() => {
    
    cy.shortcuts()
  })

  it('It should validate login component',() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    cy.loginComponents()
  })

  it.only('It should validate services',() => {

    cy.componentServices()
  })



})  