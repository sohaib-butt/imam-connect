import React from "react";
import styles from '../styles/homepage.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src='assets/images/imamLogo.svg' />
      <div className={styles.navigation_menu}>
        <div className={styles.menu_items_div}>
          <span>
            <a href="/homepage" id="home" className={`${styles.sub_menu_item} ${styles.selected}`}>
              Home
            </a>
          </span>
          <span>
            <a href="/aboutus" id="about-us" className={styles.sub_menu_item}>
              About Us
            </a>
          </span>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              <a href="/services" id="services" className={styles.sub_menu_item}>
                Services
              </a>
            </span>
            <img
              src="assets/images/downArrow.svg"
              style={{ cursor: "pointer" }}
            />
          </div>
          <span>
            <a
              href="/testimonials"
              id="testimonials"
              className={styles.sub_menu_item}
            >
              Testimonials
            </a>
          </span>
        </div>
        <div style={{ width: "5%" }}></div>
        <div className={styles.search_and_buttons_div}>
          <div style={{ width: "50%", position: "relative" }}>
            <input
              name="name"
              id="name"
              type="text"
              className={styles.header_search_div}
              placeholder="Search"
            />
            <img
              src="assets/images/searchIcon.svg"
              className={styles.header_search_icon}
            />
          </div>

          <div className={styles.buttons_div}>
            <button type="button" className={styles.primary_button}>
              Register
            </button>
            <button type="button" className={styles.primary_outline_button}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
