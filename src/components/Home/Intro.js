import React from "react";
import styles from "../../styles/homepage.module.scss";

const Intro = () => {
  const popularTags = [
    "Nikah",
    "Marriage & Family Services",
    "Classes",
    "Training",
    "Counselling",
    "Life update",
  ];

  return (
    <section className={styles.intro}>
      <div className={styles.inside_intro}>
        <p className={styles.intro_find_text}>
          FIND MUSLIM SERVICES PROVIDERS ON
        </p>
        <p className={styles.intro_welcome_text}>
          Welcome to the World's First Online Hub{" "}
          <span style={{ fontWeight: "700" }}>for Muslim Services</span>
        </p>
        <div style={{ width: "100%", position: "relative" }}>
          <input
            name="name"
            id="name"
            type="text"
            className={styles.intro_search_div}
            placeholder="Try Search: Nikah"
          />
          <img
            src="assets/images/searchIcon.svg"
            className={styles.intro_search_icon}
          />
        </div>
        <div style={{ textAlign: "start", width: "100%", paddingTop: "1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              textAlign: "start",
              gap: "2rem",
            }}
          >
            <p className={styles.popular_text}>Popular:</p>
            <div className={styles.popular_list}>
              {popularTags?.map((t, index) => (
                <div className={styles.popular_tag}>{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "35%", textAlign: "center" }}>
          <button className={styles.needs_primary_button}>
            Find your needs
          </button>
        </div>
        <img
          src="assets/images/girl-holding-books.svg"
          style={{ marginTop: "2rem" }}
        />
      </div>
    </section>
  );
};

export default Intro;
