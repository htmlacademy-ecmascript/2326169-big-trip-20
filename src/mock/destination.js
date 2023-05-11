import { getRandomArrayElement } from '../util';
import { CITIES, DESCRIPTION_FOR_DESTINATION } from './const';

const city = getRandomArrayElement(CITIES);

const generateDestinations = () => [{
  id: crypto.randomUUID(),
  descriptions: getRandomArrayElement(DESCRIPTION_FOR_DESTINATION),
  name: city,
  picture: [{
    url: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
    description: `${city} description`
  }]
},
{
  id: crypto.randomUUID(),
  descriptions: getRandomArrayElement(DESCRIPTION_FOR_DESTINATION),
  name: city,
  picture: [{
    url: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
    description: `${city} description`
  }]
},
{
  id: crypto.randomUUID(),
  descriptions: getRandomArrayElement(DESCRIPTION_FOR_DESTINATION),
  name: city,
  picture: [{
    url: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
    description: `${city} description`
  }]
}];

export default class RandomDestination {
  constructor() {
    this.destination = generateDestinations();
  }
}

const getDestinations = () => {
  const destinations = new RandomDestination();
  return destinations;
};

export { getDestinations, generateDestinations };
