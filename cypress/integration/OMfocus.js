class homeFocus{

    elements = {
        googleSearch: () => cy.get('input[name="q"]'),
        validateTitle: () => cy.get('h2'),
        validateTextBlock: () => cy.get('body'),
    }

    typeSearch(search){
        this.elements.googleSearch().type(search);
    }

    validateTitles(title){
        this.elements.validateTitle().contains(title).should('exist');
    }

    validateText(text){
        this.elements.validateTextBlock().contains(text).should('exist');
    }
}

module.exports = new homeFocus();