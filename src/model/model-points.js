import { generatePoint } from '../mock/points';

const POINT_COUNT = 10;

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, generatePoint);

  getPoints() {
    return this.#points;
  }
}

