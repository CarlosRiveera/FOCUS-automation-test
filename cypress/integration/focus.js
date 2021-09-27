describe('Google Search', () => {

  it('go to google', () => {
    cy.visit('https://www.google.com');
  });

  it('Type on google search `Focus Services`', () => {
    cy.get('input[name="q"]').type('Focus Services{enter}');
  });

  it('verify URL of focus exist', () => {
    if(cy.get('[href="https://www.focusservices.com/"] > .TbwUpd > .iUh30')){
      cy.log('it does exist')
    } else {
      cy.log('doesnt exist')
    }
  });

  it('Scroll down to the bottom of the page and verify Now Hiring', () => {
    cy.get('[href="https://www.focusservices.com/"] > .LC20lb').first().click()
    cy.scrollTo('bottom')
    if(cy.get('span').contains('Now Hiring!')){
      cy.log('it does exist')
      
    } else {
      cy.log('doesnt exist')
    }
  });

  it('Locate North America Link', () => {
    cy.get('span').contains('Locations').first().click()
  });

});