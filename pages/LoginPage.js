import AbstractPage from '../pages/AbcstractPage';
import { apiHelpers } from '../helpers/apiHelpers';
import agent from '../helpers/agent.helper';

const cookie = require('cookie');

export class LoginPage extends AbstractPage {
  constructor(page) {
    super(page);
  }

  /** Locators **/
  usernameField = 'input.te-email-field';
  passwordField = 'input.te-password-field';
  submitButton = '.submit-button button'

  /** Methods **/
  async setAuthCookiesAndOpenAssetsPage(customer, url = '/trade/assets/all', form) {
    await this.page.goto('https://www.stage-capitalix.com');

    const res = await apiHelpers.loginCustomer(agent, customer);

    const cookies = form === 'registration' ? cookie.parse(res.request.cookies) : res.headers['set-cookie'];

    await this.page.context().addCookies([
      { name: 'sid', value: form === 'registration'? cookies.sid : cookie.parse(cookies[0]).sid, domain: '.stage-capitalix.com', path: '/' },
      { name: 'auth_id', value: form === 'registration'? cookies.auth_id : cookie.parse(cookies[2]).auth_id, domain: '.stage-capitalix.com', path: '/' },
    ]);
    await this.page.goto(`https://www.stage-capitalix.com${url}`);
    return cookies;
  }

  async enterEmail() {
    await this.setValueOnElement(this.usernameField, 'portfolio_monitor_test@protonixltd.com');
  }

  async enterPassword() {
    await this.setValueOnElement(this.passwordField, '123456Aa@');
  }

  async clickSubmitButton() {
    await this.clickOnElement(this.submitButton);
  }

  // /** Assertions **/
}
