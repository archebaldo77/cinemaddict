import { createUserRankTemplate } from './templates/create-user-rank-template';

import { createElement } from '../../helpers/common';

export default class UserRankView {
  #element;
  #count;

  constructor(count) {
    this.#element = null;

    this.#count = count;
  }

  get #template() {
    return createUserRankTemplate(this.#count);
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
