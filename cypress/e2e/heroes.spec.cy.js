import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import HeroesPage from '../pages/heroesPage'


const loginPage = new LoginPage()
const heroesPage = new HeroesPage()


describe('Listagem de heróis após login', () => {
  it('os heróis devem ser listados logo após o login', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.userSuccess.email, userData.userSuccess.password)
    heroesPage.heroesCheck()
  })
})

