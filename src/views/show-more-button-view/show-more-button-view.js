import { createShowMoreButtonTemplate } from './templates/create-show-more-button-template';

import { createElement } from '../../helpers/common';

export default class ShowMoreButtonView {
  #element = null;

  get #template() {
    return createShowMoreButtonTemplate();
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
