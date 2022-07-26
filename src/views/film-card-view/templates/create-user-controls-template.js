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
      <button
        class="
          button
          film-card__controls-item
          film-card__controls-item--add-to-watchlist
          ${watchlistActiveClass}"
        type="button"
        data-control-type="watchlist"
        >
          Add to watchlist
        </button>
      <button
        class="
          button
          film-card__controls-item
          film-card__controls-item--mark-as-watched
          ${alreadyWatchedActiveClass}"
        type="button"
        data-control-type="alreadyWatched"
      >
        Mark as watched
      </button>
      <button
        class="
          button
          film-card__controls-item
          film-card__controls-item--favorite
          ${favoriteActiveClass}"
        type="button"
        data-control-type="favorite"
      >
        Mark as favorite
      </button>
    </div>`;
};
