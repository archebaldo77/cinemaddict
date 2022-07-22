import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

import {
  ACTORS,
  COUTNRIES,
  DESCRIPTIONS,
  DIRECTORS,
  GENRES,
  POSTERS,
  WRITERS,
} from './const';

import {
  getRandomArray,
  getRandomFloat,
  getRandomInt,
} from '../helpers/common';

dayjs.extend(dayjsRandom);

export const generateFilm = () => {
  return {
    id: nanoid(),
    comments: [`id`, `id`, `id`],
    filmInfo: {
      title: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
      alternativeTitle: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
      totalRating: getRandomFloat(1, 10),
      poster: POSTERS[getRandomInt(0, POSTERS.length - 1)],
      ageRating: getRandomInt(0, 18),
      director: DIRECTORS[getRandomInt(0, DIRECTORS.length - 1)],
      writers: getRandomArray(WRITERS),
      actors: getRandomArray(ACTORS),
      release: {
        date: dayjs.between(`2000-01-01`, `2022-01-01`).format(),
        releaseCountry: COUTNRIES[getRandomInt(0, COUTNRIES.length - 1)],
      },
      runtime: getRandomInt(15, 225),
      genre: getRandomArray(GENRES),
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    },
    userDetails: {
      watchlist: Boolean(getRandomInt(0, 1)),
      alreadyWatched: Boolean(getRandomInt(0, 1)),
      watchingDate: dayjs.between(`2021-01-01`, `2022-01-01`).format(),
      favorite: Boolean(getRandomInt(0, 1)),
    },
  };
};
