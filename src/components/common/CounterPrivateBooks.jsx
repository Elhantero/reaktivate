import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/rootStore';

const CounterPrivateBooks = observer(() => {
  const { booksStore } = useStore();

  return (
    <div>
      My books count:
      {' '}
      {booksStore.model.privateBooksCount}
    </div>
  );
});

export default CounterPrivateBooks;
