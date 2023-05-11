import HeadPresenter from './presenter/header';
import BoardPresenter from './presenter/board';
import PointAndOffersModel from './model/model-point-offers';
import DestinationModel from './model/model-destination';

const siteMainElement = document.querySelector('.page-body');
const siteMainInfoElemenet = siteMainElement.querySelector('.trip-main');
const siteEventsElement = siteMainElement.querySelector('.trip-events');

const pointAndOffersModel = new PointAndOffersModel;
const destinationModel = new DestinationModel;
const headPresenter = new HeadPresenter({headContainer: siteMainInfoElemenet});
const boardPresenter = new BoardPresenter({boardContainer: siteEventsElement, pointAndOffersModel, destinationModel});


headPresenter.init();
boardPresenter.init();

