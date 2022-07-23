import { createSortTemplate } from './templates/create-sort-template';

import { createElement } from '../../helpers/common';

export default class SortView {
  #element = null;

  get #template() {
    return createSortTemplate();
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
