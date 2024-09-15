import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../store/rootStore';
import Books from '../../common/Books';
import Filter from '../../common/Filter';
import ManageBooks from '../../common/ManageBooks';
import CounterPrivateBooks from '../../common/CounterPrivateBooks';
import { defaultUserId, defaultUserName } from '../../../shared/config';
import { filterAllBooks } from '../../../shared/constants/filterBookTypes';

const MainPage = observer(() => {
  const {
    userStore,
    filterStore,
    booksStore,
  } = useStore();

  useEffect(() => {
    userStore.model.setUserName(defaultUserName);
    userStore.model.setUserId(defaultUserId);
    filterStore.model.setFilterType(filterAllBooks);
  }, []);

  useEffect(() => {
    booksStore.getBooks({
      userName: userStore.model.userName,
      filterType: filterStore.model.filterType,
    });
  }, [filterStore.model.filterType, userStore.model.userName]);

  return (
    <>
      <Filter />
      <ManageBooks />
      <CounterPrivateBooks />
      <Books />
    </>
  );
});

export default MainPage;
