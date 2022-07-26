import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createFilmCardTemplate } from './templates/create-film-card-template';

export default class FilmCardView extends AbstractClassView {
  #film;
  #comments;

  constructor(film, comments) {
    super();

    this.#film = film;
    this.#comments = comments;
  }

  get _template() {
    return createFilmCardTemplate(this.#film, this.#comments);
  }

  setFilmDetailsOpenClickHandler(cb) {
    const titleElement = this.element.querySelector(`.film-card__title`);
    const posterElement = this.element.querySelector(`.film-card__poster`);
    const commentsElement = this.element.querySelector(`.film-card__comments`);

    [titleElement, posterElement, commentsElement].forEach((el) =>
      el.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        cb();
      })
    );
  }

  setControlClickHandler(cb) {
    this.element
      .querySelector(`.film-card__controls`)
      .addEventListener(`click`, (evt) => {
        if (evt.target.tagName !== `BUTTON`) {
          return;
        }

        cb(evt.target.dataset.controlType);
      });
  }
}
