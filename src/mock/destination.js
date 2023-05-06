import { getRandomArrayElement } from '../util';
import { CITIES, DESCRIPTION_FOR_DESTINATION } from './const';

const generateDestination = () => {
  const city = getRandomArrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    descriptions: getRandomArrayElement(DESCRIPTION_FOR_DESTINATION),
    name: city,
    picture: [{
      url: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
      description: `${city} description`
    }]
  };
};


export { generateDestination };
