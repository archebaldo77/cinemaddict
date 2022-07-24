import UserRankView from './views/user-rank-view/user-rank-view';
import NavigationView from './views/navigation-view/navigation-view';
import SortView from './views/sort-view/sort-view';
import FilmsView from './views/films-view/films-view';
import FilmsListView from './views/films-list-view/films-list-view';
import NoFilmsView from './views/no-films-view/no-films-view';
import FilmCardView from './views/film-card-view/film-card-view';
import ShowMoreButtonView from './views/show-more-button-view/show-more-button-view';
import FooterStatisticsView from './views/footer-statistics-view/footer-statistics-view';
import FilmDetailsView from './views/film-details-view/film-details-view';

import { render, remove } from './helpers/render';

import { generateFilm } from './mocks/generate-film';
import { generateComment } from './mocks/generate-comment';

const FILMS_COUNT = 21;
const FILMS_COUNT_ON_START = 5;
const FILMS_COUNT_BY_CLICK = 5;
const COMMENTS_COUNT = 3;

let renderedFilms = FILMS_COUNT_ON_START;

const films = new Array(FILMS_COUNT).fill().map(generateFilm);
const comments = new Array(COMMENTS_COUNT).fill().map(generateComment);

const alreadyWatchedFilms = films.filter(
  (film) => film.userDetails.alreadyWatched
).length;

const renderFilm = (film, comments) => {
  const filmCard = new FilmCardView(film, comments);

  const titleElement = filmCard.element.querySelector(`.film-card__title`);
  const posterElement = filmCard.element.querySelector(`.film-card__poster`);
  const commentsElement =
    filmCard.element.querySelector(`.film-card__comments`);

  [titleElement, posterElement, commentsElement].forEach((el) =>
    el.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const filmDetails = new FilmDetailsView(film, comments);
      const closeButton = filmDetails.element.querySelector(
        `.film-details__close-btn`
      );

      const onFilmDetailsClose = () => {
        document.body.removeChild(filmDetails.element);
        document.body.classList.remove(`hide-overflow`);
        document.removeEventListener(`keydown`, onEscKeyDown);
        filmDetails.removeElement();
      };

      const onEscKeyDown = (evt) => {
        if (evt.key === `Escape`) {
          onFilmDetailsClose();
        }
      };

      closeButton.addEventListener(`click`, onFilmDetailsClose);

      document.body.appendChild(filmDetails.element);
      document.body.classList.add(`hide-overflow`);
      document.addEventListener(`keydown`, onEscKeyDown);
    })
  );

  render(filmsContainerElement, filmCard.element);
};

const headerElement = document.querySelector(`header`);
const mainElement = document.querySelector(`main`);
const footerElement = document.querySelector(`footer`);

render(headerElement, new UserRankView(alreadyWatchedFilms));
render(mainElement, new NavigationView(films));
render(mainElement, new SortView());
render(mainElement, new FilmsView());

const filmsElement = mainElement.querySelector(`.films`);

render(filmsElement, new FilmsListView());

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsContainerElement = filmsElement.querySelector(
  `.films-list__container`
);

if (films.length === 0) {
  render(filmsListElement, new NoFilmsView());
} else {
  films
    .slice(0, FILMS_COUNT_ON_START)
    .forEach((film) => renderFilm(film, comments));

  if (films.length > FILMS_COUNT_ON_START) {
    const showMoreButton = new ShowMoreButtonView();

    render(filmsListElement, showMoreButton);

    showMoreButton.element.addEventListener(`click`, () => {
      films
        .slice(renderedFilms, renderedFilms + FILMS_COUNT_BY_CLICK)
        .forEach((film) => renderFilm(film, comments));

      renderedFilms += FILMS_COUNT_BY_CLICK;

      if (renderedFilms >= films.length) {
        remove(showMoreButton);
      }
    });
  }
}

render(footerElement, new FooterStatisticsView(FILMS_COUNT));
