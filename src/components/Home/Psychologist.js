import React from "react";
import styles from "../../styles/homepage.module.scss";

const Psychologist = () => {
  return (
    <section className={styles.psychologist}>
      <img src="assets/images/psychologist.svg" />
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "1rem",
        }}
      >
        <span className={styles.quiz_heading}>
          Discover who you are in a relationship.
        </span>
        <span className={styles.psychologist_content}>
          Still don’t understand yourself to get to know others better? Book a
          schedule to understand yourself more.
        </span>
        <div style={{ width: "70%", textAlign: "center" }}>
          <button className={styles.needs_primary_button}>Book a Psychologist</button>
        </div>
      </div>
    </section>
  );
};

export default Psychologist;