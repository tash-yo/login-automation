class LoginPage {
  get header() {
    return $('h1').getText();
  }
  get emailAddress() {
    return $('input[data-automation-id="email-field"]');
  }

  get password() {
    return $('input[data-automation-id="password-field"]');
  }

  get continueBtn() {
    return $('button[data-automation-id="button"]');
  }

  get loginWithGoogleBtn() {
    return $('button[data-automation-id="google-sign-in-button"]');
  }

  get signupLink() {
    return $('.Link._291g2aF4hfA0TG1L1tmKiS');
  }

  get forgotPasswordLink() {
    return $('.Link._2yI1vdIL-svQo6kjSRIz1r');
  }

  get backLink() {
    return $('.Link._291g2aF4hfA0TG1L1tmKiS');
  }

  get emailValidationMessage() {
    return $('div[data-automation-id="validation-message"]').getText();
  }

  get loginErrorMessage() {
    return $('._2tb3vp5uEt7R6ZimSOFqlx').getText();
  }

  waitForPage() {
    this.emailAddress.waitForDisplayed();
  }

  open() {
    return browser.url('https://app.notarize.com/login');
  }

  enterEmailAddress(user) {
    this.emailAddress.setValue(user.emailAddress);
    this.continueBtn.click();
  }

  enterPassword(user) {
    this.password.setValue(user.password);
    this.continueBtn.click();
  }

  resetPassword(user) {
    this.forgotPasswordLink.click();
    this.enterEmailAddress(user);
  }

  navigateBack() {
    this.backLink.click();
  }
}

module.exports = new LoginPage();
