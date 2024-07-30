class LoginPage {
  usernameField = '#user-name';
  passwordField = '#password';
  loginButton = "#login-button";
  appLogo = '".app_logo"';
  navigate() {
    cy.visit('/', { failOnStatusCode: false })
  }

  fillUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton();
  }

  verifyLogin() {
    cy.contains("Products").should("be.visible");
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  }
}

export default new LoginPage;
