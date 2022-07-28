import { SortType } from '../../../helpers/const';

export const createSortTemplate = (currentSortType) => {
  return `
    <ul class="sort">
      ${Object.keys(SortType)
        .map((key) => {
          const activeClass =
            currentSortType === SortType[key].type
              ? `sort__button--active`
              : ``;
          return `
          <li>
            <a
              class="sort__button ${activeClass}"
              data-sort-type=${SortType[key].type}>
                ${SortType[key].title}
            </a>
          </li>`;
        })
        .join(``)}
    </ul>
  `;
};
