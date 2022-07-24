import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createUserRankTemplate } from './templates/create-user-rank-template';

export default class UserRankView extends AbstractClassView {
  #count;

  constructor(count) {
    super();

    this.#count = count;
  }

  get _template() {
    return createUserRankTemplate(this.#count);
  }
}
