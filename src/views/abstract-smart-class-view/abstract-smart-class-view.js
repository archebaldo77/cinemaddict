import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { replace } from '../../helpers/render';

export default class AbstractSmartClassView extends AbstractClassView {
  _updateView() {
    const prevElement = this.element;
    const scrollTop = this.element.scrollTop;

    this.removeElement();

    replace(this.element, prevElement);
    this.element.scrollTop = scrollTop;
  }

  _restoreHandlers() {
    throw new Error(`Abstract method not implemented: get _restoreHandlers`);
  }
}
