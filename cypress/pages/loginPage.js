class loginPage {
  selectorsList() {
    const selectors = {
      'loginField': "[name='email']",
      'passField': "[name='password']",
      'buttonLogin': ".bg-blue-700",
      'acessLogin': '.gap-8',
      'errorText': '.text-red-500',
      
    };
    return selectors;
  }
  accessLoginPage(){
        cy.visit('/heroes')
  }

  accountLogin(email, pass) {
    cy.get(this.selectorsList().acessLogin).eq(0).click()
    cy.get(this.selectorsList().loginField).type(email)
    cy.get(this.selectorsList().passField).type(pass)
    cy.get(this.selectorsList().buttonLogin).click()
    
   
    
  }
  accountLoginFailed(email, pass) {
    cy.get(this.selectorsList().acessLogin).eq(0).click()
    cy.get(this.selectorsList().loginField).type(email)
    cy.get(this.selectorsList().passField).type(pass)
    cy.get(this.selectorsList().buttonLogin).click()
    cy.get(this.selectorsList().errorText).should('be.visible')
  }

}

export default loginPage;
