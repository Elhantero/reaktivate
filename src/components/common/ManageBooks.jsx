import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/rootStore';

const ManageBooks = observer(() => {
  const {
    booksStore,
    userStore,
  } = useStore();

  const addBookHandler = () => {
    booksStore.addBook({
      userName: userStore.model.userName,
      userId: userStore.model.userId,
    });
  };

  const deleteAllPrivateBooksHandler = () => {
    booksStore.deleteAllPrivateBooks(userStore.model.userName);
  };

  return (
    <div>
      <button type="button" onClick={addBookHandler}>Add book</button>
      <button type="button" onClick={deleteAllPrivateBooksHandler}>Delete all my books</button>
    </div>
  );
});

export default ManageBooks;
