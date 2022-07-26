import UserRankView from './views/user-rank-view/user-rank-view';
import FooterStatisticsView from './views/footer-statistics-view/footer-statistics-view';

import MainPresenter from './presenters/main-presenter';

import { render } from './helpers/render';

import { generateFilm } from './mocks/generate-film';
import { generateComment } from './mocks/generate-comment';

const FILMS_COUNT = 21;
const COMMENTS_COUNT = 3;

const films = new Array(FILMS_COUNT).fill().map(generateFilm);
const comments = new Array(COMMENTS_COUNT).fill().map(generateComment);

const alreadyWatchedFilms = films.filter(
  (film) => film.userDetails.alreadyWatched
).length;

const headerElement = document.querySelector(`header`);
const mainElement = document.querySelector(`main`);
const footerElement = document.querySelector(`footer`);

const mainPresenter = new MainPresenter(mainElement);

render(headerElement, new UserRankView(alreadyWatchedFilms));
mainPresenter.init(films, comments);
render(footerElement, new FooterStatisticsView(FILMS_COUNT));
