describe('ページの表示テスト', () => {
  it('example.comにアクセスする', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain');
  })

  it('Webサイトを開きログインする', () => {
    // cy.visit('http://localhost:8080');
    cy.visit(Cypress.env('BASE_URL'));
    cy.title().should('include', '商品一覧');
    cy.contains('ログインする').click();
    cy.get('input[name="username"]').type('user1');
    cy.get('input[name="password"]').type('super-strong-passphrase');
    cy.get('input[value="ログイン"]').click();
    cy.contains('user1 さん').should('be.visible');
  })

})
