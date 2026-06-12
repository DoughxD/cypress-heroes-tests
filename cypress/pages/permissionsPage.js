class permissionsPage {
  selectorsList() {
    const selectors = {
     
      heroButton: '[href="/heroes/new"]'
      
    }
    return selectors
  }
  checkHeroButonWithUser(){
    cy.get(this.selectorsList().heroButton).should('not.exist')
    
  
  }

  checkHeroButonWithAdmin(){
    cy.get(this.selectorsList().heroButton).should('be.visible')
    
  
  }

}

export default permissionsPage;
