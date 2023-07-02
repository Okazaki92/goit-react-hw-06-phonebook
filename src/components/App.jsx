import React, { useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { storeContactsToLocalStorage } from "../redux/contactsSlice";
import { selectContactsList } from "../redux/selectors";

export const App = () => {
  const contacts = useSelector(selectContactsList);
  console.log(contacts.length);
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
        <div className="container">
          <Filter />
          <h2>Contacts</h2>
          {<ContactList />}
        </div>
      )}
    </div>
  );
};
