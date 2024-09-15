import { makeAutoObservable } from 'mobx';
import isObject from '../shared/helpers/isObject';

class BooksModel {
  books = [];

  privateBooksCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setBooks(books) {
    if (Array.isArray(books) && (books.every((book) => isObject(book)) || !books.length)) {
      this.books = books;
    }
  }

  addBook(book) {
    if (isObject(book)) {
      this.books.push(book);
    }
  }

  deleteBooks() {
    this.books = [];
  }

  setPrivateBooksCount(count) {
    if (typeof count === 'number' && !Number.isNaN(count)) {
      this.privateBooksCount = count;
    }
  }
}

export default new BooksModel();
