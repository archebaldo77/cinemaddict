import FilmCardView from '../views/film-card-view/film-card-view';
import FilmDetailsView from '../views/film-details-view/film-details-view';

import { render, remove } from '../helpers/render';

export default class FilmPresenter {
  #container;

  #filmCardView;
  #filmDetailsView;

  #film;
  #comments;

  #handleDataChange;

  constructor(container) {
    this.#container = container;

    this.#filmCardView = null;
    this.#filmDetailsView = null;

    this.#film = null;
    this.#comments = null;

    this.#handleDataChange = null;
  }

  init(film, comments, handleDataChange) {
    this.#film = film;
    this.#comments = comments;

    this.#handleDataChange = handleDataChange;

    this.#filmCardView = new FilmCardView(this.#film, this.#comments);

    this.#filmCardView.setFilmDetailsOpenClickHandler(
      this.#handleFilmDetailsOpen
    );

    this.#filmCardView.setControlClickHandler(this.#handleControlChange);

    render(this.#container, this.#filmCardView);
  }

  #handleFilmDetailsOpen = () => {
    this.#filmDetailsView = new FilmDetailsView(this.#film, this.#comments);
    this.#filmDetailsView.setCloseClickHandler(this.#handleFilmDetailsClose);

    document.body.appendChild(this.#filmDetailsView.element);
    document.body.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this.#handleEscKeyDown);
  };

  #handleFilmDetailsClose = () => {
    document.body.removeChild(this.#filmDetailsView.element);
    document.body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this.#handleEscKeyDown);
    remove(this.#filmDetailsView);
  };

  #handleEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      this.#handleFilmDetailsClose();
    }
  };

  #handleControlChange = (controlType) => {
    const updatedFilm = {
      ...this.#film,
      userDetails: {
        ...this.#film.userDetails,
        [controlType]: !this.#film.userDetails[controlType],
      },
    };

    this.#handleDataChange(updatedFilm);
  };
}
