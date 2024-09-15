import { createContext, useContext } from 'react';
import UserController from '../controllers/User.ctrl';
import FilterController from '../controllers/Filter.ctrl';
import BooksController from '../controllers/Books.ctrl';

class RootStore {
  userStore = UserController;

  filterStore = FilterController;

  booksStore = BooksController;
}

export const rootStore = new RootStore();
export const RootStoreContext = createContext();
export const useStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error('You have forgotten to wrap your root component with RootStoreProvider');
  }
  return context;
};
