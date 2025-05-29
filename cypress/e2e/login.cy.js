describe('Testes de login', () => {
  
  it('Login com sucesso', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  })

  it('Login inválido', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('renato')
    cy.get('#password').type('123!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })
})