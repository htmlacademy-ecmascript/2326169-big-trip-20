import {createElement} from '../render.js';

function createHeadTemplate() {
  return '<section class="head container"></section>';
}

export default class HeadView {
  getTemplate() {
    return createHeadTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
