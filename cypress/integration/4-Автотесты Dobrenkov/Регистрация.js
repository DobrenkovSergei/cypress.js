it('Регистрация', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('[name="first_name"]').type('Сергей');
        cy.get('[name="last_name"]').type('Добреньков');
        cy.get('.registration__form > form > [type="email"]').type('dobrenkovsergei@mail.ru');
        cy.get(':nth-child(6) > div > .field').type('+79277185369');
        cy.get('.password-field > .field').type('PkjqPecek123');
        cy.get('[name="repeat-password"]').type('PkjqPecek123');
        cy.get(':nth-child(2) > .nice-checkbox > .ni_checkbox-input-fake').click();
        cy.get('.registration__form--btn').click();





     })