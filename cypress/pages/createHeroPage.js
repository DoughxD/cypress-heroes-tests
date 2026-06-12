class createHeroPage {
  selectorsList() {
    const selectors = {
      createHeroButton: "[href='/heroes/new']",
      Name: ".text-sm [data-cy='nameInput']",
      Price: "[data-cy='priceInput']",
      Fans: "[data-cy='fansInput']",
      Saves: "[data-cy='savesInput']",
      Powersbox: '',
      Powers: "[data-cy='powersSelect']",
      Avatar: "[data-cy='avatarFile']",
      submitButton: ".text-white"
      
    }
    return selectors
  }
  newHero(name, price, fan, save, power){
    cy.get(this.selectorsList().createHeroButton).click()
    cy.get(this.selectorsList().Name).type(name)
    cy.get(this.selectorsList().Price).type(price)
    cy.get(this.selectorsList().Fans).type(fan)
    cy.get(this.selectorsList().Saves).type(save)
    cy.get(this.selectorsList().Powers).select(power)
    cy.get(this.selectorsList().submitButton).eq(1).click()
    
  
  }

}

export default createHeroPage;
