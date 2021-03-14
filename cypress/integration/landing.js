/// <reference types='cypress' />

const getByDataCy = selector => {
    return cy.get(`[data-cy=${selector}]`)
}

describe('Landing Page', () => {
    before(() => {
        cy.visit('http://localhost:3000')
        // Cypress.env.client.dev.baseUrl
    })

    it('Should be able to create a new user', () => {})

    it('Should be able to sign in using the created account', () => {
        const headerItems = ['logo', 'home', 'features', 'pricing', 'blog', 'contact-us']

        cy.get("[data-cy='header-logo']").trigger('mouseover')
        cy.get("[data-cy='header-home']").trigger('mouseover')
        cy.get("[data-cy='header-features']").trigger('mouseover')
        cy.get('[data-cy=header-pricing]').trigger('mouseover')
        cy.get('[data-cy=header-blog]').trigger('mouseover')
        cy.get('[data-cy=header-contact-us]').trigger('mouseover')

        cy.get("[data-cy='header-btn-sign-in']").click()

        cy.get("[data-cy='modal-btn-submit']").click()

        // getByDataCy('modal-input-email').focus().type('arthur@example.com')

        // getByDataCy('modal-input-password').focus().type('7556')
    })

    it('Should be able to delete the created user', () => {})
})
