import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createFilmDetailsTemplate } from './templates/create-film-details-template';

import { replace } from '../../helpers/render';

export default class FilmDetailsView extends AbstractClassView {
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

  updateView() {
    const prevElement = this.element;
    const scrollTop = this.element.scrollTop;
    this.removeElement();
    replace(this.element, prevElement);
    this.element.scrollTop = scrollTop;
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
    this.updateView();
    this.#restoreListeners();
  };

  #restoreListeners() {
    this.setCloseClickHandler(this._callbacks.handleCloseClick);
    this.setControlClickHandler(this._callbacks.handleControlClick);
    this.#setEmotionClickHandler(this._callbacks.handleEmotionClick);
  }
}
