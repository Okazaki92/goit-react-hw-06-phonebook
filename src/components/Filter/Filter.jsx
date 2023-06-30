import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { findContact } from "../../redux/contactsSlice";

export const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = (e) => {
    dispatch(findContact(e.currentTarget.value));
  };

  return (
    <div className={styles.filter}>
      <h2 className="filter_header">Search Contact by Name</h2>
      <input
        className={styles.filter_input}
        value={filter}
        onChange={filterContacts}
        type="text"
      />
    </div>
  );
};
