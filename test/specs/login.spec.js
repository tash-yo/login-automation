const LoginPage = require('../pages/login.page');
const identificationPage = require('../pages/landingPages/identificationPage');
const { validUser, invalidUser } = require('../data/users');
const loginPage = require('../pages/login.page');

describe('Notarize Signer Login Page', () => {
  it('should open the login page', () => {
    LoginPage.open();
    LoginPage.waitForPage();
    expect(LoginPage.header).toEqual('Welcome back!');
    expect(LoginPage.signupLink).toBeDisplayed();
  });

  it('should fail to log in with invalid credentials', () => {
    loginPage.enterEmailAddress('');
    expect(loginPage.emailValidationMessage).toEqual('Email Is Required');

    LoginPage.enterEmailAddress(invalidUser);
    expect(loginPage.continueBtn).toBeDisabled();
    expect(LoginPage.forgotPasswordLink).toBeDisplayed();

    LoginPage.enterPassword(invalidUser);
    expect(LoginPage.loginErrorMessage).toEqual('* Email or password invalid');
    loginPage.navigateBack();
  });

  it('should allow user to reset password', () => {
    LoginPage.enterEmailAddress(invalidUser);
    expect(LoginPage.forgotPasswordLink).toBeDisplayed();
    LoginPage.resetPassword(invalidUser);
    expect(LoginPage.continueBtn.getText()).toEqual('Reset Link Sent');

    LoginPage.navigateBack();
  });

  it('should log in with valid credentials', () => {
    LoginPage.enterEmailAddress(validUser);
    expect(LoginPage.forgotPasswordLink).toBeDisplayed();
    LoginPage.enterPassword(validUser);

    identificationPage.waitForPage();
    expect(identificationPage.modalTitle).toEqual('Is this you?');
  });
});
