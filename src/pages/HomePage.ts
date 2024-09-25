import { Page } from '@playwright/test';
import AbstractPage from './AbcstractPage';

export class HomePage extends AbstractPage {
  constructor(page: Page) {
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
  async checkTitleEqualTo(value: string) {
    await this.checkTitleAreEqual(value);
  }
}
