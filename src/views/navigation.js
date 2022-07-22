import { Filter } from '../helpers/const';

export const createNavigationTemplate = (films) => {
  return `
    <nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${Object.entries(Filter)
          .map(([filterName, fn]) => {
            return `<a href="#${filterName.toLowerCase()}" class="main-navigation__item">${filterName}
            <span class="main-navigation__item-count">${fn(films)}</span></a>`;
          })
          .join(``)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
};
