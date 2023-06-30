import React, { useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { storeContactsToLocalStorage } from "../redux/contactsSlice";

export const App = () => {
  const contacts = useSelector((state) => state.contacts.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if ((prev) => prev !== contacts) {
      dispatch(storeContactsToLocalStorage());
    }
  }, [dispatch, contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      {!contacts.length ? (
        <div className="noContacts">NO CONTACTS IN BOOK</div>
      ) : (
        <Filter />
      )}
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};
