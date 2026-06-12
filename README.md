# 🦸‍♂️ Cypress Heroes – Automação de Testes

Projeto de automação de testes para a aplicação **Cypress Heroes**, desenvolvido durante o curso **Guardião da Qualidade** da **LumeStack**.

O objetivo foi colocar em prática os conceitos de automação com **Cypress**, criando testes do zero, aplicando Page Objects, fixtures e validando comportamentos da aplicação.

---

## 📋 Funcionalidades testadas

De acordo com o enunciado do exercício, os seguintes testes foram automatizados:

1. ✅ **Login com usuário válido**
2. ✅ **Login com credenciais inválidas**
3. ✅ **Listagem de heróis após login**
4. ✅ **Criação de novo herói (usuário admin)**
5. ✅ **Controle de permissão (UI)**

---

## 🐛 Bugs encontrados durante os testes

Durante a execução dos testes manuais e automatizados, os seguintes comportamentos inconsistentes foram identificados:

### 1. Valores negativos no campo "Saves", "Fans", "Value"
- **Descrição:**  todos os campos que requerem valores numericos é possivel colocar numeros negativos
- **Severidade:** Média
- **Prioridade:** Média
- **Resultado esperado:** Saves deve ser um número >= 0
---

## 💡 Sugestões de melhoria

- Adicionar atributos `data-cy` nos elementos da aplicação (ex: botão de submit, formulários) para tornar os testes mais estáveis e menos dependentes de classes CSS ou estrutura HTML.
- Implementar validações no backend para evitar que valores negativos sejam persistidos no banco de dados.
- Padronizar a exibição dos campos numéricos (Fans, Saves, Price) para evitar inconsistências visuais.

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js
- Page Objects
- Fixtures

---

## 🚀 Como executar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/DoughxD/cypress-heroes-tests

# 2. Instale as dependências
npm install

# 3. Abra o Cypress
npx cypress open