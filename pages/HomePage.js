import AbstractPage from '../pages/AbcstractPage';

export class HomePage extends AbstractPage {
  constructor(page) {
    super(page);
  }

  /** Locators **/

  loginButton =  '.header__actions app-login-button';
  loginDialog = 'app-login-dialog-component';
  /** Methods **/

  async navigateToHomePage() {
    await this.navigateTo('https://www.stage-capitalix.com/');
  }

  async clickLoginButton() {
    await this.clickOnElement(this.loginButton);

  }

  // /** Assertions **/
  async checkLoginDialogIsDisplayed() {
    await this.checkElementIsDisplayed(this.loginDialog);
  }
  async checkTitleEqualTo(value) {
    await this.checkTitleAreEqual(value);
  }
}
