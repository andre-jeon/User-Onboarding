describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        // this is setup for the actual test
        cy.url().should('include', 'localhost')
        // assert that the site we landed at is the correct one
    })

    it('submit button is disabled', () => {
        cy.get('#submitBtn').should('be.disabled')
    })

    it('can type a name for a new user', () => {
        cy.get('input[name="name"]')
        .type('André Jeon')
        .should('have.value', 'André Jeon')
    })

    it('can type an email for a new user', () => {
        cy.get('input[name="email"]')
        .type('andrejeon@outlook.com')
        .should('have.value', 'andrejeon@outlook.com')
    })

    it('can type a password for a new user', () => {
        cy.get('input[name="password"]')
        .type('Aud238156?')
        .should('have.value', 'Aud238156?')
    })

    it('can check the terms of service checkbox', () => {
        cy.get('input[name="terms"]').check()
    })

    it('submit button is not disabled', () => {
        cy.get('#submitBtn').should('not.be.disabled')
    })

    it('can submit a new user', () => {
        cy.get('#submitBtn').click()
    })
})