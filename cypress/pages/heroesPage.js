class heroesPage {
  selectorsList() {
    const selectors = {
      'heroesCard' : "[data-cy='hero-card']"
    };
    return selectors;
  }
  
  heroesCheck(){
    cy.get(this.selectorsList().heroesCard).should('be.visible')


  }
    
}

export default heroesPage;
