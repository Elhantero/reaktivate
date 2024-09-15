import { makeAutoObservable } from 'mobx';
import FilterModel from '../models/Filter.model';

class FilterController {
  model;

  constructor(model) {
    this.model = model;
    makeAutoObservable(this);
  }
}

export default new FilterController(FilterModel);
