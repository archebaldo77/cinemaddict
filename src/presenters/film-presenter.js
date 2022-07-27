import FilmCardView from '../views/film-card-view/film-card-view';
import FilmDetailsView from '../views/film-details-view/film-details-view';

import { render, remove, replace } from '../helpers/render';

export default class FilmPresenter {
  #container;

  #filmCardView;
  #filmDetailsView;

  #film;
  #comments;

  #handleDataChange;
  #handleViewChange;

  constructor(container) {
    this.#container = container;

    this.#filmCardView = null;
    this.#filmDetailsView = null;

    this.#film = null;
    this.#comments = null;

    this.#handleDataChange = null;
    this.#handleViewChange = null;
  }

  init(film, comments, handleDataChange, handleViewChange) {
    this.#film = film;
    this.#comments = comments;

    this.#handleDataChange = handleDataChange;
    this.#handleViewChange = handleViewChange;

    this.#createFilmCardView(this.#film, this.#comments);

    render(this.#container, this.#filmCardView);
  }

  update(updatedFilm, comments) {
    this.#film = updatedFilm;
    this.#comments = comments;

    const prevFilmCardView = this.#filmCardView;
    this.#createFilmCardView(this.#film, this.#comments);

    replace(this.#filmCardView, prevFilmCardView);

    if (this.#filmDetailsView !== null) {
      const prevFilDetailsView = this.#filmDetailsView;
      const scrollTop = prevFilDetailsView.element.scrollTop;
      this.#createFilmDetailsView(this.#film, this.#comments);

      replace(this.#filmDetailsView, prevFilDetailsView);
      this.#filmDetailsView.element.scrollTop = scrollTop;
    }
  }

  chageViewToCard() {
    this.#handleFilmDetailsClose();
  }

  #createFilmCardView(film, comments) {
    this.#filmCardView = new FilmCardView(film, comments);

    this.#filmCardView.setFilmDetailsOpenClickHandler(
      this.#handleFilmDetailsOpen
    );
    this.#filmCardView.setControlClickHandler(this.#handleControlChange);
  }

  #createFilmDetailsView(film, comments) {
    this.#filmDetailsView = new FilmDetailsView(film, comments);

    this.#filmDetailsView.setCloseClickHandler(this.#handleFilmDetailsClose);
    this.#filmDetailsView.setControlClickHandler(this.#handleControlChange);
  }

  #handleFilmDetailsOpen = () => {
    this.#handleViewChange();

    this.#createFilmDetailsView(this.#film, this.#comments);
    document.body.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this.#handleEscKeyDown);
    render(document.body, this.#filmDetailsView);
  };

  #handleFilmDetailsClose = () => {
    remove(this.#filmDetailsView);
    document.body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this.#handleEscKeyDown);
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
