import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

test.describe.only('login/logout', () => {
  let dashboardPage;
  let homePage;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    console.log("jjj")
  });

  test.afterAll(async () => {
    console.log("jjj1")
  });

  test('test-login/logout', async () => {
    await test.step('Call login popup', async () => {

      await homePage.navigateToHomePage();
      await homePage.checkTitleEqualTo(/Home page - Capitalix/)
      await homePage.clickLoginButton();
      await homePage.checkLoginDialogIsDisplayed();
    });

    await test.step('fill login data', async () => {
      await loginPage.enterEmail();
      await loginPage.enterPassword();
      await loginPage.clickSubmitButton();
    });

    await test.step('Check dashboard displayed after login', async () => {
      await dashboardPage.checkBalanceIsDisplayed();
    });
  });
});
