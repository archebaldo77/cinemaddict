import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createFilmsListTemplate } from './templates/create-films-list-template';

export default class FilmsListView extends AbstractClassView {
  get _template() {
    return createFilmsListTemplate();
  }
}
