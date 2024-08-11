import React from "react";
import styles from "./tags.module.scss";

const index = () => {
  return (
    <div className={styles.tags}>
      <div className={styles.tag_voice}>
        <img src="assets/images/user-voice.svg" />
        <span className={styles.tag_voice_txt}>Arabic</span>
      </div>
      <div className={styles.tag_role}>
        <img src="assets/images/user-role.svg" />
        <span className={styles.tag_role_txt}>Psychotherapist</span>
      </div>
    </div>
  );
};

export default index;
