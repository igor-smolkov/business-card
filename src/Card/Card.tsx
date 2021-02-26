import React from 'react';
import './Card.scss';
import CardElement from './CardElement'
import CardSideElement from './CardSideElement'

export default class Card extends React.Component {
  constructor(props :any) {
    super(props);
    this.regElem('b-card', CardElement, 'article');
    this.regElem('b-card-side', CardSideElement, 'section');
  }
  render() {
    return (
      <article is="b-card">
        <section is="b-card-side">
          <p is="person-info">
            <h1>Имя Фамилия</h1>
            <p>Специальность</p>
          </p>
        </section>
        <section is="b-card-side" data-backside>Подробнее</section>
      </article>
    );
  }
  regElem(elemName :string, elem :any, likeName :string) {
    customElements.get(elemName) || customElements.define(elemName, elem, {extends: likeName});
  }
}
