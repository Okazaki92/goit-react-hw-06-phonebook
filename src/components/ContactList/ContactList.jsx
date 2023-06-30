import propTypes from "prop-types";
import styles from "./ConstactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const list = useSelector((state) => state.contacts.list);
  const filter = useSelector((state) => state.contacts.filter);
  const getFilteredContacts = () => {
    if (!filter) {
      return list;
    }

    return list.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const dispatch = useDispatch();

  const removeContact = (id) => {
    return dispatch(deleteContact(id));
  };
  const contacts = getFilteredContacts();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.list_item} key={id}>
          <p className="list_text">{name}</p>
          <p className="list_text">{number}</p>
          <button
            className={styles.list_button}
            type="submit"
            onClick={() => removeContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
