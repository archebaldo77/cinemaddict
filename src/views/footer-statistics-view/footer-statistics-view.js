import { createFooterStatisticsTemplate } from './templates/create-footer-statistics-template';

import { createElement } from '../../helpers/common';

export default class FooterStatisticsView {
  #element;
  #count;

  constructor(count) {
    this.#element = null;

    this.#count = count;
  }

  get #template() {
    return createFooterStatisticsTemplate(this.#count);
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
