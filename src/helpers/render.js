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

export const replace = (newComponent, oldComponent) => {
  if (newComponent === null || oldComponent === null) {
    throw new Error("Can't replace unexisting elements");
  }

  const newChild =
    newComponent instanceof AbstractClassView
      ? newComponent.element
      : newComponent;
  const oldChild =
    oldComponent instanceof AbstractClassView
      ? oldComponent.element
      : oldComponent;

  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error("Parent element doesn't exist");
  }

  parent.replaceChild(newChild, oldChild);
};
