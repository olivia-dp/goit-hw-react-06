import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  },
  selectors: {
    selectContacts: (state) => state.items,
  },
  reducers: {
    addNewContact: (state, action) => {
       state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default slice.reducer;

export const { addNewContact, deleteContact} = slice.actions;

export const { selectContacts } = slice.selectors;


// contactsSlice.js має включати:
// редьюсери addContact та deleteContact
// функцію-селектор selectContacts
// :white_check_mark: filtersSlice.js має включати:
// редьюсери редьюсер changeFilter
// функцію-селектор selectNameFilter
// ментор писав у себе