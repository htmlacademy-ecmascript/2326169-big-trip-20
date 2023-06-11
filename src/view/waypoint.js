import { getPointDudration } from '../mock/util.js';
import { FormatDateForWaipoints } from '../mock/const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getRandomArrayElement } from '../util.js';

function createWaypointTemplate(point, offers) {
  const { basePrice, type, destination, dateFrom, dateTo } = point;

  const randomOffers = getRandomArrayElement(offers);
  const title = randomOffers.title;
  const price = randomOffers.price;

  const timeDifference = getPointDudration(dateFrom, dateTo);
  const dateFormatFrom = dateFrom.format(FormatDateForWaipoints.DATE_FORMAT);
  const timeFormatFrom = dateFrom.format(FormatDateForWaipoints.HOUR_MINUTE_FORMAT);
  const timeFormatTo = dateTo.format(FormatDateForWaipoints.HOUR_MINUTE_FORMAT);

  return `<ul class="trip-events__list">
  <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${dateFormatFrom}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destination}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${timeFormatFrom}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${timeFormatTo}</time>
      </p>
      <p class="event__duration">${timeDifference}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice + price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </li>
    </ul>
    <button class="event__favorite-btn event__favorite-btn--active" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
</ul>`;
}

export default class WaypointView extends AbstractView {
  #point = null;
  #offers = null;

  constructor(point, offers, {onEditClick}, {onFavoriteClick}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.onEditClick = onEditClick;
    this.onFavoriteClick = onFavoriteClick;

    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.editClick);
    this.element
      .querySelector('.event__favorite-icon')
      .addEventListener('click', this.favoriteClick);
  }

  get template() {
    return createWaypointTemplate(
      this.#point,
      this.#offers
    );
  }

  editClick = (evt) => {
    evt.preventDefault();
    this.onEditClick();
  };

  favoriteClick = (evt) => {
    evt.preventDefault();
    this.onFavoriteClick();
  };
}
