import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { apiHelpers } from '../helpers/apiHelpers';
import * as constants from '../test-data/constants';

test.describe('login/logout', async () => {
  let homePage;
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test.afterEach(async ({ page }) => {
    await apiHelpers.logoutCustomer();
  })

  test('Login customer', async () => {
    await homePage.navigateToHomePage();
    await homePage.checkTitleEqualTo(/Home page - Capitalix/)
    await homePage.clickLoginButton();
    await homePage.checkLoginDialogIsDisplayed();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickSubmitButton();
    await dashboardPage.checkBalanceIsDisplayed();
  });

  test('Login customer from api', async () => {
    let res = await apiHelpers.loginCustomer(constants.portfolioMonitorCustomer)
    expect(res.statusCode).toEqual(200)
  });

  test('Authorization by cookies', async ({ page }) => {
    await loginPage.setAuthCookiesAndOpenAssetsPage(constants.portfolioMonitorCustomer);
    await page.waitForTimeout(1000)
  })
})
