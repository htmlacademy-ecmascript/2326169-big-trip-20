import { filter } from '../filter';

function generateFilter(point) {
  return Object.entries(filter).map(
    ([filterType, filterPoints]) => ({
      type: filterType,
      hasPoints: filterPoints(point).length > 0,
    }),
  );
}


export { generateFilter };
