describe('Тестирование https://login.qa.studio/', function () {

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('dobrenkovsergei@mail.ru');
        cy.get('#restoreEmailButton').click();

        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();

    })

    it('позитивный кейс авторизации: верный логин и пароль', function () {
        cy.reload();
        
        cy.get('#mail').type('german@dolnikov.ru ');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');

    })

    it('негативный кейс авторизации: верный логин, неправильный пароль', function () {
        cy.reload();
        
        cy.get('#mail').type('german@dolnikov.ru ');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#form > .header')
    })


    it('негативный кейс авторизации: не правильный логин, правильный пароль', function () {
        cy.reload();
        
        cy.get('#mail').type('man@dolnikov.ru ');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');

    })



    it('проверка на негативный кейс валидации', function () {
        cy.reload();
        
        cy.get('#mail').type('mandolnikov.ru ');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('проверку на привидение к строчным буквам в логине', function () {
        cy.reload();
        
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
    })







})
