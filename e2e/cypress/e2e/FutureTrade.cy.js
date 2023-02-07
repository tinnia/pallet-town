/// <reference types="cypress" />
describe('Future Trade', () => {
  let tradeList = []
  beforeEach(() => {
    cy.login()
    cy.visitPage('future_trade_list')
    cy.getTradeList()
    cy.get('@tradeList').then((list) => {
      tradeList = list
    })
  })

  it('선물 거래 리스트 화면에서 Create 거래 생성 페이지로 이동한다.', () => {
    cy.contains('Create').click()
    cy.contains('Create Future')
  })

  it('선물 거래 리스트 화면에서 스크롤하면 최대 5번 추가 로딩한다.', () => {
    const firstTrade = tradeList[0]
    const lastTrade = tradeList[tradeList.length - 1]
    const firstElement = cy.contains(firstTrade.tradeId)

    const list = cy.get('section')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')
    cy.scroll(list, 'bottom')

    cy.contains(lastTrade.tradeId)
  })

  it('선물 거래 리스트 화면에서 선물상품목록 중 하나를 선택하면 거래 상세 페이지로 이동한다.', () => {
    cy.contains(tradeList[0].productName).click({ force: true })
    cy.contains('Trade Detail')
  })
})
