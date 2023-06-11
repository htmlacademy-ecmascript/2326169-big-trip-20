import SortView from '../view/sort.js';
import EmptyView from '../view/empty.js';
import WaypointPresenter from './waypoint-presenter.js';
import { render, RenderPosition } from '../framework/render.js';
import { updateItem } from '../util.js';

const POINT_COUNT = 0;
export default class BoardPresenter {
  //модели
  #destinationModel = null;
  #pointsModel = null;
  #offersModel = null;

  //board компоненты
  #boardConatiner = null;
  #boardPoints = null;
  #boardOffers = null;
  #boardDestinations = null;

  //презентеры
  #waypointPresenters = new Map();

  constructor({boardContainer, pointsModel, offersModel, destinationModel}) {
    this.#boardConatiner = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init() {
    //запись моков в компоненты
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

  #renderPoint = (container, points, {offers}, {destination}) => {

    const waypointPresenter = new WaypointPresenter({
      container,
      points,
      offers,
      destination,
      changeData: this.waypointChange,
      changeMode: this.modeChange,
    });

    waypointPresenter.init();

    this.#waypointPresenters.set(points.id, waypointPresenter);
  };

  waypointChange = (updatedWaypoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedWaypoint);
    this.#waypointPresenters.get(updatedWaypoint.id).init();
  };

  modeChange = () => {
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };
}
