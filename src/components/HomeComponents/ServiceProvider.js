import React from "react";
import styles from "../../styles/homepage.module.scss";

const ServiceProvider = () => {
  return (
    <section className={styles.services}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span className={styles.txt_popular_services}>Popular services providers</span>
        <span className={styles.view_all}>View all</span>
      </div>
      <div className={styles.cards_container}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            gap: "95px",
            flexWrap: "wrap"
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => (
            <div className={styles.card} key={a}>
              <img
                src="assets/images/happy-girl.svg"
                alt="Putri Azzahra"
                className={styles.profile_picture}
              />
              <span className={styles.level}>Level 1</span>
              <img
                src="assets/images/heart.svg"
                alt="Putri Azzahra"
                className={styles.heart_icon}
              />
              <div className={styles.recommendation_div}>
                <img src="assets/images/like-icon.svg" />
                <span className={styles.recommendation}>Recommended by ImamConnect</span>
              </div>
              <div className={styles.location_div}>
                <img src="assets/images/location-icon.svg" />
                <span className={styles.location}>London, UK</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#E7E7E7",
                  marginTop: "10px",
                }}
              ></div>
              <div style={{ width: "100%" }}>
                <span className={styles.name}>Putri Azzahra</span>
              </div>

              <div className={styles.price_rating}>
                <div className={styles.price_div}>
                  <span className={styles.price}>$10.00</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
                <img src="assets/images/rating.svg" />
                <span className={styles.rating}>(372 reviews)</span>
              </div>
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
              <button className={styles.session_primary_button}>5 Sessions For $80</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider;