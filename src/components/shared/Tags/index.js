import React from "react";
import styles from "./tags.module.scss";
import UserVoice from "../../../../public/assets/images/user-voice.svg";
import UserRole from "../../../../public/assets/images/user-role.svg";


const index = () => {
  return (
    <div className={styles.tags}>
      <div className={styles.tag_voice}>
        <img src={UserVoice.src} />
        <span className={styles.tag_voice_txt}>Arabic</span>
      </div>
      <div className={styles.tag_role}>
        <img src={UserRole.src} />
        <span className={styles.tag_role_txt}>Psychotherapist</span>
      </div>
    </div>
  );
};

export default index;
