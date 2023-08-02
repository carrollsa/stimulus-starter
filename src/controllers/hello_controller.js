import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Stimulus is connected!")
  }
  greet() {
    console.log("Button clicked!")
  }
}