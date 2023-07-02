import { createSlice } from "@reduxjs/toolkit";
let storageList =
  localStorage.getItem("contacts") !== null
    ? JSON.parse(localStorage.getItem("contacts"))
    : [];
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    list: storageList,
  },
  reducers: {
    addContact(state, action) {
      state.list.push(action.payload);
    },
    deleteContact(state, action) {
      state.list = state.list.filter(
        (contact) => contact.id !== action.payload
      );
    },
    storeContactsToLocalStorage: (state, action) => {
      localStorage.setItem("contacts", JSON.stringify(state.list));
    },
  },
});

export const { addContact, deleteContact, storeContactsToLocalStorage } =
  contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
