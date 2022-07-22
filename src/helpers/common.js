import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { UserRank } from './const';

dayjs.extend(duration);

export const getRandomInt = (min = 0, max = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomFloat = (min = 0, max = 10, decimals = 1) => {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
};

export const getRandomArray = (array = []) => {
  const arr = [];
  const randomLength = getRandomInt(1, array.length - 1);

  const arrayCopy = array.slice();

  for (let i = 0; i < randomLength; i++) {
    const randomIndex = getRandomInt(0, arrayCopy.length - 1);
    const element = arrayCopy.splice(randomIndex, 1);
    arr.push(...element);
  }

  return arr;
};

export const getFilmDuration = (runtime) => {
  return runtime > 59
    ? dayjs.duration(runtime, `minutes`).format(`H[h] mm[m]`)
    : dayjs.duration(runtime, `minutes`).format(`mm[m]`);
};

export const getFilmReleaseDate = (date) => {
  return dayjs(date).format(`DD MMMM YYYY`);
};

export const getFilmYear = (date) => {
  return dayjs(date).format(`YYYY`);
};

export const getCommentDate = (date) => {
  return dayjs(date).format(`YYYY/MM/DD HH:MM`);
};

export const getUserRank = (filmsCount) => {
  if (filmsCount === 0) {
    return ``;
  } else if (filmsCount >= 1 && filmsCount <= 10) {
    return UserRank.NOVICE;
  } else if (filmsCount >= 11 && filmsCount <= 20) {
    return UserRank.FAN;
  } else {
    return UserRank.MOVIE_BUFF;
  }
};
