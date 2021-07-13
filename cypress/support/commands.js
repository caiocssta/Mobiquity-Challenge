Cypress.Commands.add('getUserId', (username) => {
    cy.request('GET', "/users?username=" + username).then((response) => {
        cy.wrap(response.body[0].id).as('userId')
    })
})

