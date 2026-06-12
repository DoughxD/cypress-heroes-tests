import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import HeroesPage from '../pages/heroesPage'
import PermissionsPage from '../pages/permissionsPage'

const loginPage = new LoginPage()
const heroesPage = new HeroesPage()
const permissionsPage = new PermissionsPage()

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