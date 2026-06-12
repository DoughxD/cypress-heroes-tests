import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import HeroesPage from '../pages/heroesPage'
import PermissionsPage from '../pages/permissionsPage'
import CreateHeroPage from '../pages/createHeroPage'  // 👈 FALTANDO!

const loginPage = new LoginPage()
const heroesPage = new HeroesPage()
const permissionsPage = new PermissionsPage()
const createHeroPage = new CreateHeroPage()  // 👈 FALTANDO!

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
})  // 👈 FECHA O DESCRIBE DE LOGIN INVÁLIDO

describe('Listagem de heróis após login', () => {
  it('os heróis devem ser listados logo após o login', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.userSuccess.email, userData.userSuccess.password)
    heroesPage.heroesCheck()
  })
})  // 👈 FECHA O DESCRIBE DE LISTAGEM

describe('Criar um herói novo', () => {
  it('Deve criar um herói com usuário admin', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.adminUserSuccess.email, userData.adminUserSuccess.password)
    createHeroPage.newHero('Super S', 50, 1, 1, 'Mind Control')
  })
})  // 👈 FECHA O DESCRIBE DE CRIAR HERÓI

describe('Controle de permissão (UI)', () => {
  it('Usuário normal NÃO vê botão "Create New Hero"', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.userSuccess.email, userData.userSuccess.password)
    permissionsPage.checkHeroButonWithUser()
  })

  it('Usuário admin VÊ botão "Create New Hero"', () => {
    loginPage.accessLoginPage()
    loginPage.accountLogin(userData.adminUserSuccess.email, userData.adminUserSuccess.password)
    permissionsPage.checkHeroButonWithAdmin()
  })
})  