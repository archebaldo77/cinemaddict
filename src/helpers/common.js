import { UserRank } from './const';

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

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};
