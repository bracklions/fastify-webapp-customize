describe('ページの表示テスト', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080');
    cy.title().should('include', '商品一覧');
  })
})
