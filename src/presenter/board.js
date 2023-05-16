import SortView from '../view/sort.js';
import FormEditeView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import { render, RenderPosition, replace } from '../framework/render.js';

export default class BoardPresenter {
  #destinationModel = null;
  #pointAndOffersModel = null;
  #boardPointAndOffers = null;
  #boardDestinations = null;

  constructor({boardContainer, pointAndOffersModel, destinationModel}) {
    this.boardContainer = boardContainer;
    this.#pointAndOffersModel = pointAndOffersModel;
    this.#destinationModel = destinationModel;
  }

  init() {
    this.#boardPointAndOffers = [...this.#pointAndOffersModel.getPointAndOffers()];
    this.#boardDestinations = [...this.#destinationModel.getDestinations()];

    render(new SortView, this.boardContainer, RenderPosition.AFTERBEGIN);
    //render(new FormEditeView(this.#boardPointAndOffers[0], this.#boardDestinations[0]), this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < this.#boardPointAndOffers.length; i++) {
      this.#renderPoint(this.#boardPointAndOffers[i], this.#boardDestinations[0]);

    }
  }

  #renderPoint = ({point, offers}, {destination}) => {
    const wayPointComponent = new WaypointView({point, offers}, {onEditClick: formEditClickHandler});

    const formEditComponent = new FormEditeView({point, offers}, {destination}, {onFormReset: resetButtonClickHandler}, {onFormSubmit: wayPointSubmitHandler});

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


