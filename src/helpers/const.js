export const EMOTIONS = [`smile`, `sleeping`, `puke`, `angry`];

export const UserRank = {
  NOVICE: `novice`,
  FAN: `fan`,
  MOVIE_BUFF: `movie buff`,
};

export const Filter = {
  Watchlist: (films) =>
    films.filter((film) => film.userDetails.watchlist).length,
  History: (films) =>
    films.filter((film) => film.userDetails.alreadyWatched).length,
  Favorite: (films) => films.filter((film) => film.userDetails.favorite).length,
};

export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

export const SortType = {
  DEFAULT: {
    title: `Sort by default`,
    type: `DEFAULT`,
  },
  DATE: {
    title: `Sort by date`,
    type: `DATE`,
  },
  RATING: {
    title: `Sort by rating`,
    type: `RATING`,
  },
};
