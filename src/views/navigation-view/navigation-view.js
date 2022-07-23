import { createNavigationTemplate } from './templates/create-navigation-template';

import { createElement } from '../../helpers/common';

export default class NavigationView {
  #element;
  #films;

  constructor(films) {
    this.#element = null;

    this.#films = films;
  }

  get #template() {
    return createNavigationTemplate(this.#films);
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
