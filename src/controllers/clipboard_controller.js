import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source"];

  copy() {
    navigator.clipboard.writeText(this.source)
  }

  get source() {
    return this.sourceTarget.value;
  }
}
