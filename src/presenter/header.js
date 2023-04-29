import MainInfoView from '../view/main-info.js';
import FilterView from '../view/filters.js';
import { render, RenderPosition } from '../render.js';

export default class HeadPresenter {

  constructor({headContainer}) {
    this.headContainer = headContainer;
  }

  init() {
    render(new MainInfoView, this.headContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView, this.headContainer);
  }
}
