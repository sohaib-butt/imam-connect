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
          padding: "5% 14% 5% 0%",
        }}
      >
        <span className={styles.madina_heading}>
          Have You Ever Dreamed of Having your Nikah Ceremony in Mecca or
          Madina?
        </span>
        <span className={styles.madina_content}>
          Now, with our exclusive Nikah Packages, you can make it into reality
        </span>
        <div style={{ width: "50%", textAlign: "center" }}>
          <button className={styles.needs_primary_button}>
            Nikah Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Madina;
