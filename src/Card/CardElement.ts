export default class CardElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML += 'business-card';
    this.style.border = '1px solid black';
  }
}