import { createFilmsTemplate } from './templates/create-films-template';

import { createElement } from '../../helpers/common';

export default class FilmsView {
  #element = null;

  get #template() {
    return createFilmsTemplate();
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
