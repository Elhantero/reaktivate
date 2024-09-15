import { makeAutoObservable } from 'mobx';
import UserModel from '../models/User.model';

class UserController {
  model;

  constructor(model) {
    this.model = model;
    makeAutoObservable(this);
  }
}

export default new UserController(UserModel);
