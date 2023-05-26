import SortView from '../view/sort.js';
import FormEditView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import EmptyView from '../view/empty.js';
import { render, RenderPosition, replace } from '../framework/render.js';

const POINT_COUNT = 0;
export default class BoardPresenter {
  #destinationModel = null;
  #pointsModel = null;
  #offersModel = null;
  #boardPoints = null;
  #boardOffers = null;
  #boardDestinations = null;

  constructor({boardContainer, pointsModel, offersModel, destinationModel}) {
    this.boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.getPoints()];
    this.#boardOffers = [...this.#offersModel.getOffers()];
    this.#boardDestinations = [...this.#destinationModel.getDestinations()];
    render(new SortView, this.boardContainer, RenderPosition.AFTERBEGIN);

    if (this.#boardPoints.length === POINT_COUNT) {
      render(new EmptyView, this.boardContainer);
    }

    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i], this.#boardOffers[0], this.#boardDestinations[0]);
    }
  }

  #renderPoint = (point, {offers}, {destination}) => {

    const wayPointComponent = new WaypointView({point}, {offers}, {onEditClick: formEditClickHandler});

    const formEditComponent = new FormEditView({point}, {offers}, {destination}, {onFormReset: resetButtonClickHandler}, {onFormSubmit: wayPointSubmitHandler});

    const replaceWayPointToFormEdit = () => {
      replace(formEditComponent, wayPointComponent);
    };

    const replaceFormEditToWayPoint = () => {
      replace(wayPointComponent, formEditComponent);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormEditToWayPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    function formEditClickHandler () {
      replaceWayPointToFormEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function resetButtonClickHandler() {
      replaceFormEditToWayPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function wayPointSubmitHandler() {
      replaceFormEditToWayPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(wayPointComponent, this.boardContainer, RenderPosition.BEFOREEND);
  };
}


