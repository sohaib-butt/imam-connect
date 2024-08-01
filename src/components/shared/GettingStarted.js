import React from "react";
import styles from "../../styles/homepage.module.scss";

const GettingStarted = () => {
  return (
    <section className={styles.get_started}>
      <div className={styles.get_started_card}>
        <div
          className={styles.get_started_card_inner}
        >
          <span className={styles.get_started_heading}>
            Lifetime Muslim Services on One Platform.
          </span>
          <span className={styles.get_started_content}>
            We offer a lot of services in just 1 click and simple.
          </span>
          <div className={styles.get_started_btn_div}>
            <button className={styles.needs_primary_button}>
              Let’s get started
            </button>
          </div>
        </div>
        <img
          src="assets/images/happy-girl.svg"
          className={`${styles.get_started_img} hidden lg:block`}
        />
      </div>
    </section>
  );
};

export default GettingStarted;
