/// <reference types="cypress" />
describe('Future Product', () => {
  let productList = []
  beforeEach(() => {
    cy.login()
    cy.visitPage('future_product_list')
    cy.getProductList()
    cy.get('@productList').then((list) => {
      productList = list
    })
  })

  it('선물 상품 리스트 화면에서 Create 상품 생성 페이지로 이동한다.', () => {
    cy.contains('Create').click({ force: true })
    cy.contains('Create Future')
  })

  it('선물 상품 리스트 화면에서 스크롤하면 최대 5번 추가 로딩한다.', () => {
    const firstProduct = productList[0]
    const lastProduct = productList[productList.length - 1]
    const firstElement = cy.contains(firstProduct.productName)

    const list = cy.get('section')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')

    cy.contains(lastProduct.productName)
  })

  it('선물 상품 리스트 화면에서 선물상품목록 중 하나를 선택하면 상품 상세 페이지로 이동한다.', () => {
    cy.contains(productList[0].productName).click({ force: true })
    cy.contains('Future Detail')
  })
})
