Cypress.Commands.add('visitPage', (urlKey = 'main') => {
  cy.fixture('environment.json').then(({ url }) => cy.visit(Cypress.env('BASE_URL') + url[urlKey]))
})

Cypress.Commands.add('login', () => {
  cy.visitPage('main')
  cy.contains('SSO Login').click({ force: true })
})

Cypress.Commands.add('getTradeList', () => {
  cy.fixture('future_trade_list.json').then((list) => {
    cy.wrap(list).as('tradeList')
  })
})

Cypress.Commands.add('getProductList', () => {
  cy.fixture('future_product_list.json').then((list) => {
    cy.wrap(list).as('productList')
  })
})

Cypress.Commands.add('scroll', (target, location) => {
  cy.wait(500)
  target.scrollTo(location, { ensureScrollable: true })
})
