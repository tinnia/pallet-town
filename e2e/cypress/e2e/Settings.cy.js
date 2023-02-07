/// <reference types="cypress" />

describe('Settings', () => {
  let user
  beforeEach(() => {
    cy.fixture('user.json').then((_user) => {
      user = _user
    })
    cy.login()
  })

  it('권미소는 자신의 이름을 설정 페이지로 이동한다.', () => {
    cy.contains(user.name).click()
    cy.contains('My Book').click()
    cy.wait(100)
    cy.contains('Settings')
    cy.contains('BN09_FITRA1').click()
    cy.contains('Book Detail')
  })
})
