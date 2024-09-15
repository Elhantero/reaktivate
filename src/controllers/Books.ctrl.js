import { makeAutoObservable, runInAction } from 'mobx';
import BooksModel from '../models/Books.model';
import api from '../shared/ApiGateway';
import { API_BASE } from '../shared/config';
import filterBookTypeToApiParamMap from '../shared/constants/filterBookTypeToApiParamMap';

class BooksController {
  model;

  ApiGateway;

  constructor(model, ApiGateway) {
    this.model = model;
    this.ApiGateway = ApiGateway;
    makeAutoObservable(this);
  }

  async getBooks({
    userName = '',
    filterType = '',
  } = {}) {
    try {
      const url = [API_BASE, userName, filterBookTypeToApiParamMap[filterType]].join('/');
      const books = await this.ApiGateway.get(url);
      runInAction(() => {
        this.model.setBooks(books);
        this.model.setPrivateBooksCount(books.filter((book) => book.name === userName).length);
      });
    } catch (err) {
      runInAction(() => console.error(err));
    }
  }

  async addBook({
    userName = '',
    userId = 0,
  } = {}) {
    const newBook = {
      id: Date.now(),
      author: Math.random()
        .toString(32)
        .replace(/[^a-zA-Z]+/g, ''),
      name: userName,
      ownerId: userId,
    };
    const url = [API_BASE, userName].join('/');
    try {
      const { status } = await this.ApiGateway.post(url, newBook);
      runInAction(() => {
        if (status === 'ok') {
          this.model.addBook(newBook);
          this.model.setPrivateBooksCount(this.model.privateBooksCount + 1);
        }
      });
    } catch (e) {
      runInAction(() => console.error(e));
    }
  }

  async deleteAllPrivateBooks(userName = '') {
    const url = [API_BASE, userName, 'reset'].join('/');
    try {
      const { status } = await this.ApiGateway.put(url);
      runInAction(() => {
        if (status === 'ok') {
          this.model.deleteBooks();
          this.model.setPrivateBooksCount(0);
        }
      });
    } catch (e) {
      runInAction(() => console.error(e));
    }
  }
}

export default new BooksController(BooksModel, api);
