export const createGenreTemplate = (genres) => {
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
