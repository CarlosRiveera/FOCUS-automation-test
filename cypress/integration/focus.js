describe('Google Search', () => {
    it('loads search page', () => {
      cy.visit('https://www.google.com');
    });
  
    it('searc `Focus Services`', () => {
      cy.get('input[name="q"]').type('Focus Services{enter}');
    });
  
    it('gets FOCUS url site', () => {
      
      if(cy.get('[href="https://www.focusservices.com/"] > .TbwUpd > .iUh30')){
            cy.log('found it')
        } else {
            cy.log('not found')
        }
    });
  });