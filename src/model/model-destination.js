import { getDestinations } from '../mock/destination';

const DESTINATION_COUNT = 5;

export default class DestinationModel {
  #destinations = Array.from({length: DESTINATION_COUNT}, getDestinations);

  getDestinations() {
    return this.#destinations;
  }
}

