import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createNoFilmsTemplate } from './templates/create-no-films-template';

export default class NoFilmsView extends AbstractClassView {
  get _template() {
    return createNoFilmsTemplate();
  }
}
