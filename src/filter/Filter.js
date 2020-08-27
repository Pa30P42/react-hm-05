import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ getFilterValue, filter }) => {
  return (
    <>
      <label className={styles.formWrapper}>
        <p className={styles.findContactTitle}>Find Contact by name</p>
        <input
          className={styles.formInput}
          value={filter}
          type="text"
          name="filter"
          onChange={getFilterValue}
        />
      </label>
    </>
  );
};

export default Filter;
