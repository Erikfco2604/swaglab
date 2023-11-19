describe("Test Suite - Conjunto de Pruebas", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")

      })

    it ("Validar Pagina de Inicio", () => {
    
        cy.get('.login_credentials_wrap-inner').should("be.visible")
        cy.get('.login_logo').contains("Swag Labs")
    })
    
    it ("Prueba E2E Compra On Line", () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Erik")
        cy.get('[data-test="lastName"]').type("Peña")
        cy.get('[data-test="postalCode"]').type("1570000")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').contains("Thank you for your order!")
    })
    
    it ("Prueba Seleccion-deseleccion de producto", () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').contains("1")
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        
       
    })
    

    })