import styles from './filter.module.css';

const Filter = ({ changeFilter }) => {
  return (
    <div className={styles.filter}>
      <input
        className={styles.input}
        onChange={changeFilter}
        id="filterID"
        name="filter"
        placeholder="Search contact..."
      />
    </div>
  );
};
export default Filter;
