import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={styles.homediv}>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Hello and welcome to the Phone Book app – your ultimate contact
        companion! Easily manage your contacts, stay organized, and never lose a
        number again. Whether you're connecting with friends, colleagues, or
        family, our user-friendly interface makes keeping your contacts in order
        a breeze. Let's simplify your communication experience together!
      </p>
    </div>
  );
};

export default HomePage;
