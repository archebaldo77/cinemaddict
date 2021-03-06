import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createFilmDetailsTemplate } from './templates/create-film-details-template';

export default class FilmDetailsView extends AbstractClassView {
  #film;
  #comments;

  constructor(film, comments) {
    super();

    this.#film = film;
    this.#comments = comments;
  }

  get _template() {
    return createFilmDetailsTemplate(this.#film, this.#comments);
  }

  setCloseClickHandler(cb) {
    this.element
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, cb);
  }

  setControlClickHandler(cb) {
    this.element
      .querySelector(`.film-details__controls`)
      .addEventListener(`click`, (evt) => {
        if (evt.target.tagName !== `INPUT`) {
          return;
        }

        cb(evt.target.dataset.controlType);
      });
  }
}
