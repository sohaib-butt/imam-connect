import React from "react";
import styles from "../../styles/homepage.module.scss";

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback_heading_txt_div}>
        <span className={styles.feedback_heading_txt}>
          What Others <br />
          say?
        </span>
      </div>
      <div className={styles.feedback_first_div}>
        <div className={styles.feedback_quote_div}>
          <img
            src="assets/images/invertedCommas.svg"
            style={{ marginBottom: "2rem" }}
          />
          <div className={styles.feedback_content_div}>
            <span className={styles.feedback_content}>
              I was struggling with personal issues and feeling overwhelmed.
              Booking a counseling session through{" "}
              <span style={{ fontWeight: "700" }}>ImamConnect</span> was the
              best decision I made. The counselor was understanding,
              compassionate, and provided guidance rooted in Islamic principles.
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="assets/images/avatar-circle.svg"
            className={styles.feedback_avatar}
          />
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "36px",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            Lora Smith
          </span>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
