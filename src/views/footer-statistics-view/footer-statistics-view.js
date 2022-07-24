import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createFooterStatisticsTemplate } from './templates/create-footer-statistics-template';

export default class FooterStatisticsView extends AbstractClassView {
  #count;

  constructor(count) {
    super();

    this.#count = count;
  }

  get _template() {
    return createFooterStatisticsTemplate(this.#count);
  }
}
