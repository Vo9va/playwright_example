import AbstractPage from '../pages/AbcstractPage';

export class DashboardPage extends AbstractPage {
  constructor(page) {
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
