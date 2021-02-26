export default class CardSideElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML += this.dataset.backside ? 'card-backside' : 'card-frontside';
    this.style.border = '1px solid red';
  }
}