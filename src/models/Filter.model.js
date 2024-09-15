import { makeAutoObservable } from 'mobx';

class FilterModel {
  filterType = '';

  constructor() {
    makeAutoObservable(this);
  }

  setFilterType(type) {
    this.filterType = type;
  }
}

export default new FilterModel();
