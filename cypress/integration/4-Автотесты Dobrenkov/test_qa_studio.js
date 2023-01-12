describe('Тестирование testqastudio.me', function () {
    
    it('Корзина', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();  
           
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(4500);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Сергей');
        cy.get('#billing_last_name').type('Добреньков');
        cy.get('#billing_address_1').type('Самара пр 5');
        cy.get('#billing_city').type('Samara');
        cy.get('#billing_state').type('Самарская обл');
        cy.get('#billing_postcode').type('456456');
        cy.get('#billing_phone').type('89277777777');
        cy.get('#billing_email').type('dobrenkovsergei@mail.ru');
        cy.get('#place_order').click();
        cy.contains('Оформение заказа');


        
    })
})    

    
   

