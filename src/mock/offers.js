import { getRandomArrayElement, getRandomInteger } from '../util';
import { Price, TITLES } from './const';

const generateOffer = () => ([{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
}
]);

export default class RandomOffers {
  constructor() {
    this.offers = generateOffer();
  }
}

const getOffers = () => {
  const offers = new RandomOffers();
  return offers;
};

export { getOffers, generateOffer };
