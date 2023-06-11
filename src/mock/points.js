import { getRandomArrayElement, getRandomInteger } from '../util';
import { getDate, humanizeTaskDueDate } from './util';
import { FAVORITE, Price, TypeWaypoints } from './const';
import { generateDestinations } from './destination';
import { generateOffer } from './offers';


const generatePoint = () => ({
  id: crypto.randomUUID(),
  basePrice: getRandomInteger(Price.MIN, Price.MAX),
  dateFrom: humanizeTaskDueDate(getDate({next: false})),
  dateTo: humanizeTaskDueDate(getDate({next: true})),
  destination: generateDestinations()[0].name,
  isFavorite: getRandomArrayElement(FAVORITE),
  offers: generateOffer()[0].price,
  type: getRandomArrayElement(TypeWaypoints.type)
});

export { generatePoint };
