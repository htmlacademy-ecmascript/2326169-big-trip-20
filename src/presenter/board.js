import SortView from '../view/sort.js';
import EmptyView from '../view/empty.js';
import WaypointPresenter from './waypoint-presenter.js';
import { render, RenderPosition } from '../framework/render.js';

const POINT_COUNT = 0;
export default class BoardPresenter {
  #destinationModel = null;
  #pointsModel = null;
  #offersModel = null;

  #boardConatiner = null;
  #boardPoints = null;
  #boardOffers = null;
  #boardDestinations = null;

  constructor({boardContainer, pointsModel, offersModel, destinationModel}) {
    this.#boardConatiner = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.getPoints()];
    this.#boardOffers = [...this.#offersModel.getOffers()];
    this.#boardDestinations = [...this.#destinationModel.getDestinations()];

    render(new SortView, this.#boardConatiner, RenderPosition.AFTERBEGIN);

    if (this.#boardPoints.length === POINT_COUNT) {
      render(new EmptyView, this.#boardConatiner);
    }

    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(
        this.#boardConatiner,
        this.#boardPoints[i],
        this.#boardOffers[0],
        this.#boardDestinations[0]
      );
    }
  }

  #renderPoint = (container, point, {offers}, {destination}) => {

    const wayPointComponent = new WaypointPresenter({container, point, offers, destination});

    wayPointComponent.init();

  };
}
