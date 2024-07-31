import React from "react";
import styles from "../../styles/homepage.module.scss";

const MediaPartners = () => {
  const logos = [
    "assets/images/yahoo.svg",
    "assets/images/vulcan.svg",
    "assets/images/bbc.svg",
    "assets/images/islam.svg",
    "assets/images/arabnews.svg",
    "assets/images/lavanguaria.svg",
    "assets/images/malaymail.svg",
  ];

  return (
    <section className={styles.media_partners}>
      <span className={styles.txt_media_partners}>Our partner media</span>
      <div className={styles.media_list}>
        {logos?.map((l) => (
          <img src={l} alt="Logo" />
        ))}
      </div>
    </section>
  );
};

export default MediaPartners;
