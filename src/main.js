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

const FILMS_COUNT = 20;
const COMMENTS_COUNT = 3;

const films = new Array(FILMS_COUNT).fill().map(generateFilm);
const comments = new Array(COMMENTS_COUNT).fill().map(generateComment);

const render = (container, template, where = `beforeend`) => {
  container.insertAdjacentHTML(where, template);
};

const headerElement = document.querySelector(`header`);
const mainElement = document.querySelector(`main`);
const footerElement = document.querySelector(`footer`);

render(headerElement, createUserRankTemplate());
render(mainElement, createNavigationTemplate());
render(mainElement, createSortTemplate());
render(mainElement, createFilmsTemplate());

const filmsElement = mainElement.querySelector(`.films`);

render(filmsElement, createFilmsListTemplate());

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsContainerElement = filmsElement.querySelector(
  `.films-list__container`
);

films.forEach((film) =>
  render(filmsContainerElement, createFilmCardTemplate(film, comments))
);

render(filmsListElement, createShowMoreTemplate());
render(footerElement, createFooterStatisticsTemplate(FILMS_COUNT));

document.body.classList.add(`hide-overflow`);
render(document.body, createFilmDetailsTemplate(films[0], comments));
