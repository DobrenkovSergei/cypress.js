describe('Тестирование staya', function () {
    
    it('авторизация с помощью логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('dobrenkovsergei@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('PkjqPecek123');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains('Мои заказы');
        
    })

    it('выход из профиля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
    })



    it('авторизация с помощью правильного логина и не правильного пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('dobrenkovsergei@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('PkjqPecek');
        cy.get('.auth-form__submit').click();

        cy.contains('Невозможно войти с предоставленными учетными данными.');
        
   })





     
})
