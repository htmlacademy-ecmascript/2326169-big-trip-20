import SortView from '../view/sort.js';
import FormEditeView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import { render, RenderPosition } from '../render.js';

export default class BoardPresenter {

  constructor({boardContainer, pointAndOffersModel, destinationModel}) {
    this.boardContainer = boardContainer;
    this.pointAndOffersModel = pointAndOffersModel;
    this.destinationModel = destinationModel;
  }

  init() {
    this.boardPointAndOffers = [...this.pointAndOffersModel.getPointAndOffers()];
    this.boardDestinations = [...this.destinationModel.getDestinations()];

    render(new SortView, this.boardContainer, RenderPosition.AFTERBEGIN);
    render(new FormEditeView(this.boardPointAndOffers[0], this.boardDestinations[0]), this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < this.boardPointAndOffers.length; i++) {
      render(new WaypointView(this.boardPointAndOffers[i]), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}


