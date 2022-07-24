import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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
