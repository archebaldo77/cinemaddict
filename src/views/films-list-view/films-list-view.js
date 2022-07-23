import { createFilmsListTemplate } from './templates/create-films-list-template';

import { createElement } from '../../helpers/common';

export default class FilmsListView {
  #element = null;

  get #template() {
    return createFilmsListTemplate();
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
