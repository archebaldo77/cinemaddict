import { createUserControls } from './create-user-controls-template';

import { getFilmDuration, getFilmYear } from '../../../helpers/common';

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
    userDetails,
  } = film;

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
      ${createUserControls(userDetails)}
    </article>`;
};
