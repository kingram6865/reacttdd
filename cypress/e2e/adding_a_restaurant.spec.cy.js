describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Sushi Place'

    cy.visit('http://localhost:1234')
    cy.get('[data-testid=newRestaurantName]').should('not.be.visibler') 
    cy.get('[data-testid=addRestaurantButton]').click();
    cy.get('[data-testid=newRestaurantName]').type(restaurantName,{force:true})
    cy.get('[data-testid=saveNewRestaurantButton]').click()
    cy.get('[data-testid=newRestaurantName]').should('not.be.visible') 

    cy.contains(restaurantName)
  })
})
