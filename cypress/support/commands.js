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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@percy/cypress';
const dayjs = require('dayjs')


Cypress.Commands.add('topMenu', (all) =>{

  cy.percySnapshot()

  cy.get('#topPanel')
      .should('be.visible')
  
  cy.get('.admin')
      .should('be.visible')
  
  cy.get('.logo')
      .should('be.visible')
  
  cy.get('.caption')
      .should('be.visible')
  
  cy.get('#headerPanel')
      .should('be.visible')
  
  cy.get('.leftmenu')
      .should('be.visible')

})

Cypress.Commands.add('leftMenu', (all) =>{
  cy.get('.Solutions')
    .eq(0)
    .should('contain.text', 'Solutions')

  cy.get('li')
    .eq(1)
    .should('contain.text', 'About Us') 
    .find('a')
    .should('have.attr', 'href')
    cy.request({
    url: 'https://parabank.parasoft.com/parabank/about.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })
        
  cy.get('li')
    .eq(2)
    .should('contain.text', 'Services') 
    .find('a')
    .should('have.attr', 'href')
    cy.request({
    url: 'https://parabank.parasoft.com/parabank/services.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('li')
    .eq(3)
    .should('contain.text', 'Products') 
    .find('a')
    .should('have.attr', 'href')
  cy.request({
    url: 'http://www.parasoft.com/jsp/products.jsp'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('li')
    .eq(4)
    .should('contain.text', 'Locations') 
    .find('a')
    .should('have.attr', 'href')
  cy.request({
    url: 'http://www.parasoft.com/jsp/pr/contacts.jsp'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('li')
    .eq(5)
    .should('contain.text', 'Admin Page') 
    .find('a')
    .should('have.attr', 'href')
    cy.request({
    url: 'https://parabank.parasoft.com/parabank/admin.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })
    //.should('have.attr', 'a', 'https://parabank.parasoft.com/parabank/about.htm') está gerando jsessionid, verificar a viabilidade de testar isso
})

Cypress.Commands.add('shortcutIcons', (all) =>{
   
cy.get('li.home')
  .should('contain', 'home' )
  .should('be.visible')

cy.get('li.aboutus')
  .should('contain', 'about' )
  .should('be.visible')

cy.get('li.contact')
  .should('contain', 'contact' )
  .should('be.visible')
})

Cypress.Commands.add('loginComponents', (all) =>{
   
  cy.get('#leftPanel')
    .should('be.visible')
    .find('h2')
    .should('contain', 'Customer Login')
    
  cy.get('form[name="login"]')
    .find('p')
    .eq(0)
    .should('have.text', 'Username')
  
  cy.get('input[type ="text"]')
    .should('be.visible')
  
  cy.get('form[name="login"]')
    .find('p')
    .eq(1)
    .should('have.text', 'Password')
  
  cy.get('input[type ="password"]')
    .should('be.visible')
  
  cy.get('input[value ="Log In"]')
    .should('be.visible')
  
  cy.get('p')
    .find('a')
    .should('contain.text', 'Forgot login info?')
  
  cy.get('p')
    .find('a')
    .should('contain.text', 'Register')
    
})

Cypress.Commands.add('bankServices', () =>{

  cy.get('span[class="services"]')
    .should('be.visible')
      
  cy.get('ul[class="services"]')
    .should('be.visible')

  cy.get('ul[class="servicestwo"]')
    .should('be.visible')

  cy.get('p[class="more"]')
    .eq(0)
    .should('be.visible')

})

Cypress.Commands.add('bankNews', (all) =>{

  cy.get('h4')

  cy.get('p[class="more"]')
    .eq(1)
    .should('be.visible')

  // cy.get('.captionthree')
  //   .should('have.text',`${now}`) //validar como colocar timezone
  cy.get('ul[class="events"]')
    .find('li')
    .eq(1)
    .should('contain.text', 'ParaBank Is Now Re-Opened')

  cy.get('ul[class="events"]')
    .find('li')
    .eq(2)
    .should('have.text', 'New! Online Bill Pay')

  cy.get('ul[class="events"]')
    .find('li')
    .eq(3)
    .should('have.text', 'New! Online Account Transfers')

})

Cypress.Commands.add('footer', (all) =>{

  cy.get('#footermainPanel')
    .should('be.visible')
  cy.get('#footerPanel')
    .find('li')
    .eq(0)
    .should('have.text', 'Home| ' )
  cy.request({
    url: 'https://parabank.parasoft.com/parabank/index.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(1)
    .should('have.text', 'About Us| ' )
  cy.request({
    url: 'https://parabank.parasoft.com/parabank/about.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(2)
    .should('have.text', 'Services| ' )
  cy.request({
    url: 'https://parabank.parasoft.com/parabank/services.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(3)
    .should('have.text', 'Products| ' )
  cy.request({
    url: 'http://www.parasoft.com/jsp/products.jsp'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(4)
    .should('have.text', 'Locations| ' )
  cy.request({
    url: 'http://www.parasoft.com/jsp/pr/contacts.jsp'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(5)
    .should('have.text', 'Forum| ' )
  cy.request({
    url: 'http://forums.parasoft.com/'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(6)
    .should('have.text', 'Site Map| ' )
  cy.request({
    url: 'https://parabank.parasoft.com/parabank/sitemap.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('#footerPanel')
    .find('li')
    .eq(7)
    .should('have.text', 'Contact Us' )
  cy.request({
    url: 'https://parabank.parasoft.com/parabank/contact.htm'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })

  cy.get('.copyright')
    .should('have.text', '© Parasoft. All rights reserved.')

  cy.get('.visit')
    .find('li')
    .eq(0)
    .should('have.text', 'Visit us at:')

  cy.get('.visit')
    .find('li')
    .eq(1)
    .should('have.text', 'www.parasoft.com')

  cy.request({
    url: 'https://www.parasoft.com/'
    }).then((resp) => {
    expect(resp.status).to.eq(200)
    })
})

Cypress.Commands.add('componentNews', () =>{

  cy.get('h1[class="title"]')
    .should('have.text', 'ParaBank News')
  
  cy.get(':nth-child(2) > b')
  
  cy.get('a[id="6"]')
    .should('be.visible')
  
  cy.get('#rightPanel > :nth-child(5)')

  cy.get('a[id="5"]')
    .should('be.visible')

  cy.get('#rightPanel > :nth-child(7)')

  cy.get('a[id="4"]')
    .should('be.visible')

  cy.get(':nth-child(9)')

  cy.get(':nth-child(10) > b')

  cy.get('a[id="3"]')
    .should('be.visible')

  cy.get(':nth-child(13)')

  cy.get(':nth-child(14) > b')

  cy.get('a[id="2"]')
    .should('be.visible')

  cy.get(':nth-child(17)')

  cy.get(':nth-child(18) > b')

  cy.get('a[id="1"]')
    .should('be.visible')

  cy.get(':nth-child(19)')
})

Cypress.Commands.add('componentServices', () =>{

  cy.get('span[class="heading"]')
    .eq(0)
    .should('contain', 'Available Bookstore SOAP services:')
    
  cy.get('table[style="text-align: left; width: 925px;"]')
    .eq(0)
    .should('be.visible')

  cy.get('span[class="heading"]')
    .eq(1)
    .should('contain', 'Bookstore services:')

  cy.get('table[style="text-align: left; width: 925px;"]')
    .eq(1)
    .should('be.visible')

  cy.get('span[class="heading"]')
    .eq(2)
    .should('contain', 'Available ParaBank SOAP services:')

  cy.get('table[style="text-align: left; width: 925px;"]')
    .eq(2)
    .should('be.visible')

  cy.get('span[class="heading"]')
    .eq(3)
    .should('contain', 'ParaBank services:')

  cy.get('table[style="text-align: left; width: 925px;"]')
    .eq(3)
    .should('be.visible')

  cy.get('span[class="heading"]')
    .eq(4)
    .should('contain', 'Available RESTful services:')

  cy.get('table[style="text-align: left; width: 925px;"]')
    .eq(4)
    .should('be.visible')
    
})

Cypress.Commands.add('componentRegister', () =>{

  cy.get('input[name="customer.firstName"]')
    .click()
    .type('firstName')
   
})

Cypress.Commands.add('portalLogin', ()=> {



  cy.session(["bertucini", "1234567890123"], () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    
    cy.get('input[name="username"]')
    .type("bertucini")
    
    cy.get('input[name="password"]')
    .click()
    .type("1234567890123")
    
    cy.get('input[value="Log In"]')
    .click()

    //cy.visit('https://parabank.parasoft.com/parabank/overview.htm')
  })

})


Cypress.Commands.add('openNewAccount', () => {

})