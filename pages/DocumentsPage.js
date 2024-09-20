import AbstractPage from '../pages/AbcstractPage';

export class DocumentsPage extends AbstractPage {
  constructor(page) {
    super(page);
  }

  /** Locators **/
  passwordDocumentButton = '//mat-radio-button[contains(@class, "next-radio")][contains(., "Passport")]';
  uploadButton = '.file-link-wrapper'
  fileInput = 'input[type="file"]'
  /** Methods **/
//   await this.waitThanSetValue(await this.$fileInput, remoteFilePath);
//
//
//   await page.click('input[type="radio"][id="passportRadioButton"]');
//
//   // Поле для завантаження файлу
//   const fileInput = await page.$('input[type="file"][id="kycFileInput"]');
//
//   // Завантажуємо файл
//   const filePath = 'path/to/your/passport.png';
//   await fileInput.setInputFiles(filePath);
//
//   // Очікування на прогрес завантаження, поки не зникне
//   await page.waitForSelector('#uploadProgress', { state: 'hidden' });
//
// // Перевіряємо статус завантаженого файлу
// await page.waitForSelector('#uploadedStatus', { state: 'visible' });

  async clickPasswordButton() {
    await this.clickOnElement(this.passwordDocumentButton);
  }

  async clickUploadButton() {
    await this.clickOnElement(this.uploadButton);
  }

  async uploadFile() {
    await this.uploadFileOnElement(this.fileInput);

  }

// /** Assertions **/

}
