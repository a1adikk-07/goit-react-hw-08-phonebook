import { useState, useId } from 'react';

import styles from './registration-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.block}>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          required
          placeholder="Name"
          className={styles.input}
        />
      </div>
      <div className={styles.block}>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
          placeholder="Email"
          className={styles.input}
        />
      </div>
      <div className={styles.block}>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
          placeholder="Password"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        Join
      </button>
    </form>
  );
};

export default RegisterForm;
