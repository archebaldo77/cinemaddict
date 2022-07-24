import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createSortTemplate } from './templates/create-sort-template';

export default class SortView extends AbstractClassView {
  get _template() {
    return createSortTemplate();
  }
}
