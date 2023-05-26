import HeadPresenter from './presenter/header';
import BoardPresenter from './presenter/board';
import PointsModel from './model/model-points';
import OffersModel from './model/model-offers';
import DestinationModel from './model/model-destination';


const siteMainElement = document.querySelector('.page-body');
const siteMainInfoElemenet = siteMainElement.querySelector('.trip-main');
const siteEventsElement = siteMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel;
const offersModel = new OffersModel;
const destinationModel = new DestinationModel;

const headPresenter = new HeadPresenter({headContainer: siteMainInfoElemenet, pointsModel});
const boardPresenter = new BoardPresenter({boardContainer: siteEventsElement, pointsModel, offersModel, destinationModel});


headPresenter.init();
boardPresenter.init();

