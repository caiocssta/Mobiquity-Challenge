/// <reference types="cypress" />

describe('Validate user posts and data', () => {
    var username, userId

    before(() => {
        cy.fixture('userInformation').then((props) => {
            username = props.username
        })
    })

    beforeEach(() => {
        cy.getUserData(username).then((userData) => {
            userId = userData[0].id
            cy.getPostsByUserId(userData[0].id)
        })
    })

    it('Return correct the user id', () => {
        expect(userId).to.be.equal(9)
    })

    it('Return correct the post length', () => {
        cy.get('@posts').should('have.length', 10)
    })

    it('Check validity of emails', () => {
        cy.get('@posts').each((post) => {
            cy.getCommentsByPost(post.id).then((result) => {
                result.forEach((elem) => {
                    cy.validateEmail(elem.email).should('be.true')
                })
            })
        })
    })

    it('Return empty data for invalid username', () => {
        cy.getUserData('M0B1QUITY').then((response) => {
            expect(response).to.be.empty
        })
    })

    it('Return empty comments for invalid post ID', () => {
        cy.request({url: '/posts/111/comments', failOnStatusCode: false }).then((response) => {
            expect(response.body).to.be.empty
        })
    })

    it('Return status code 404 for invalid post ID', () => {
        cy.request({url: '/posts/333', failOnStatusCode: false }).should('have.property', 'status', 404)
    })

    it('Return status code 404 for invalid user ID', () => {
        cy.request({url: '/users/333', failOnStatusCode: false }).should('have.property', 'status', 404)
    })

    it('Return status code 201 when creating a new post', () => {
        cy.request({
            url: '/posts', 
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }), 
        }).should('have.property', 'status', 201)
    })

    it('Return status code 200 when updating an existing post', () => {
        cy.request({
            url: '/posts/1', 
            method: 'PUT',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }), 
        }).should('have.property', 'status', 200)
    })
    
    it('Return status code 200 when deleting an existing post', () => {
        cy.request({
            url: '/posts/1', 
            method: 'DELETE'
        }).should('have.property', 'status', 200)
    })

})
