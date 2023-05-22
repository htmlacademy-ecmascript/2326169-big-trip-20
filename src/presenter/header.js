import MainInfoView from '../view/main-info.js';
import FilterView from '../view/filters.js';
import { render, RenderPosition } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';


export default class HeadPresenter {

  constructor({headContainer, pointsModel}) {
    this.headContainer = headContainer;
    this.pointsModel = pointsModel;
    this.filters = generateFilter(this.pointsModel.getPoints());
  }

  init() {
    render(new MainInfoView, this.headContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView (this.filters), this.headContainer);
  }

}
