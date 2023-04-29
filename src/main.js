import HeadPresenter from './presenter/header';
import BoardPresenter from './presenter/board';

const siteMainElement = document.querySelector('.page-body');
const siteMainInfoElemenet = siteMainElement.querySelector('.trip-main');
const siteEventsElement = siteMainElement.querySelector('.trip-events');

const headPresenter = new HeadPresenter({headContainer: siteMainInfoElemenet});
const boardPresenter = new BoardPresenter({boardContainer: siteEventsElement});


headPresenter.init();
boardPresenter.init();

