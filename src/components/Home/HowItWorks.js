import React from "react";
import styles from "../../styles/homepage.module.scss";

const HowItWorks = () => {
  return (
    <section className={styles.how_it_works}>
      <span className={styles.how_it_works_heading}>How it works</span>
      <div className={styles.steps_container}>
        <div className={styles.step}>
          <div className={styles.number}>1</div>
          <span className={styles.step_heading}>Search</span>
          <span className={styles.step_content}>
            In-person or online, use the filters to find what you're looking
            for.
          </span>
        </div>
        <div className={styles.step}>
          <div className={styles.number}>2</div>
          <span className={styles.step_heading}>Book</span>
          <span className={styles.step_content}>
            To get in touch, use the BOOK NOW button and make payment on the
            provider's profile.
          </span>
        </div>
        <div className={styles.step}>
          <div className={styles.number}>3</div>
          <span className={styles.step_heading}>Appointment</span>
          <span className={styles.step_content}>
            The admin will connect with the provider to discuss a suitable time
            for a session.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
