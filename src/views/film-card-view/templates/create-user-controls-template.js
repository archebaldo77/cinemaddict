export const createUserControls = (userDetails) => {
  const { watchlist, alreadyWatched, favorite } = userDetails;

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
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistActiveClass}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${alreadyWatchedActiveClass}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteActiveClass}" type="button">Mark as favorite</button>
    </div>`;
};
