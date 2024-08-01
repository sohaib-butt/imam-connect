import React from "react";
import styles from "../../styles/homepage.module.scss";
import Image from "next/image";

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
        <span className={styles.intro_find_text}>
          FIND MUSLIM SERVICES PROVIDERS ON
        </span>
        <span className={styles.intro_welcome_text}>
          Welcome to the World's First Online Hub{" "}
          <span style={{ fontWeight: "700" }}>for Muslim Services</span>
        </span>
        <div style={{ width: "100%", position: "relative" }}>
          <input
            name="name"
            id="name"
            type="text"
            className={styles.intro_search_div}
            placeholder="Try Search: Nikah"
          />
          <div className={styles.intro_search_icon}>
            <Image
              src="assets/images/searchIcon.svg"
              // class={styles.intro_search_icon}
              fill
            />
          </div>
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
                <div key={index} className={styles.popular_tag}>{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.needs_btn_div}>
          <button className={styles.needs_primary_button}>
            Find your needs
          </button>
        </div>
        <img
          src="assets/images/girl-holding-books.svg"
          style={{ marginTop: "2rem" }}
          className='hidden lg:block'
        />
      </div>
    </section>
  );
};

export default Intro;
