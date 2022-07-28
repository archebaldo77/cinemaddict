import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createSortTemplate } from './templates/create-sort-template';

import { replace } from '../../helpers/render';

export default class SortView extends AbstractClassView {
  #currentSortType;

  constructor(currentSortType) {
    super();

    this.#currentSortType = currentSortType;
  }

  get _template() {
    return createSortTemplate(this.#currentSortType);
  }

  setSortTypeChangeHandler(cb) {
    this._callbacks.handleSortTypeChange = cb;

    this.element.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      this.#currentSortType = evt.target.dataset.sortType;

      cb(this.#currentSortType);

      this.updateView();
    });
  }

  updateView() {
    const prevElement = this.element;
    this.removeElement();
    replace(this.element, prevElement);

    this.#restoreListeners();
  }

  #restoreListeners() {
    this.setSortTypeChangeHandler(this._callbacks.handleSortTypeChange);
  }
}
