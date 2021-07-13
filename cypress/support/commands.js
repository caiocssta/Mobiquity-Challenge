Cypress.Commands.add('getUserData', (username) => {
    cy.request('GET', "/users?username=" + username).then((response) => {
        cy.wrap(response.body).as('userData')
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

Cypress.Commands.add('validateEmail', (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
})