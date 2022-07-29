import AbstractSmartClassView from '../abstract-smart-class-view/abstract-smart-class-view';

import { createFilmDetailsTemplate } from './templates/create-film-details-template';

export default class FilmDetailsView extends AbstractSmartClassView {
  #film;
  #comments;

  #state;

  constructor(film, comments) {
    super();

    this.#film = film;
    this.#comments = comments;

    this.#state = {
      emotion: null,
      text: null,
    };

    this.#setEmotionClickHandler(this.#handleEmotionClick);
  }

  get _template() {
    return createFilmDetailsTemplate(this.#film, this.#comments, {
      emotion: this.#state.emotion,
    });
  }

  setCloseClickHandler(cb) {
    this._callbacks.handleCloseClick = cb;

    this.element
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, cb);
  }

  setControlClickHandler(cb) {
    this._callbacks.handleControlClick = cb;

    this.element
      .querySelector(`.film-details__controls`)
      .addEventListener(`click`, (evt) => {
        if (evt.target.tagName !== `INPUT`) {
          return;
        }

        cb(evt.target.dataset.controlType);
      });
  }

  #setEmotionClickHandler(cb) {
    this._callbacks.handleEmotionClick = cb;

    this.element
      .querySelector(`.film-details__emoji-list`)
      .addEventListener(`click`, (evt) => {
        if (evt.target.tagName !== `INPUT`) {
          return;
        }

        this.#state.emotion = evt.target.value;

        cb();
      });
  }

  #handleEmotionClick = () => {
    this._updateView();
    this._restoreHandlers();
  };

  _restoreHandlers() {
    this.setCloseClickHandler(this._callbacks.handleCloseClick);
    this.setControlClickHandler(this._callbacks.handleControlClick);
    this.#setEmotionClickHandler(this._callbacks.handleEmotionClick);
  }
}
