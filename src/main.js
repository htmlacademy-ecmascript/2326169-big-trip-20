import HeadPresenter from './presenter/header';
import BoardPresenter from './presenter/board';
import TasksModel from './model/model';

const siteMainElement = document.querySelector('.page-body');
const siteMainInfoElemenet = siteMainElement.querySelector('.trip-main');
const siteEventsElement = siteMainElement.querySelector('.trip-events');

const tasksModel = new TasksModel;
const headPresenter = new HeadPresenter({headContainer: siteMainInfoElemenet});
const boardPresenter = new BoardPresenter({boardContainer: siteEventsElement, tasksModel});


headPresenter.init();
boardPresenter.init();

