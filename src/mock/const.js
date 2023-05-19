const CITIES = [
  'Amsterdam',
  'Tokyo',
  'Geneva',
  'Moscow',
  'Saint-Petersburg'
];

const DESCRIPTION_FOR_DESTINATION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Oh la la',
  'Best of the Best',
  'Eze lemon squzy',
  'Peace'
];

const TITLES = {
  title:
  [
    'Upgrade to a business class',
    'Choose the radio station',
    'Choose temperature',
    'Drive slowly'
  ]
};

const Duration = {
  HOUR: 5,
  DAY: 5,
  MIN: 59
};

const TypeWaypoints = {
  type: [
    'taxi',
    'train',
    'flight',
    'drive',
    'bus'
  ]
};

const Price = {
  MIN: 1,
  MAX: 100
};

const FAVORITE = [
  true,
  false
];

const FormatDateForWaipoints = {
  DATE_FORMAT:'MMM D',
  HOUR_MINUTE_FORMAT:'HH:mm'
};

const FormatDateForFormEdit = {
  DATE_FORMAT: 'DD/MM/YY HH:mm'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export { CITIES, DESCRIPTION_FOR_DESTINATION, Duration, TypeWaypoints, FAVORITE, Price, TITLES, FormatDateForWaipoints, FormatDateForFormEdit, FilterType};
