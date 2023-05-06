import { generateDestination } from '../mock/destination';
import { generateOffer } from '../mock/offer';
import { generatePoint } from '../mock/point';

export default class RandomTask {
  constructor() {
    this.destination = generateDestination();
    this.offer = generateOffer();
    this.point = generatePoint();
  }
}

const getTasks = () => {
  const task = new RandomTask();
  return task;
};

export { getTasks };
