import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const saveToLocalStorage = store => next => action => {
  const result = next(action);
  localStorage.setItem('contacts', JSON.stringify(store.getState()));
  return result;
};

const loadFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  if (contacts) {
    return JSON.parse(contacts);
  }
  return undefined;
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [...getDefaultMiddleware(), saveToLocalStorage],
  preloadedState: loadFromLocalStorage(),
});

export default store;