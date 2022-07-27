import FilmPresenter from './film-presenter';

import NavigationView from '../views/navigation-view/navigation-view';
import SortView from '../views/sort-view/sort-view';
import FilmsView from '../views/films-view/films-view';
import FilmsListView from '../views/films-list-view/films-list-view';
import NoFilmsView from '../views/no-films-view/no-films-view';
import ShowMoreButtonView from '../views/show-more-button-view/show-more-button-view';

import { render, remove } from '../helpers/render';
import { updateItem } from '../helpers/common';

const FILMS_COUNT_ON_START = 5;
const FILMS_COUNT_BY_CLICK = 5;

export default class MainPresenter {
  #container;
  #filmsContainer;

  #filmsPresenters;

  #navigationView;
  #sortView;
  #filmsView;
  #filmsListView;
  #noFilmsView;
  #showMoreButtonView;

  #renderedFilms;

  #films;
  #comments;

  constructor(container) {
    this.#container = container;

    this.#filmsPresenters = new Map();

    this.#navigationView = null;
    this.#sortView = new SortView();
    this.#filmsView = new FilmsView();
    this.#filmsListView = new FilmsListView();

    this.#noFilmsView = new NoFilmsView();
    this.#showMoreButtonView = new ShowMoreButtonView();

    this.#renderedFilms = FILMS_COUNT_ON_START;

    this.#filmsContainer = this.#filmsListView.element.querySelector(
      `.films-list__container`
    );

    this.#films = null;
    this.#comments = null;
  }

  init(films, comments) {
    this.#films = films;
    this.#comments = comments;

    const isFilms = this.#films.length > 0 ? true : false;

    this.#navigationView = new NavigationView(this.#films);

    render(this.#container, this.#navigationView);
    isFilms && this.#renderSort();
    render(this.#container, this.#filmsView);

    if (!isFilms) {
      return this.#renderNoFilms();
    }

    render(this.#filmsView, this.#filmsListView);

    this.#renderFilms(0, FILMS_COUNT_ON_START);

    if (this.#films.length > FILMS_COUNT_ON_START) {
      this.#renderShowMoreButton();
    }
  }

  #renderSort() {
    render(this.#container, this.#sortView);
  }

  #renderFilms(from, to) {
    this.#films.slice(from, to).forEach((film) => {
      const filmPresenter = new FilmPresenter(this.#filmsContainer);
      this.#filmsPresenters.set(film.id, filmPresenter);
      filmPresenter.init(
        film,
        this.#comments,
        this.#handleDataChange,
        this.#handleViewChange
      );
    });
  }

  #renderNoFilms() {
    render(this.#filmsView, this.#noFilmsView);
  }

  #renderShowMoreButton() {
    render(this.#filmsListView, this.#showMoreButtonView);
    this.#showMoreButtonView.setClickHandler(this.#handleShowMoreButtonClick);
  }

  #handleShowMoreButtonClick = () => {
    this.#renderFilms(
      this.#renderedFilms,
      this.#renderedFilms + FILMS_COUNT_BY_CLICK
    );

    this.#renderedFilms += FILMS_COUNT_BY_CLICK;

    if (this.#renderedFilms >= this.#films.length) {
      remove(this.#showMoreButtonView);
    }
  };

  #handleDataChange = (updatedFilm) => {
    this.#films = updateItem(this.#films, updatedFilm);

    this.#filmsPresenters
      .get(updatedFilm.id)
      .update(updatedFilm, this.#comments);
  };

  #handleViewChange = () => {
    this.#filmsPresenters.forEach((presenter) => presenter.chageViewToCard());
  };
}
