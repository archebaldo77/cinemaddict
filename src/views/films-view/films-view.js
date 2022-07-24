import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createFilmsTemplate } from './templates/create-films-template';

export default class FilmsView extends AbstractClassView {
  get _template() {
    return createFilmsTemplate();
  }
}
