import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { apiHelpers } from '../helpers/apiHelpers';
import customerData from '../test-data/customerData';
import { DocumentsPage } from "../pages/DocumentsPage";

test.describe('Upload documents', () => {

  let loginPage;
  let dashboardPage;
  let customer;
  let documentsPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    documentsPage = new DocumentsPage(page);

    customer = customerData.getCustomerLead();
  });

  test('Authorization by cookies', async ({ page }) => {
    await apiHelpers.createCustomer(customer)

    await loginPage.setAuthCookiesAndOpenAssetsPage(customer, '/trade/account?accountTab=documents', 'registration');
    await documentsPage.clickPasswordButton();
    await documentsPage.clickUploadButton();
    await documentsPage.uploadFile();
    await page.waitForTimeout(2000)
  })
})
