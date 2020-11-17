import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  @track products = [
    { id: 0, position: 1 },
    { id: 1, position: 2 },
    { id: 2, position: 3 },
  ];

  addProduct() {
    this.products.push({
      id: this.products.length,
      position: this.products.length + 1,
    });
  }
}
