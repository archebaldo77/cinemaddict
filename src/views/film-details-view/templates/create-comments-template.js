import { getCommentDate } from '../../../helpers/date';

export const createCommentsTemplate = (comments) => {
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
