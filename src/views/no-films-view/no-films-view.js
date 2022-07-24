import { createNoFilmsTemplate } from './templates/create-no-films-template';

import { createElement } from '../../helpers/common';

export default class NoFilmsView {
  #element = null;

  get #template() {
    return createNoFilmsTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.#template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
