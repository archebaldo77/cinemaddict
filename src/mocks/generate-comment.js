import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

import { EMOTIONS } from '../helpers/const';
import { AUTHORS, COMMENTS } from './const';

import { getRandomInt } from '../helpers/common';

dayjs.extend(dayjsRandom);

export const generateComment = () => {
  return {
    id: nanoid(),
    author: AUTHORS[getRandomInt(0, AUTHORS.length - 1)],
    comment: COMMENTS[getRandomInt(0, COMMENTS.length - 1)],
    date: dayjs.between(`2021-01-01`, `2022-01-01`).format(),
    emotion: EMOTIONS[getRandomInt(0, EMOTIONS.length - 1)],
  };
};
