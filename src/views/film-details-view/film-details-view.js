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
}
