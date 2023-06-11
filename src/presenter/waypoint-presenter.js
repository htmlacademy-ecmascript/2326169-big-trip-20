import FormEditView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import { Mode } from '../mock/const.js';
import { render, replace, remove } from '../framework/render.js';

export default class WaypointPresenter {
  #container = null;
  #point = null;
  #offers = null;
  #destination = null;

  #changeData = null;
  #changeMode = null;

  #waypointComponent = null;
  #waypointEditComponent = null;
  #mode = Mode.EDITING;

  constructor({container, points, offers, destination, changeData, changeMode}) {
    this.#container = container;
    this.#point = points;
    this.#offers = offers;
    this.#destination = destination;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init(point) {

    const prevWaypointComponent = this.#waypointComponent;
    const prevWaypointEditComponent = this.#waypointEditComponent;

    this.#waypointComponent = new WaypointView(
      this.#point,
      this.#offers,
      {onEditClick: this.editClick},
      {onFavoriteClick: this.favoriteClick}
    );

    this.#waypointEditComponent = new FormEditView(
      this.#point,
      this.#offers,
      this.#destination,
      {onFormReset: this.resetButtonClickHandler},
      {onFormSubmit: this.wayPointSubmitHandler}
    );


    if (prevWaypointComponent === null || prevWaypointEditComponent === null) {
      render(this.#waypointComponent, this.#container);
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#waypointComponent, prevWaypointComponent);
    }

    if (this.#mode !== Mode.EDITING) {
      replace(this.#waypointEditComponent, prevWaypointEditComponent);
    }


  }

  resetView = () => {
    if (this.#mode !== this.#mode.DEFAULT) {
      this.replaceFormEditToWayPoint();
    }
  };

  destroy = () => {
    remove(this.#waypointComponent);
    remove(this.#waypointEditComponent);
  };

  replaceWayPointToFormEdit = () => {
    replace(this.#waypointEditComponent, this.#waypointComponent);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  replaceFormEditToWayPoint = () => {
    replace(this.#waypointComponent, this.#waypointEditComponent);
    this.#mode = Mode.DEFAULT;
  };

  escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.replaceFormEditToWayPoint();
      document.removeEventListener('keydown', this.escKeyDownHandler);
    }
  };

  editClick = () => {
    this.replaceWayPointToFormEdit();
    document.addEventListener('keydown', this.escKeyDownHandler);
  };


  favoriteClick = () => {
    this.#changeData({
      ...this.#point,
      isFavorite: !this.#point.isFavorite
    });
  };

  resetButtonClickHandler = () => {
    this.replaceFormEditToWayPoint();
    document.removeEventListener('keydown', this.escKeyDownHandler);
  };

  wayPointSubmitHandler = () => {
    this.replaceFormEditToWayPoint();
    document.removeEventListener('keydown', this.escKeyDownHandler);
  };
}
