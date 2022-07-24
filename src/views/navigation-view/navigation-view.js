import AbstractClassView from '../abstract-class-view/abstract-class-view';

import { createNavigationTemplate } from './templates/create-navigation-template';

export default class NavigationView extends AbstractClassView {
  #films;

  constructor(films) {
    super();

    this.#films = films;
  }

  get _template() {
    return createNavigationTemplate(this.#films);
  }
}
