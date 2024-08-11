import React from "react";
import styles from "./recommended.module.scss";

const index = () => {
  return (
    <div className={styles.recommendation_div}>
      <img src="assets/images/like-icon.svg" />
      <span className={styles.recommendation}>Recommended by ImamConnect</span>
    </div>
  );
};

export default index;
