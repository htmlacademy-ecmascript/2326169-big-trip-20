import SortView from '../view/sort.js';
import FormEditeView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import { render, RenderPosition } from '../render.js';

export default class BoardPresenter {

  constructor({boardContainer, tasksModel}) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(new SortView, this.boardContainer, RenderPosition.AFTERBEGIN);
    render(new FormEditeView(this.boardTasks[0]), this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < this.boardTasks.length; i++) {
      render(new WaypointView(this.boardTasks[i]), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}

