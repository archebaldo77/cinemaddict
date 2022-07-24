import { createElement } from '../../helpers/render';

export default class AbstractClassView {
  #element;

  constructor() {
    this.#element = null;
    this._callbacks = {};

    if (new.target === AbstractClassView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one.`);
    }
  }

  get _template() {
    throw new Error(`Abstract method not implemented: get _template`);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this._template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
