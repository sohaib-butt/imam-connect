import React from "react";
import styles from "../../styles/homepage.module.scss";

const Madina = () => {
  return (
    <section className={styles.madina}>
        <div className={styles.madina_gradient}></div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "1rem",
          zIndex: "9999",
        }}
      >
        <span className={styles.get_started_heading}>
          Lifetime Muslim Services on One Platform.
        </span>
        <span className={styles.get_started_content}>
          We offer a lot of services in just 1 click and simple.
        </span>
        <div style={{ width: "50%", textAlign: "center" }}>
          <button className={styles.needs_primary_button}>
            Let’s get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Madina;
