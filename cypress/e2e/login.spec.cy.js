import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'


const loginPage = new LoginPage()


describe('Login com sucesso', () => {
  it.only('Deve fazer login com um usuário válido', () => {
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