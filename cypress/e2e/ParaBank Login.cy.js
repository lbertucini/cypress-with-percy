/// <reference types="cypress" />


const { faker } = require('@faker-js/faker')


const streetAddress = faker.address.street(true)
const city = faker.address.city()
const state = faker.address.state()
const zipCode = faker.address.zipCode()
const phone = faker.phone.number()
const ssn = faker.random.numeric(9, { allowLeadingZeros: true }) //testar pra ver se funciona
const username = faker.random.alpha(10)
const password = faker.datatype.number({min: 12, max: 999999999999})
const repeatPassword = password

describe('Validation Home', () => {
  
  beforeEach(() => {
  })

  it('It should login',() => {

    cy.portalLogin()

  })


})  