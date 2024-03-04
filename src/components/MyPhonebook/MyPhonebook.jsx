import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/contacts-operations';

import { setFilter } from '../../redux/filter/filter-slice';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/contacts-selectors';

import styles from './my-phonebook.module.css';

const App = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const items = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <div>
        <h1>Contacts</h1>
        <Filter changeFilter={changeFilter} />
        {isLoading && <p>One second...</p>}
        {error && <p>{error} </p>}
        {Boolean(items.length) && (
          <ContactList items={items} deleteContact={onDeleteContact} />
        )}
      </div>
    </div>
  );
};

export default App;
