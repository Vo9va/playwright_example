import { Page } from '@playwright/test';
import AbstractPage from './AbcstractPage';

export class DashboardPage extends AbstractPage {
  constructor(page: Page) {
    super(page);
  }
  /** Locators **/
  balanceDetails = '.balance-section.balance-info';

  /** Methods **/

  // /** Assertions **/
  async checkBalanceIsDisplayed() {
    await this.checkElementIsDisplayed(this.balanceDetails);
  }
}
