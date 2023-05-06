import { getRandomArrayElement, getRandomInteger } from '../util';
import { getDate, humanizeTaskDueDate } from './util';
import { FAVORITE, Price, TypeWaypoints } from './const';
import { generateOffer } from './offer';
import { generateDestination } from './destination';


const generatePoint = () => ({
  id: crypto.randomUUID(),
  basePrice: getRandomInteger(Price.MIN, Price.MAX),
  dateFrom: humanizeTaskDueDate(getDate({next: false})),
  dateTo: humanizeTaskDueDate(getDate({next: true})),
  destination: generateDestination().name,
  isFavorite: getRandomArrayElement(FAVORITE),
  offers: generateOffer().price,
  type: getRandomArrayElement(TypeWaypoints.type)
});

export { generatePoint };
