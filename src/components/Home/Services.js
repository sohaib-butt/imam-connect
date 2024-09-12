import React from "react";
import styles from "../../styles/homepage.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      <span className={`${styles.txt_popular_services} hidden lg:block`}>
        Popular Services
      </span>
      <span className={`${styles.txt_popular_services} block lg:hidden`}>
        Services we offer for you
      </span>
      <div className={styles.service_list}>
        <div className={styles.marriage_container}>
          <span
            className="hidden lg:block"
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "-0.5px",
              textAlign: "left",
              color: "#999999",
            }}
          >
            Family services
          </span>
          <div className={styles.marriage}>
            <img src="assets/images/cuate.svg" className={styles.service_img} />
            <div className={styles.listing_count_div}>
              <div className={styles.listing_count}>232 listings</div>
            </div>
          </div>
          <span className={styles.txt_marriage_service}>
            Marriage and Family
            <br />
            Services
          </span>
        </div>
        <div className={styles.marriage_container}>
          <span
            className="hidden lg:block"
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "-0.5px",
              textAlign: "left",
              color: "#999999",
            }}
          >
            Life services
          </span>
          <div className={styles.life}>
            <img
              src="assets/images/rafiki.svg"
              className={styles.service_img}
            />
            <div className={styles.listing_count_div}>
              <div className={styles.listing_count}>232 listings</div>
            </div>
          </div>
          <span className={styles.txt_marriage_service}>Birth & Death</span>
        </div>
        <div className={styles.marriage_container}>
          <span
            className="hidden lg:block"
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "-0.5px",
              textAlign: "left",
              color: "#999999",
            }}
          >
            Development services
          </span>
          <div className={styles.training}>
            <img
              src="assets/images/breathing.svg"
              className={styles.service_img}
            />
            <div className={styles.listing_count_div}>
              <div className={styles.listing_count}>232 listings</div>
            </div>
          </div>
          <span className={styles.txt_marriage_service}>
            Classes, Training &<br />
            Services
          </span>
        </div>
        <div className={styles.marriage_container}>
          <span
            className="hidden lg:block"
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "-0.5px",
              textAlign: "left",
              color: "#999999",
            }}
          >
            Support services
          </span>
          <div className={styles.counsel}>
            <img
              src="assets/images/counsel.svg"
              className={styles.service_img}
            />
            <div className={styles.listing_count_div}>
              <span className={styles.listing_count}>232 listings</span>
            </div>
          </div>
          <span className={styles.txt_marriage_service}>
            Counselling & Support
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
