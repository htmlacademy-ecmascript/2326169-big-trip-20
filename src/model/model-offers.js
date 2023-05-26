import { getOffers } from '../mock/offers';

const OFFERS_COUNT = 5;

export default class OffersModel {
  #offers = Array.from({length: OFFERS_COUNT}, getOffers);

  getOffers() {
    return this.#offers;
  }
}

