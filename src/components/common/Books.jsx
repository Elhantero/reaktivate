import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/rootStore';

const Books = observer(() => {
  const { booksStore } = useStore();

  if (!booksStore?.model?.books?.length) return null;

  return (
    <div>
      <ul>
        {booksStore.model.books.map((book) => (
          <li key={book.id}>
            <div>
              {book.author}
              :
              {book.name}
              :
              {book.id}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Books;
