import { makeAutoObservable } from 'mobx';

class UserModel {
  userName = '';

  userId = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setUserName(userName) {
    this.userName = userName;
  }

  setUserId(userId) {
    this.userId = userId;
  }
}

export default new UserModel();
