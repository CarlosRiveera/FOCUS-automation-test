//object model to render a series of methods 
const OMfocus = require("./OMfocus");


describe('Google Search', () => {

  it('Go to google', () => {
    cy.visit('https://www.google.com');
  });

  it('Type on google search "Focus Services"', () => {
    OMfocus.typeSearch('Focus Services')
    cy.get('form').submit()
  });

  it('Verify URL of focus exist', () => {
    if(cy.get('[href="https://www.focusservices.com/"]').should('exist')){
      cy.log('Link does exist')
    } else {
      cy.log('doesnt exist')
    }
  });

  it('Scroll down to the bottom of the page and verify Now Hiring', () => {
    cy.get('[href="https://www.focusservices.com/"] > .LC20lb').first().click()
    cy.scrollTo('bottom')
    if(cy.get('span').contains('Now Hiring!')){
      cy.log('Now Hiring does exist')
      cy.get('span').contains('Locations').first().click()
      
    } else {
      cy.log('doesnt exist')
    }
  });

  it('Locate North America Link', () => {
    cy.get('a[href="#north-america"]').should('exist')
    cy.get('a[href="#central-america"]').click()
  });
  
  it('Validate “El Salvador & Nicaragua” title ', () => {
    OMfocus.validateTitles('El Salvador & Nicaragua')
    cy.get('a[href="#asia"]').click()
  });

  it('Verify “Bacolod City, Philippines” text block. ', () => {
    OMfocus.validateText('Bacolod City, Philippines')
  });

});