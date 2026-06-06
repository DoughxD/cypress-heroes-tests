import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import HeroesPage from '../pages/heroesPage'


const loginPage = new LoginPage()
const heroesPage = new HeroesPage()



describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.userSuccess.email, userData.userSuccess.password)
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.accountLoginFailed(userData.emailFailed.email, userData.emailFailed.password)
  })
})

describe('Listagem de heróis após login', () => {
  it('os heróis devem ser listados logo após o login', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.userSuccess.email, userData.userSuccess.password)
    heroesPage.heroesCheck()
  })
})