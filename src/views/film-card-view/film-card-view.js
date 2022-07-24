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
}
