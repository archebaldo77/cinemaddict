import { createFilmCardTemplate } from './templates/create-film-card-template';

import { createElement } from '../../helpers/common';

export default class FilmCardView {
  #element;
  #film;
  #comments;

  constructor(film, comments) {
    this.#element = null;

    this.#film = film;
    this.#comments = comments;
  }

  get #template() {
    return createFilmCardTemplate(this.#film, this.#comments);
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
