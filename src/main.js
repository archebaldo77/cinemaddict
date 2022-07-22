import { createUserRankTemplate } from './views/user-rank';
import { createNavigationTemplate } from './views/navigation';
import { createSortTemplate } from './views/sort';
import { createFilmsTemplate } from './views/films';
import { createFilmsListTemplate } from './views/films-list';
import { createFilmCardTemplate } from './views/film-card';
import { createShowMoreTemplate } from './views/show-more';
import { createFooterStatisticsTemplate } from './views/footer-statistics';
import { createFilmDetailsTemplate } from './views/film-details';

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

const render = (container, template, where = `beforeend`) => {
  container.insertAdjacentHTML(where, template);
};

const headerElement = document.querySelector(`header`);
const mainElement = document.querySelector(`main`);
const footerElement = document.querySelector(`footer`);

render(headerElement, createUserRankTemplate(alreadyWatchedFilms));
render(mainElement, createNavigationTemplate(films));
render(mainElement, createSortTemplate());
render(mainElement, createFilmsTemplate());

const filmsElement = mainElement.querySelector(`.films`);

render(filmsElement, createFilmsListTemplate());

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsContainerElement = filmsElement.querySelector(
  `.films-list__container`
);

films
  .slice(0, FILMS_COUNT_ON_START)
  .forEach((film) =>
    render(filmsContainerElement, createFilmCardTemplate(film, comments))
  );

if (films.length > FILMS_COUNT_ON_START) {
  render(filmsListElement, createShowMoreTemplate());

  const showMoreButton = filmsListElement.querySelector(
    `.films-list__show-more`
  );

  showMoreButton.addEventListener(`click`, () => {
    films
      .slice(renderedFilms, renderedFilms + FILMS_COUNT_BY_CLICK)
      .forEach((film) =>
        render(filmsContainerElement, createFilmCardTemplate(film, comments))
      );

    renderedFilms += FILMS_COUNT_BY_CLICK;

    if (renderedFilms >= films.length) {
      showMoreButton.remove();
    }
  });
}

render(footerElement, createFooterStatisticsTemplate(FILMS_COUNT));

document.body.classList.add(`hide-overflow`);
render(document.body, createFilmDetailsTemplate(films[0], comments));
