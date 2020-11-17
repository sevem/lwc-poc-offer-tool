import { LightningElement, api, track } from "lwc";

/**
 * Show an item
 */
export default class Packages extends LightningElement {
  @api position;

  get options() {
    return [
      { label: "New", value: "new" },
      { label: "In Progress", value: "inProgress" },
      { label: "Finished", value: "finished" },
    ];
  }
}
