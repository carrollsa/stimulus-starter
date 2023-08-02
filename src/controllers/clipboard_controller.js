import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["pin"];

  print() {
    console.log(`Pin is ${this.pin}`);
  }

  get pin() {
    return this.pinTarget.value;
  }
}
