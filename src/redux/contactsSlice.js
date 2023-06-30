import { createSlice } from "@reduxjs/toolkit";
let storageList =
  localStorage.getItem("contacts") === undefined
    ? JSON.parse(localStorage.getItem("contacts"))
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    list: storageList,
    filter: "",
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
    findContact(state, action) {
      state.filter = action.payload;
    },
    storeContactsToLocalStorage: (state) => {
      localStorage.setItem("contacts", JSON.stringify(state.list));
    },
  },
});

export const {
  addContact,
  deleteContact,
  findContact,
  storeContactsToLocalStorage,
} = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
