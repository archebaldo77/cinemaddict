import AbstractSmartClassView from '../abstract-smart-class-view/abstract-smart-class-view';

import { createSortTemplate } from './templates/create-sort-template';

export default class SortView extends AbstractSmartClassView {
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

      if (this.#currentSortType === evt.target.dataset.sortType) {
        return;
      }

      this.#currentSortType = evt.target.dataset.sortType;

      cb(this.#currentSortType);

      this._updateView();
      this._restoreHandlers();
    });
  }

  _restoreHandlers() {
    this.setSortTypeChangeHandler(this._callbacks.handleSortTypeChange);
  }
}
