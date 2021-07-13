Cypress.Commands.add('getUserId', (username) => {
    cy.request('GET', "/users?username=" + username).then((response) => {
        cy.wrap(response.body[0].id).as('userId')
    })
})

Cypress.Commands.add('getPostsByUserId', (userId) => {
    cy.request('GET', "/posts?userId=" + userId).then((response) => {
        cy.wrap(response.body).as('posts')
    })
})

Cypress.Commands.add('getCommentsByPost', (postId) => {
    cy.request('GET', "/posts/" + postId + "/comments").then((response) => {
        return(response.body)
    })
})