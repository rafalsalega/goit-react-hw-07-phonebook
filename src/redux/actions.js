import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(
      'https://64baab025e0670a501d681f7.mockapi.io/contacts'
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const response = await axios.post(
      'https://64baab025e0670a501d681f7.mockapi.io/contacts',
      { name, phone }
    );
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    await axios.delete(
      `https://64baab025e0670a501d681f7.mockapi.io/contacts/${contactId}`
    );
    return contactId;
  }
);


export const setFilter = createAction('contacts/setFilter');