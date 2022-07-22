import { getFilmDuration, getFilmYear } from '../helpers/common';

export const createFilmCardTemplate = (film, comments) => {
  const {
    filmInfo: {
      title,
      totalRating,
      genre,
      description,
      poster,
      runtime,
      release: { date },
    },
    userDetails: { watchlist, alreadyWatched, favorite },
  } = film;

  const watchlistActiveClass = watchlist
    ? `film-card__controls-item--active`
    : ``;
  const alreadyWatchedActiveClass = alreadyWatched
    ? `film-card__controls-item--active`
    : ``;
  const favoriteActiveClass = favorite
    ? `film-card__controls-item--active`
    : ``;

  return `
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${getFilmYear(date)}</span>
        <span class="film-card__duration">${getFilmDuration(runtime)}</span>
        <span class="film-card__genre">${genre[0]}</span>
      </p>
      <img src="${poster}" alt="poster" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistActiveClass}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${alreadyWatchedActiveClass}" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteActiveClass}" type="button">Mark as favorite</button>
      </div>
    </article>`;
};
