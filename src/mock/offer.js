import { getRandomArrayElement, getRandomInteger } from '../util';
import { TITLES, Price } from './const';

const generateOffer = () => ({
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES.title)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
});

export { generateOffer };

