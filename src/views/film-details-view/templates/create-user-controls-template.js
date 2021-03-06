export const createUserControlsTemplate = (userDetails) => {
  const { watchlist, alreadyWatched, favorite } = userDetails;

  return `
    <section class="film-details__controls">
      <input
        type="checkbox"
        class="film-details__control-input visually-hidden"
        id="watchlist"
        name="watchlist"
        ${watchlist ? `checked` : ``}
        data-control-type="watchlist"
        >
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input
        type="checkbox"
        class="film-details__control-input visually-hidden"
        id="watched"
        name="watched"
        ${alreadyWatched ? `checked` : ``}
        data-control-type="alreadyWatched"
        >
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input
        type="checkbox"
        class="film-details__control-input visually-hidden"
        id="favorite"
        name="favorite"
        ${favorite ? `checked` : ``}
        data-control-type="favorite"
        >
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>`;
};
