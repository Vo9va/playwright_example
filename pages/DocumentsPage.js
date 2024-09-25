import AbstractPage from '../pages/AbcstractPage';

export class DocumentsPage extends AbstractPage {
  constructor(page) {
    super(page);
  }

  /** Locators **/
  passwordDocumentButton = '//mat-radio-group/mat-radio-button[@value="\'passport\'"]';
  uploadButton = '.file-link-wrapper'
  fileInput = 'input[type="file"]'

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
