import { expect } from '@playwright/test';
import path from "path";

export default class AbstractPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(link) {
    return this.page.goto(link).catch((e) => this.errorHandling(e, this.page));
  }

  async clickOnElement(selector, options = {}) {
    return this.page
      .locator(selector)
      .first()
      .click({ timeout: options.timeout, force: true })
      .catch((e) => this.errorHandling(e, this.page));
  }

  async setValueOnElement(selector, value, options = {}) {
    return this.page
      .locator(selector)
      .type(value, { timeout: options.timeout, force: true })
      .catch((e) => this.errorHandling(e, this.page));
  }

  async checkElementIsDisplayed(selector){
    await expect(this.page.locator(selector)).toBeVisible()
  }

  async uploadFileOnElement(selector, pathImage ) {
    const filePath = path.resolve('./test-data/images/document.jpg');
    return this.page
      .locator(selector)
      .setInputFiles(filePath)
      .catch((e) => this.errorHandling(e, this.page));
  }

  async checkValuesAreEqual(value1, value2){
    await expect(value1).toEqual(value2)
  }

  async checkTitleAreEqual(value){
    await expect(this.page).toHaveTitle(value)
  }

  errorHandling(error, page) {
    throw new Error(`
// ============  ============  TEST FAILED ============  ============
// Page with URL: ${page.url()}
// ERROR TYPE: ${error.name}
// MESSAGE: ${error.message}
// ============  ============  ============ ============  ============`);
  }
}
