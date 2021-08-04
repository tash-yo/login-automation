class identificationPage {
  get modal() {
    return $('div[data-automation-id="illustration-modal-container"]');
  }

  get modalTitle() {
    return $('.IllustrationModal--title').getText();
  }

  waitForPage() {
    this.modal.waitForExist();
  }
}

module.exports = new identificationPage();
