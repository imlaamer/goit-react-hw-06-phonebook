import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    saveContact(state, action) {
      state.contacts.push(action.payload);
      // return [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      // return state.contacts.filter(contact => contact.id !== action.payload);
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { saveContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
