import { useState, useMemo, memo, useCallback } from 'react';
import { nanoid } from 'nanoid';

import styles from './contact-form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};
// number instead of phone
const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;

    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ ...state });

    reset();
  };

  const reset = useCallback(() => {
    setState({ ...INITIAL_STATE });
  }, []);

  const phoneBookID = useMemo(() => nanoid(), []);
  const phoneNumberID = useMemo(() => nanoid(), []);

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={name}
        type="text"
        name="name"
        onChange={handleChange}
        id={phoneBookID}
        placeholder="name"
        required
      ></input>
      <input
        className={styles.input}
        value={number}
        type="tel"
        name="number"
        onChange={handleChange}
        id={phoneNumberID}
        placeholder="phone number"
        required
      ></input>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default memo(ContactForm);
