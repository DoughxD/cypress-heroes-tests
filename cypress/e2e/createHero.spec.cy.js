import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import CreateHeroPage from '../pages/createHeroPage'


const loginPage = new LoginPage()
const createHeroPage = new CreateHeroPage()



describe('Criar um herói novo', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.adminUserSuccess.email, userData.adminUserSuccess.password)
    createHeroPage.newHero('Super S', 50, 1, 1, 'Mind Control')
  })
})

