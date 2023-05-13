import { getRandomArrayElement, getRandomInteger } from '../util';
import { getDate, humanizeTaskDueDate } from './util';
import { FAVORITE, Price, TypeWaypoints , TITLES } from './const';
import { generateDestinations } from './destination';

const generateOffer = () => ([{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES.title)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES.title)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES.title)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES.title)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
},
{
  id: crypto.randomUUID(),
  title: `${getRandomArrayElement(TITLES.title)}`,
  price: getRandomInteger(Price.MIN, Price.MAX)
}
]);

const generatePoint = () => ({
  id: crypto.randomUUID(),
  basePrice: getRandomInteger(Price.MIN, Price.MAX),
  dateFrom: humanizeTaskDueDate(getDate({next: false})),
  dateTo: humanizeTaskDueDate(getDate({next: true})),
  destination: generateDestinations()[0].name,
  isFavorite: getRandomArrayElement(FAVORITE),
  offers: generateOffer().price,
  type: getRandomArrayElement(TypeWaypoints.type)
});

export default class RandomPointAndOffers {
  constructor() {
    this.offers = generateOffer();
    this.point = generatePoint();
  }
}

const getPointAndOffers = () => {
  const pointsAndOffers = new RandomPointAndOffers();
  return pointsAndOffers;
};

export { getPointAndOffers };
