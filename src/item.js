import { LightningElement, api, track } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api position;

  @track showDetails = false;

  get positionLabel() {
    return "#" + this.position;
  }

  get options() {
    return [
      { label: "New", value: "new" },
      { label: "In Progress", value: "inProgress" },
      { label: "Finished", value: "finished" },
    ];
  }

  handleShowDetails(event) {
    this.showDetails = !this.showDetails;
  }
}
