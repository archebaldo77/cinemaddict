import { EMOTIONS } from '../helpers/const';

import {
  getFilmDuration,
  getFilmReleaseDate,
  getCommentDate,
} from '../helpers/common';

const createGenreTemplate = (genres) => {
  return `
    <tr class="film-details__row">
      <td class="film-details__term">${
        genres.length > 1 ? `Genres` : `Genre`
      }</td>
      <td class="film-details__cell">
        ${genres
          .map((genre) => {
            return `<span class="film-details__genre">${genre}</span>`;
          })
          .join(``)}
    </tr>`;
};

const createUserControlsTemplate = (userDetails) => {
  const { watchlist, alreadyWatched, favorite } = userDetails;

  return `
    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${
        watchlist ? `checked` : ``
      }>
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${
        alreadyWatched ? `checked` : ``
      }>
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${
        favorite ? `checked` : ``
      }>
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>`;
};

const createCommentsTemplate = (comments) => {
  return `
    <ul class="film-details__comments-list">
      ${comments
        .map(({ author, comment, date, emotion }) => {
          return `
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="/images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
            </span>
            <div>
              <p class="film-details__comment-text">${comment}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${author}</span>
                <span class="film-details__comment-day">${getCommentDate(
                  date
                )}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`;
        })
        .join(``)}
    </ul>`;
};

const createEmojiListTemplate = () => {
  return `
    <div class="film-details__emoji-list">
    ${EMOTIONS.map((emotion) => {
      return `
        <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion}" value="${emotion}">
        <label class="film-details__emoji-label" for="emoji-${emotion}">
          <img src="/images/emoji/${emotion}.png" width="30" height="30" alt="emoji">
        </label>`;
    }).join(``)}
    </div>`;
};

export const createFilmDetailsTemplate = (film, comments) => {
  const {
    filmInfo: {
      poster,
      ageRating,
      title,
      alternativeTitle,
      totalRating,
      director,
      writers,
      actors,
      release: { date, releaseCountry },
      runtime,
      genre,
      description,
    },
    userDetails,
  } = film;

  return `
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${poster}" alt="poster">
              <p class="film-details__age">${ageRating}+</p>
            </div>
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${alternativeTitle}</p>
                </div>
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${totalRating}</p>
                </div>
              </div>
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${getFilmReleaseDate(
                    date
                  )}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${getFilmDuration(
                    runtime
                  )}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${releaseCountry}</td>
                </tr>
                ${createGenreTemplate(genre)}
              </table>
              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>
          ${createUserControlsTemplate(userDetails)}
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
            ${createCommentsTemplate(comments)}
            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label"></div>
              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>
              ${createEmojiListTemplate()}
            </div>
          </section>
        </div>
      </form>
    </section>`;
};
