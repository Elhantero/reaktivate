import BookModel from '../models/Books.model';

describe('BookModel', () => {
  it('setBooks', () => {
    const books = [{}, {}, {}];
    BookModel.setBooks(books);
    BookModel.setBooks('not arr');
    BookModel.setBooks({});
    BookModel.setBooks();
    BookModel.setBooks(null);
    BookModel.setBooks(undefined);
    BookModel.setBooks(NaN);
    BookModel.setBooks(1);
    BookModel.setBooks(1, '1');
    BookModel.setBooks(new Set([1, 2, 3, 4]));
    BookModel.setBooks(new Map([[1, 2], [1, 2]]));
    BookModel.setBooks([[]]);

    expect(Array.isArray(BookModel.books)).toBe(true);
    expect(BookModel.books.length).toBe(books.length);
    expect(JSON.stringify(BookModel.books)).toBe(JSON.stringify(books));

    BookModel.setBooks([]);
    expect(BookModel.books.length).toBe(0);
  });

  it('addBook', () => {
    const book = {};
    BookModel.addBook(book);
    BookModel.addBook(1);
    BookModel.addBook('2');
    BookModel.addBook([{}]);
    BookModel.addBook(null);
    BookModel.addBook(undefined);
    BookModel.addBook(NaN);
    BookModel.addBook(1, 2);

    expect(Array.isArray(BookModel.books)).toBe(true);
    expect(BookModel.books.length).toBe(1);
    expect(JSON.stringify(BookModel.books)).toBe(JSON.stringify([book]));

    BookModel.addBook({ id: 1 });
    expect(JSON.stringify(BookModel.books)).toBe(JSON.stringify([book, { id: 1 }]));
  });

  it('setPrivateBooksCount', () => {
    const count = 8;
    BookModel.setPrivateBooksCount(count);
    BookModel.setPrivateBooksCount('count');
    BookModel.setPrivateBooksCount('');
    BookModel.setPrivateBooksCount(true);
    BookModel.setPrivateBooksCount(null);
    BookModel.setPrivateBooksCount(undefined);
    BookModel.setPrivateBooksCount(NaN);
    BookModel.setPrivateBooksCount({});
    BookModel.setPrivateBooksCount([]);
    BookModel.setPrivateBooksCount(() => {});

    expect(BookModel.privateBooksCount).toBe(count);
    BookModel.setPrivateBooksCount(count + 5);
    expect(BookModel.privateBooksCount).toBe(count + 5);
  });
});
