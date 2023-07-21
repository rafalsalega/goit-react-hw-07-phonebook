import { createAction } from '@reduxjs/toolkit';
import {  nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const removeContact = createAction('contacts/removeContact');

export const setFilter = createAction('contacts/setFilter');