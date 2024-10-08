import React from "react";
import styles from "../../styles/homepage.module.scss";

const Quiz = () => {
  return (
    <section className={styles.services}>
      <div className={styles.quiz}>
        <img src="assets/images/quiz.svg" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <span className={styles.quiz_heading}>Lifestyle Quizzes</span>
          <span className={styles.quiz_content}>
            One of the most popular searches on ImamConnect is Muslim Marriage
            Counselling. In order to be of better service to you regarding this
            service, we, in collaboration with our vetted Muslim counsellors,
            have designed a tool to do a marriage health check in just 2 minutes
          </span>
          <div className={styles.health_check_btn_div}>
            <button className={styles.needs_primary_button}>
              Muslim Marriage Health Check
            </button>
          </div>
        </div>
      </div>
      <div className={styles.quiz}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <span className={styles.quiz_heading}>
            Service Providers
            <br />
            Review.
          </span>
          <span className={styles.quiz_content}>
            See most of our partners using ImamConnect. Be one of them right
            now.
          </span>
        </div>
        <div
          className={styles.outer_review_div}
        >
          <div className={styles.review_div}>
            <img src="assets/images/avatar1.svg" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "1rem",
              }}
            >
              <span className={styles.reviewer}>Putri Azzahra</span>
              <span className={styles.review}>
                “I’m very happy to be one of service providers at ImamConnect.
                Really glad I can help so many people in this platform.”
              </span>
            </div>
          </div>
          <img src="assets/images/slider-dots.svg" />
        </div>
      </div>
    </section>
  );
};

export default Quiz;