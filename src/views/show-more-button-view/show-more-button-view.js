import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createShowMoreButtonTemplate } from './templates/create-show-more-button-template';

export default class ShowMoreButtonView extends AbstractClassView {
  get _template() {
    return createShowMoreButtonTemplate();
  }

  setClickHandler(cb) {
    this.element.addEventListener(`click`, cb);
  }
}
