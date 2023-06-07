import FormEditView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';
import { render, RenderPosition, replace } from '../framework/render.js';

export default class WaypointPresenter {
  #container = null;
  #point = null;
  #offers = null;
  #destination = null;

  constructor({container, point, offers, destination}) {
    this.#container = container;
    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;
  }

  init() {
    const wayPointComponentForView = new WaypointView(
      this.#point,
      this.#offers,
      {onEditClick: formEditClickHandler}
    );

    const formEditComponentForView = new FormEditView(
      this.#point,
      this.#offers,
      this.#destination,
      {onFormReset: resetButtonClickHandler},
      {onFormSubmit: wayPointSubmitHandler}
    );

    const replaceWayPointToFormEdit = () => {
      replace(formEditComponentForView, wayPointComponentForView);
    };

    const replaceFormEditToWayPoint = () => {
      replace(wayPointComponentForView, formEditComponentForView);
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

    render(wayPointComponentForView, this.#container, RenderPosition.BEFOREEND);
  }
}
