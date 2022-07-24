import AbstractClassView from '../views/abstract-class-view/abstract-class-view';

import { RenderPosition } from './const';

export const render = (
  container,
  component,
  where = RenderPosition.BEFOREEND
) => {
  const containerElement =
    container instanceof AbstractClassView ? container.element : container;
  const componentElement =
    component instanceof AbstractClassView ? component.element : component;
  containerElement.insertAdjacentElement(where, componentElement);
};

export const createElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;

  return div.firstElementChild;
};

export const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractClassView)) {
    throw new Error(`Can remove only components`);
  }

  component.element.remove();
  component.removeElement();
};
