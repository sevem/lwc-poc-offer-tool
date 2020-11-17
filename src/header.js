import { LightningElement, track } from "lwc";

export default class header extends LightningElement {
  @track isArchive = false;
  @track isDraft = false;
  @track isActive = false;

  handleDraft() {
    this.isDraft = !this.isDraft;
    this.isActive = false;
    this.isArchive = false;
  }

  handleArchive() {
    this.isArchive = !this.isDraft;
    this.isDraft = false;
    this.isActive = false;
  }

  handleActive() {
    this.isActive = !this.isDraft;
    this.isDraft = false;
    this.isArchive = false;
  }
}
