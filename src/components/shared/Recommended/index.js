import React from "react";
import styles from "./recommended.module.scss";
import LikeIcon from "../../../../public/assets/images/like-icon.svg";

const index = () => {
  return (
    <div className={styles.recommendation_div}>
      <img src={LikeIcon.src} />
      <span className={styles.recommendation}>Recommended by ImamConnect</span>
    </div>
  );
};

export default index;
