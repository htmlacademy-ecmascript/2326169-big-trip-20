import SortView from '../view/sort.js';
import FormEditeView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import { render, RenderPosition } from '../render.js';

export default class BoardPresenter {

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView, this.boardContainer, RenderPosition.AFTERBEGIN);
    render(new FormEditeView, this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      render(new WaypointView, this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}

