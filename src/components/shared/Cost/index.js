import React from "react";
import styles from "./cost.module.scss";

const index = ({ price }) => {
  return (
    <div className={styles.price_div}>
      <span className={styles.price}>{price}</span>
    </div>
  );
};

export default index;
