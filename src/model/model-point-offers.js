import { getPointAndOffers } from '../mock/point-offers';

const POINT_OFFERS_COUNT = 5;

export default class PointAndOffersModel {
  pointAndOffers = Array.from({length: POINT_OFFERS_COUNT}, getPointAndOffers);

  getPointAndOffers() {
    return this.pointAndOffers;
  }
}

